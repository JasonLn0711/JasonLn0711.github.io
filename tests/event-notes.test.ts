import test from 'node:test';
import assert from 'node:assert/strict';
import { eventNotes } from '../src/lib/content/site.ts';
import { canonicalResource } from '../src/lib/content/event-note-links.ts';
import { checkEventNote } from '../scripts/check-event-note.mjs';

const fields = ['Event','Date','Type / format','Presenter','Organizer','Public venue / platform','Materials'];
const fixture = `<article data-event-note><dl>${fields.map(x=>`<dt>${x}</dt><dd>value</dd>`).join('')}</dl>${Array.from({length:16},(_,i)=>`<section id="note-${i+1}" data-lesson><div data-teaching>${'Substantive teaching with a defined use case. '.repeat(12)}</div><ol data-workflow><li>Plan</li><li>Build</li><li>Review</li></ol><p data-example>Website example</p><div data-practice>Exercise</div></section>`).join('')}${'<div data-session-qa>Question and answer</div>'.repeat(13)}<a href="https://hera.video/">Hera</a></article>`;

test('the rendered-article gate accepts teaching and rejects removed metadata or time labels', () => {
  assert.deepEqual(checkEventNote(fixture,'fixture'), []);
  assert(checkEventNote(fixture.replace('<dt>Date</dt>','<dt>Scheduled time</dt>'),'old metadata').some(x=>x.includes('metadata')));
  assert(checkEventNote(fixture.replace('</article>','<p>Relative source time 00:12:30</p></article>'),'old time').some(x=>x.includes('source-time')));
  assert(checkEventNote(fixture.replace('data-workflow','missing-workflow'),'incomplete topic').some(x=>x.includes('chapter 1')));
});

test('resource deduplication rejects tracking variants but keeps distinct documentation', () => {
  assert.equal(canonicalResource('https://hera.video/?utm_source=example&ref=producthunt#intro'),canonicalResource('https://hera.video/'));
  assert.notEqual(canonicalResource('https://gsap.com/'),canonicalResource('https://gsap.com/docs/v3/GSAP/'));
  assert(checkEventNote(fixture.replace('</article>','<a href="https://hera.video/?utm_source=example#intro">Again</a></article>'),'duplicate').some(x=>x.includes('duplicate external resource')));
});

test('both languages retain 16 substantive topics, exercises and 13 actual Q&A', () => {
  const entry=eventNotes[0];
  assert.deepEqual(entry.zh.sections.map(x=>x.id),entry.en.sections.map(x=>x.id));
  for(const lang of ['zh','en'] as const){
    const copy=entry[lang];
    assert.equal(copy.sections.length,16);assert.equal(copy.sessionQa.length,13);
    assert.equal(new Set(copy.sections.map(x=>x.id)).size,16);
    for(const section of copy.sections){
      assert(section.paragraphs.length>=2);assert.equal(section.steps.length,3);
      assert(section.example.length>60);assert(section.practice.length>35);
      assert(!('time' in section));assert(!('context' in section));
    }
    assert(copy.sessionQa.every(x=>!('time' in x)));
    assert(!/錄音|逐字稿|transcript|\d{2}:\d{2}:\d{2}/i.test(JSON.stringify(copy)));
  }
});
