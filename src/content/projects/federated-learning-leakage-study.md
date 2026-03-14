---
title: Federated Learning Leakage Study
summary: An AI security research study focused on privacy leakage, model exposure, and the assumptions embedded in collaborative learning workflows.
year: 2026
role: Doctoral Researcher
kind: experiment
mode: study
category: Trustworthy AI
problem: Federated learning is often presented as privacy-preserving by design, but collaborative training can still expose sensitive information through updates, gradients, or weak threat assumptions.
importance: Systems intended for regulated or sensitive domains need a more rigorous understanding of where leakage risk actually comes from and which defenses meaningfully improve security.
stack:
  - PyTorch
  - Federated Learning
  - Privacy
  - Security
  - Evaluation
tags:
  - Leakage Analysis
  - Privacy Risk
  - Security Research
featured: false
status: Ongoing study
cover: /projects/federated-learning-leakage-study.svg
---

## Focus

This work studies privacy and exposure risk in distributed learning setups. The goal is not to assume federated learning is safe, but to test how safety claims hold up under more realistic threat models.

## Core questions

1. What kinds of information can leak through collaborative updates?
2. Which defenses improve privacy in practice, and which only shift assumptions?
3. How should utility, privacy, and operational constraints be balanced in real deployments?

## Portfolio relevance

This project reflects the security side of my research profile: understanding how trust breaks down when machine learning systems move into collaborative, sensitive, or institutionally constrained settings.
