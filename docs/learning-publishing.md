# Daily learning publishing

Adopted 2026-09-21. Jason explains what he understood; the editor checks,
organizes and translates it. One learning day produces one bilingual article
at one URL. Publication follows Jason's confirmation of both sections. A
published article is evidence of the writing output; quiz corrections and
practical acceptance keep their own records.

## Daily workflow

1. Confirm the subject, remaining study time and endpoint. Reuse the subject's
   ten-question session; keep choice/confidence and original/retest scores.
2. Ask Jason to explain the question, newly understood concepts, an example,
   a correction and the next question in his own words. A short explanation
   or dictated account is enough to start editing.
3. Copy `templates/daily-learning.mdx` into ignored `.local/drafts/`. Use a
   stable lowercase, hyphenated filename such as `2026-09-21-topic.mdx`.
4. Edit the Chinese explanation first; produce equivalent plain English.
   Define terms and notation, preserve uncertainty, and cite public sources.
   Do not invent learner actions, scores or experimental results. Prepared
   text alone never establishes that Jason understood the topic.
5. Present the bilingual draft for Jason's content confirmation. Keep
   unpublished private source notes in their subject or protected repository.
6. After confirmation, set `draft: false`, set `pubDate` to the actual Taipei
   publication date and copy the reviewed file to `src/content/blog/`.
   `learningDate` remains the date of the actual learning, even when published
   later. Check related-article links and the series position.
7. Run `npm test`, `npm run check`, `npm run build`; review the production
   preview at desktop and phone widths. Publish the scoped change to `main`
   through the existing Pages workflow, following session Git authorization.
8. Verify the Pages run and the public article URL, both language sections,
   formulas, footer links, RSS and homepage eligibility. Only then record the
   publication URL and completion in Planning. Failure leaves a confirmed
   draft and a specific deployment blocker, not an accepted publication.

There is no autonomous daily schedule. Writing and correction consume the
existing study budget. Partial sessions resume from the saved endpoint. Rest
days do not acquire a posting obligation, and there is no minimum word count.
The first real article requires Jason's actual explanation and confirmation.

## Article metadata and reading paths

Keep existing title, description, `pubDate`, tags and slug fields. New fields:

| Field | Meaning |
| --- | --- |
| `kind` | `essay` (legacy default) or `daily-learning` |
| `learningDate` | Actual learning date, `YYYY-MM-DD`; required for daily learning |
| `languages` | `[zh-Hant, en]` for daily articles; `[en]` is the legacy default |
| `series`, `order` | Optional series slug and unique positive reading position |
| `relations` | Explicit target slug, type, English reason and Chinese `reasonZh` |

Daily articles require both `<section id="zh" lang="zh-Hant">` and
`<section id="en" lang="en">`, using blank lines around Markdown inside them.
Language jumps work without JavaScript. Each learning date has at most one
published daily article; unrelated topics can be separate sections in it.

Define larger questions in `src/lib/content/blog-series.json`: slug, bilingual
title/description and a short roadmap. Series pages list only published
articles, in editorial order. Roadmap text may describe future coverage; it
is not a link to an unpublished page. Existing essays form an initial reading
series and do not count as new daily learner output.

Relation types describe the current article's link to the target:

- `prerequisite`: read the target first to understand this article.
- `extends`: this article builds on the target's argument or example.
- `related`: the target provides a useful connected perspective.

Give a specific reason instead of relying on shared tags. Incoming links are
computed automatically. Unknown/unpublished targets, self-links, duplicate
slugs and series positions fail the build with the relevant filename. Leave
`relations: []` when no justified connection exists; the footer says so.

The build-time module manifest omits drafts and future-dated articles before
bundling, routing or RSS/sitemap generation. A future date does not schedule a
publication: a later build is required. Unreviewed drafts belong in `.local/`,
not in this public Git repository. Historical `zh-tw/` and `ja/` source
inventories remain outside the top-level publishing manifest.

## Homepage dates

The English and Chinese homepages show all articles first published today or
in the preceding two calendar days in Asia/Taipei. An `updatedDate` does not
make an old article new. The browser refreshes the window at Taipei midnight,
on returning to the tab and on page restoration. Without JavaScript, the
prerendered page labels its dated list “Latest writing”, without claiming it
reflects the current three-day window. Empty windows link to the archive.

## Scientific notation

Use `$x_i^2$` inline and `$$` on separate lines around display mathematics.
KaTeX runs during mdsvex preprocessing; the site bundles its CSS/fonts and
renders HTML plus accessible MathML. Fractions, sums, matrices, Greek letters
and scientific notation are supported. Explain every symbol and assumption
in the prose. Wide display formulas scroll within the article on phones.

Example:

```text
The sample mean is $\bar{x}$.

$$
\bar{x}=\frac{1}{n}\sum_{i=1}^{n}x_i
$$
```

Escape ordinary currency as `\$20`; code spans/fences stay literal. Invalid
TeX fails the build with its source location. KaTeX input remains untrusted
(`trust: false`); generated HTML is serialized before Svelte compilation so
TeX braces cannot become Svelte expressions. `remark-math` stays at major 3
for the parser bundled with mdsvex 0.12; test before changing that pairing.
See [KaTeX options](https://katex.org/docs/options) and
[mdsvex's math example](https://github.com/pngwn/mdsvex-math).

## Instagram reuse

Use `templates/instagram-one-concept.md` for 「非典型台清交博士生」. Select one
concept from an approved public Blog article, preserve its evidence and
scope, and provide a caption plus image descriptions. Chinese with English
technical terms is the default. The template defines an optional six-slide
story, not a production quota, posting schedule or authorization to publish.
A concrete account handle and posting request are needed before delivery.

## Verification and ownership

Website owns public text, editing templates, mathematics, metadata,
relationships, builds and publication evidence. Subject repos own original
answers, confidence, retests, raw learning sources and practical evidence.
Planning owns capacity, status and locators.

`npm test` protects date boundaries, metadata validation, draft exclusion,
series order, reverse links, bilingual shape and math compilation. CI runs
these tests plus Svelte checks and a static build before deployment.
Use actual rendered-page inspection for language anchors, table of contents,
mobile layout, equations and navigation. The optional host skill
`anti-ai-rhetoric-lint` was unavailable at implementation; use the existing
voice contract and preserve numbers, citations and uncertainty.


## Implementation verification — 2026-09-21

- Ten publishing/math tests passed; Svelte check reported zero errors/warnings.
- Production build succeeded with five existing articles and one editorial
  reading series. No daily learning completion has been added.
- A local synthetic bilingual fixture exercised language anchors, fourteen
  MathML expressions, series links, backlinks and table-of-contents refresh.
  At a 390 px viewport the document remained 390 px wide; its long formula
  scrolled inside a 368 px container. Browser error/warning logs were empty.
- The daily-learning filter returned only the fixture. The fixture and test
  draft/future articles were moved to ignored local storage before the release
  build. Release HTML, JavaScript and XML contain none of their identifiers.
- RSS and sitemap parse as XML. The original five article URLs and their
  `/writing/` canonical aliases remain available. Publication-time checks use
  the deployed Pages URL, separately from these local checks.
- Compatible dependency fixes removed the reported high/moderate findings.
  The remaining audit chain is three low findings through SvelteKit's `cookie`
  dependency. This site deploys static files; the suggested forced downgrade
  was not applied. Recheck that dependency on the next framework update.

Detailed transient logs and local fixtures live in ignored
`.local/learning-blog-validation/`. Browser verification used the available
computer-use browser because the `agent-browser` CLI was not installed.
