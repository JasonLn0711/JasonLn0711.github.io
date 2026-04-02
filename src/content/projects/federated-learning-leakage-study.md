---
title: Federated Learning Leakage Study
subtitle: A privacy-first case study on where collaborative training assumptions begin to fail.
summary: A research case study on federated learning privacy leakage, gradient inversion risk, and defense trade-offs for sensitive collaborative training.
year: 2026
role: Doctoral Researcher
category: Cybersecurity
location: Taiwan
scope: Threat modeling, privacy evaluation, and secure aggregation trade-offs
stack:
  - PyTorch
  - Federated Learning
  - Privacy
  - Gradient Leakage
  - Secure Aggregation
featured: true
status: Active Study
cover: /projects/federated-learning-leakage-study.svg
quote: Distributed training changes the data path, not the obligation to prove privacy under pressure.
---

## Privacy leakage in federated learning is still an operational problem

Federated learning is often introduced as a way to support collaborative model training without centralizing raw data. That promise is real, and the original [federated learning paper by McMahan et al.](https://proceedings.mlr.press/v54/mcmahan17a.html) remains foundational for understanding why decentralized training became attractive in the first place. But in security-sensitive settings, local data retention is not the same thing as privacy safety.

In practice, sensitive information can still leak through gradients, model updates, insufficient aggregation assumptions, or an overly optimistic threat model. That gap between architectural promise and operational reality is the main challenge this study is trying to make more explicit.

## Why privacy leakage in federated learning matters

Collaborative AI is especially appealing in domains where centralizing data is difficult, politically costly, or legally constrained. But those are often the same domains in which privacy failure is least tolerable. If federated learning is treated as privacy-preserving by default, teams may deploy it with misplaced confidence.

This project is therefore less about treating federated learning as a solved privacy technology and more about asking a stricter question: under what assumptions is collaborative training defensible, and where do those assumptions begin to break?

## Research approach

The study is organized around experiment design, attack modeling, and evaluation for privacy exposure in distributed training. Rather than assuming that decentralization is sufficient protection, I use the project to compare architectural claims against more realistic leakage scenarios.

Two papers are particularly important in shaping the research lens here. [Deep Leakage from Gradients](https://arxiv.org/abs/1906.08935) showed that shared gradients can reveal strikingly detailed information about training inputs, and [Inverting Gradients](https://arxiv.org/abs/2003.14053) pushed that concern further by demonstrating strong reconstruction attacks even under settings that many practitioners might initially assume are safer. Together, they make it difficult to treat gradient sharing as operationally harmless.

At the same time, the project does not frame federated learning as hopeless. Work such as [Practical Secure Aggregation for Privacy Preserving Machine Learning](https://eprint.iacr.org/2017/281) helps clarify where the server-side attack surface can be reduced. The more useful research question, then, is not whether federated learning is simply private or not, but which combinations of aggregation, training procedure, and threat model materially change the privacy picture.

## Study design

1. Define collaborative training settings and make the threat assumptions explicit rather than implicit.
2. Simulate distributed learning under controlled privacy-sensitive inputs and observable update channels.
3. Evaluate leakage behavior across attack and defense settings instead of relying on architecture-level intuition.
4. Compare privacy, utility, and operational complexity as linked trade-offs rather than isolated metrics.

## Evaluation lens

The evaluation lens is intentionally security-oriented. I care less about presenting federated learning as an elegant distributed-training paradigm and more about identifying where the privacy story changes materially under pressure. In practice, that means looking at:

- what information remains inferable from updates
- how defenses alter the leakage surface rather than merely the narrative
- what utility or operational cost is introduced by stronger privacy controls
- how much safety depends on assumptions that may not hold in deployment

The goal is to create a structured basis for studying leakage risk instead of treating federated learning as privacy-safe by default. It also helps separate security improvements that genuinely reduce exposure from design choices that merely relocate the trust assumption.

## Visual summary

![Federated learning leakage study visual](/projects/federated-learning-leakage-study.svg)

## Current status

This case study is being developed as an active research direction rather than a polished benchmark release. As the experimental design matures, the public version can expand toward reproducible evaluation artifacts, code release, and a publication-ready write-up.

Related context on this site includes the broader [research agenda](/research/) around trustworthy AI and deployment-sensitive systems. If your team is working on privacy-preserving ML, secure aggregation, or high-stakes collaborative training, I would be glad to discuss possible research overlap or collaboration through the [contact page](/contact/).
