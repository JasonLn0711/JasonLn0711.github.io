---
title: Fraud Conversation Analysis with RAG
summary: A retrieval-augmented workflow for analyzing fraud-related conversations, surfacing suspicious patterns, and keeping language-model outputs grounded in transcript evidence.
year: 2026
role: Doctoral Researcher
kind: prototype
mode: original
category: Operational Intelligence
problem: Fraud-related conversations often contain subtle cues, intent shifts, and evidence fragments that are difficult to recover from raw transcripts or ungrounded summaries alone.
importance: Fraud analysis is a trust-sensitive setting. Systems used here need grounded retrieval, traceable reasoning, and outputs that help analysts inspect the evidence instead of obscuring it.
stack:
  - Python
  - Transformers
  - RAG
  - LLM Pipelines
  - Evaluation
tags:
  - Fraud Detection
  - Grounded Generation
  - Decision Support
featured: false
status: Research prototype
cover: /projects/fraud-conversation-analysis-rag.svg
---

## Problem framing

The real challenge is not simply generating a summary of a conversation. It is helping a reviewer understand what happened, what patterns matter, and what evidence supports the interpretation.

## Design direction

This prototype treats fraud analysis as a retrieval and reasoning problem:

1. Segment the conversation into evidence-relevant units
2. Retrieve passages aligned with the analyst's question
3. Use an LLM for grounded synthesis rather than free-form speculation
4. Preserve links back to the original dialogue

## Why it belongs in this portfolio

It represents the intersection of my research interests in trustworthy AI, speech and language systems, and operational workflows where unsupported outputs are not acceptable.
