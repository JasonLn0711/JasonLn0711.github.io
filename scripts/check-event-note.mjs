import { readFileSync } from 'node:fs';
import { canonicalResource } from '../src/lib/content/event-note-links.ts';

/** Inspect rendered anchors, so accidental links in any article area are covered. */
export function checkEventNote(html, name) {
  const errors = [];
  const article = html.match(/<article\b[^>]*data-event-note[^>]*>([\s\S]*?)<\/article>/)?.[1];
  if (!article) return [`Missing event article: ${name}`];
  const ids = new Set([...article.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]));
  const seen = new Map();
  for (const [, encoded] of article.matchAll(/<a\b[^>]*\bhref="([^"]+)"/g)) {
    const href = encoded.replaceAll('&amp;', '&');
    if (href.startsWith('#') && !ids.has(href.slice(1))) errors.push(`${name}: broken anchor ${href}`);
    if (!/^https?:\/\//.test(href)) continue;
    const key = canonicalResource(href);
    const variants = seen.get(key) ?? [];
    variants.push(href); seen.set(key, variants);
  }
  for (const [key, variants] of seen) {
    if (variants.length > 1) errors.push(`${name}: duplicate external resource ${key}: ${variants.join(', ')}`);
  }
  const lessons = (article.match(/data-lesson(?:=|\s|>)/g) ?? []).length;
  const qa = (article.match(/data-session-qa(?:=|\s|>)/g) ?? []).length;
  if (lessons !== 16 || qa !== 13) errors.push(`${name}: expected 16 chapters / 13 Q&A, got ${lessons} / ${qa}`);
  const times = [...article.matchAll(/data-session-time[^>]*>(\d{2}:\d{2}:\d{2})/g)].map(m => m[1]);
  if (times.length !== 16 || times.some((t, i) => i && t < times[i - 1])) errors.push(`${name}: missing or non-monotonic chapter times`);
  if (!errors.length) console.log(`PASS: ${name}: ${lessons} chronological chapters, ${qa} Q&A, ${seen.size} external resources, no duplicates or broken article anchors.`);
  return errors;
}

export function checkBuiltEventNotes() {
  return ['', 'zh-tw/'].flatMap(prefix => {
    const path = `build/${prefix}event-notes/2026-10-24-web-animation/index.html`;
    return checkEventNote(readFileSync(path, 'utf8'), path);
  });
}
