import { readFileSync } from 'node:fs';
import { canonicalResource } from '../src/lib/content/event-note-links.ts';

/** Inspect rendered anchors, so accidental links in any article area are covered.
 * @param {string} html
 * @param {string} name
 */
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
  const visibleText = article.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ');
  if (/錄音|逐字稿|來源相對時間|\bASR\b|transcript|relative (?:recording|source) time|\b\d{2}:\d{2}:\d{2}\b/i.test(visibleText)) {
    errors.push(`${name}: public source-time or transcript wording remains`);
  }
  const fields = [...article.matchAll(/<dt\b[^>]*>([\s\S]*?)<\/dt>/g)].map(m => m[1].replace(/<[^>]*>/g, '').trim());
  const expected = fields[0] === '活動名稱'
    ? ['活動名稱', '日期', '類型／形式', '主講人', '主辦單位', '公開地點／平台', '教材']
    : ['Event', 'Date', 'Type / format', 'Presenter', 'Organizer', 'Public venue / platform', 'Materials'];
  if (JSON.stringify(fields) !== JSON.stringify(expected)) errors.push(`${name}: event metadata differs from the simplified fields`);
  for (const [index, match] of [...article.matchAll(/<section\b[^>]*data-lesson[^>]*>([\s\S]*?)<\/section>/g)].entries()) {
    const lesson = match[1];
    const text = lesson.replace(/<[^>]*>/g, ' ').trim();
    const stepCount = (lesson.match(/<li\b/g) ?? []).length;
    if (!lesson.includes('data-teaching') || !lesson.includes('data-workflow') || !lesson.includes('data-example') || !lesson.includes('data-practice') || stepCount < 3 || text.length < 400) {
      errors.push(`${name}: chapter ${index + 1} needs substantial teaching, workflow, example and exercise`);
    }
  }
  if (!errors.length) console.log(`PASS: ${name}: ${lessons} complete teaching topics, ${qa} Q&A, ${seen.size} unique external resources; simplified metadata, no source-time labels or broken anchors.`);
  return errors;
}

export function checkBuiltEventNotes() {
  return ['', 'zh-tw/'].flatMap(prefix => {
    const path = `build/${prefix}event-notes/2026-10-24-web-animation/index.html`;
    return checkEventNote(readFileSync(path, 'utf8'), path);
  });
}
