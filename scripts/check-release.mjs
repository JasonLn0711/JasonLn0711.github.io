import { checkBuiltEventNotes } from './check-event-note.mjs';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import path from 'node:path';

const start = performance.now();
console.error('Release check: scanning public source and static output.');
const errors = [];
const secretPatterns = [/-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/, /\bgh[pousr]_[A-Za-z0-9]{30,}\b/, /\bAKIA[0-9A-Z]{16}\b/];
const tracked = execFileSync('git', ['ls-files', '-co', '--exclude-standard', '-z'], {encoding:'utf8'}).split('\0').filter(Boolean);
for (const file of tracked) {
  if (!/\.(?:[cm]?[jt]s|svelte|jsonc?|ya?ml|md|txt|html|css)$/.test(file) || !statSync(file).isFile()) continue;
  const content = readFileSync(file, 'utf8');
  if (secretPatterns.some(pattern => pattern.test(content))) errors.push(`Possible credential in ${file}; inspect privately.`);
}
let checked = 0;
function walk(dir) {
  for (const item of readdirSync(dir, {withFileTypes:true})) {
    const file = path.join(dir,item.name);
    if (item.isDirectory()) { walk(file); continue; }
    if (/^(?:\.env|\.git)/.test(item.name) || item.name.endsWith('.map')) errors.push(`Non-public asset ${file}`);
    if (!file.endsWith('.html')) continue;
    const html = readFileSync(file,'utf8'); checked++;
    if (file.endsWith('404.html')) continue;
    if (!html.includes('rel="canonical"')) errors.push(`Missing canonical: ${file}`);
    for (const match of html.matchAll(/(?:href|src)="(\/[^"#?]*)(?:[?#][^"]*)?"/g)) {
      let target;
      try { target = path.join('build',decodeURIComponent(match[1])); } catch {errors.push(`Bad URL in ${file}`); continue;}
      try { if (statSync(target).isDirectory()) target = path.join(target,'index.html'); statSync(target); }
      catch { errors.push(`Missing internal path ${match[1]} in ${file}`); }
    }
  }
}
walk('build');
errors.push(...checkBuiltEventNotes());
if (errors.length) { console.error([...new Set(errors)].join('\n')); process.exitCode=1; }
else console.log(`PASS: ${checked} HTML pages, internal paths and targeted credential patterns; ${((performance.now()-start)/1000).toFixed(1)}s.`);
