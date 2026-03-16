---
title: Fraud Conversation Analysis with RAG
summary: A research-led case study on retrieval-augmented fraud conversation analysis, designed to keep LLM outputs grounded in transcript evidence for high-stakes review.
year: 2026
role: Doctoral Researcher
category: Fraud Analysis
stack:
  - Python
  - RAG
  - LLM Pipelines
  - Transcript Analysis
  - Evidence Grounding
featured: true
status: Active Research
cover: /projects/fraud-conversation-analysis-rag.svg
---

## Fraud conversation analysis needs more than fluent summaries

Fraud-related conversations contain intent, persuasion strategies, role shifts, and evidence cues that are difficult to recover from raw transcripts alone. A fluent summary may look helpful, but in serious workflows it becomes risky if the result is not tied back to the underlying dialogue evidence.

This is especially true when analysts are not asking only “What happened?” but also “Which parts of the transcript support that interpretation?” and “What remains uncertain?” Those are evidence questions, not just summarization questions.

## Why grounded RAG matters for fraud analysis

Fraud analysis is a high-stakes setting where accuracy, traceability, and explanation matter. In contexts like this, I find Cynthia Rudin's argument in [*Stop Explaining Black Box Machine Learning Models for High Stakes Decisions and Use Interpretable Models Instead*](https://doi.org/10.1038/s42256-019-0048-x) especially relevant: the issue is not just whether an answer sounds plausible, but whether the system is inspectable enough for the task.

A grounded RAG workflow offers a more defensible path because it can surface relevant conversation segments without asking analysts to trust unsupported model outputs.

## Research approach

The project uses transcript indexing, retrieval, and LLM-based reasoning to answer fraud-analysis questions while preserving links to the original dialogue. The conceptual starting point is the original [Retrieval-Augmented Generation paper](https://arxiv.org/abs/2005.11401), which established why retrieval should be treated as a first-class mechanism for factual grounding rather than a superficial extension to generation.

In this project, the goal is not only classification or summarization. It is evidence-aware interpretation: producing answers that remain anchored to recoverable transcript segments and are therefore more useful for analyst review.

## Workflow design

1. Prepare and segment fraud-related conversation transcripts so evidence-bearing spans can be recovered efficiently.
2. Build retrieval over dialogue passages that are relevant to fraud tactics, intent signals, and supporting context.
3. Use LLM prompting only within a grounded pipeline, where generated outputs can be traced back to supporting transcript evidence.
4. Evaluate the workflow in terms of traceability, hallucination control, and analyst usefulness rather than raw fluency alone.

## Evaluation lens

One reason this evaluation problem matters is that long context alone is not a reliable substitute for retrieval discipline. [*Lost in the Middle*](https://arxiv.org/abs/2307.03172) showed that language models often use long context unreliably, especially when relevant information sits away from the edges of the prompt. That finding reinforces the importance of retrieval and evidence presentation in conversation analysis workflows.

The project therefore provides a practical way to study how RAG can support fraud analysis without losing evidence linkage. It also creates a reusable setup for comparing:

- retrieval quality over evidence-bearing dialogue
- grounding quality of model outputs
- conversation-level reasoning under realistic ambiguity
- analyst confidence in the evidence that supports the answer

What I care about most is not whether the model sounds decisive, but whether the pipeline helps an analyst reason more carefully with less unsupported interpretation.

## Visual summary

![Fraud conversation analysis with RAG visual](/projects/fraud-conversation-analysis-rag.svg)

## Current status

This portfolio case study is presented as an active research direction and can expand over time into stronger evaluation artifacts, code release, and publication-ready results.

For readers who want the adjacent research framing, the related essay on [evidence-aware system design and trustworthy AI](/blog/investigation-and-trustworthy-ai/) and the broader [research page](/research/) provide useful context. If you are working on trustworthy RAG, fraud intelligence, or evidence-aware review workflows, I would be very open to discussing possible collaboration through the [contact page](/contact/).
