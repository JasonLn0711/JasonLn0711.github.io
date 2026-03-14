---
title: Fraud Conversation Analysis with RAG
summary: A retrieval-augmented workflow for analyzing fraud-related conversations, surfacing suspicious patterns, and keeping LLM outputs grounded in transcript evidence.
year: 2026
role: Doctoral Researcher
category: Fraud
stack:
  - Python
  - Transformers
  - RAG
  - LLM Pipelines
  - Evaluation
featured: true
status: Ongoing Research
cover: /projects/fraud-conversation-analysis-rag.svg
---

## Problem

Fraud-related conversations contain intent, persuasion strategies, and evidence cues that are difficult to recover from raw transcripts alone. Standard LLM summaries can be useful, but they become risky when they are not tied back to the underlying evidence.

## Why It Matters

Fraud analysis is a high-stakes setting where accuracy, traceability, and explanation matter. A grounded RAG system can help surface relevant conversation segments without asking users to trust unsupported model outputs.

## Approach / Method

The system uses transcript indexing, retrieval, and LLM-based reasoning to answer fraud-analysis questions while maintaining links to the original dialogue. The goal is not only classification, but also evidence-aware interpretation and investigator-friendly review.

## System Design

1. Prepare and segment fraud-related conversation transcripts.
2. Build retrieval over evidence-relevant dialogue passages.
3. Use LLM prompts to summarize suspicious patterns and answer grounded questions.
4. Evaluate output quality with a focus on traceability, hallucination control, and analyst usefulness.

## Results / Evaluation

The project provides a practical way to study how RAG can support fraud analysis without losing evidence linkage. It also creates a reusable setup for comparing retrieval quality, answer grounding, and conversation-level reasoning performance.

## Gallery or Visuals

![Fraud conversation analysis with RAG visual](/projects/fraud-conversation-analysis-rag.svg)

## Links

This portfolio case study can be extended with code releases, evaluations, and future publications as the work matures.
