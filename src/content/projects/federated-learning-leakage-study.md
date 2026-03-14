---
title: Federated Learning Leakage Study
summary: An AI security study focused on leakage risk and privacy trade-offs in federated learning for sensitive collaborative training settings.
year: 2026
role: Doctoral Researcher
category: Cybersecurity
stack:
  - PyTorch
  - Federated Learning
  - Privacy
  - Security
  - Evaluation
featured: true
status: Active Study
cover: /projects/federated-learning-leakage-study.svg
---

## Operational challenge

Federated learning promises collaborative training without centralizing data, but it does not automatically eliminate privacy or leakage risks. Sensitive information can still be exposed through gradients, updates, or weak aggregation strategies.

## Why It Matters

AI systems intended for sensitive domains need stronger guarantees around privacy and security. Understanding leakage in federated learning helps clarify where collaborative AI is appropriate and where additional safeguards are required.

## Approach

This study focuses on experiment design, attack modeling, and evaluation for privacy exposure in distributed training. The project compares assumptions about federated learning safety against more realistic threat models and leakage scenarios.

## System design

1. Define collaborative training settings and threat assumptions.
2. Simulate distributed learning with controlled privacy-sensitive inputs.
3. Measure leakage behavior under different attack and defense settings.
4. Compare privacy, utility, and operational trade-offs across configurations.

## Evaluation lens

The project creates a structured basis for studying leakage risk instead of treating federated learning as privacy-safe by default. It also supports clearer communication about which design decisions meaningfully improve security and which only shift assumptions.

## Visual summary

![Federated learning leakage study visual](/projects/federated-learning-leakage-study.svg)

## Current status

Future iterations can add code, benchmarks, or a paper once the experimental setup is ready for public release.
