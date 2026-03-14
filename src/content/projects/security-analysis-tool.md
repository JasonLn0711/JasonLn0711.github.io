---
title: Security Intelligence Analysis Workbench
summary: An OSINT-oriented workflow for collecting security reporting, clustering related events, and surfacing actionable context for analysts.
year: 2025
role: Research Engineer
category: Cybersecurity
stack:
  - Python
  - Scrapy
  - Sentence Embeddings
  - Dashboards
  - OSINT
featured: true
status: MVP Case Study
cover: /projects/security-analysis-tool.svg
---

## Problem

Threat and fraud researchers often rely on fragmented reporting across many sources. Manual review is expensive, and weak collection workflows make it hard to compare related incidents or preserve source provenance.

## Why It Matters

Security decisions improve when analysts can move from scattered news articles to structured themes, timelines, and clusters with less repetitive work. Faster context building leads to better investigative prioritization.

## Approach / Method

This workbench starts with source collection, applies text normalization and enrichment, then groups related reports through semantic similarity. The interface favors traceability by keeping the original source, the derived cluster, and the analyst notes visible together.

## System Design

1. Crawl and normalize source material.
2. Extract metadata for dates, organizations, and topics.
3. Build similarity groups for related reporting.
4. Present clusters in a lightweight dashboard for review.

## Results / Evaluation

The system reduced the time needed to review large batches of security news and made it easier to identify recurring themes. Clustering also helped reveal when multiple reports described the same event from different angles.

## Gallery or Visuals

![Security intelligence workbench visual](/projects/security-analysis-tool.svg)

## Links

Future iterations can add public artifacts such as a demonstration dashboard, write-up, or repository.
