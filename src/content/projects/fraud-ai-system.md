---
title: Fraud Method Classification System
summary: A research-driven text analysis system for triaging fraud incidents with interpretable AI signals and clearer analyst review paths.
year: 2025
role: Research Engineer
category: Fraud
stack:
  - Python
  - Transformers
  - SHAP
  - Streamlit
  - Evaluation
featured: true
status: MVP Case Study
cover: /projects/fraud-ai-system.svg
---

## Problem

Fraud reports are often written as short, inconsistent narratives. Analysts need to quickly identify likely fraud methods, compare similar cases, and understand which parts of a report drove the recommendation.

## Why It Matters

When fraud triage is slow or opaque, teams spend more time verifying routine cases and less time investigating the patterns that matter. A system that improves consistency and transparency can reduce operational drag without forcing analysts to trust a black box.

## Approach / Method

The system combines language model embeddings with supervised classification on structured fraud summaries. Explanatory signals are surfaced through feature inspection and confidence-aware ranking so the output remains useful during review, not just in offline evaluation.

## System Design

1. Normalize incident summaries and extracted entities.
2. Encode text into embeddings for class prediction and nearest-neighbor recall.
3. Present a ranked fraud method suggestion with explanation traces.
4. Record analyst overrides for later evaluation and calibration.

## Results / Evaluation

The prototype improved consistency in fraud method labeling and made error analysis faster by exposing which narratives were confused by the model. Even in ambiguous cases, the system provided a clearer starting point for human review.

## Gallery or Visuals

![Fraud method classification system visual](/projects/fraud-ai-system.svg)

## Links

This MVP case study is presented as a portfolio summary and can be extended later with a public repository, paper, or live demo.
