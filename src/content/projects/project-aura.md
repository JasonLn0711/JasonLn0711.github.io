---
title: Project AURA
summary: A Python-based predecessor to Aura-RS focused on desktop transcription, smart audio splitting, and speech workflow experimentation.
year: 2026
role: Builder and research lead
kind: prototype
mode: original
category: Speech Intelligence
problem: Early speech tools often prove model viability without addressing the workflow and reliability problems that appear once users process real audio, long sessions, and noisy inputs.
importance: Project AURA shows the transition from proof-of-concept speech tooling toward stronger system architecture. It is valuable as a precursor because it reveals what had to change before the system could be trusted more seriously.
stack:
  - Python
  - PyQt6
  - faster-whisper
  - WebRTC VAD
  - Audio Processing
tags:
  - Legacy Prototype
  - Desktop AI
  - Speech Workflows
featured: false
status: Legacy prototype
cover: /og/default.png
repo: https://github.com/JasonLn0711/project_aura
---

## Role in the portfolio

Project AURA is the legacy version of the AURA system. It explored real-time and file-based transcription, smart audio splitting, denoising, normalization, and background task handling inside a desktop workflow.

## What it taught me

The project surfaced important lessons about speech systems in practice:

1. UI responsiveness matters when model loading and long-running jobs are involved
2. Audio preprocessing choices materially affect downstream usability
3. Heavy AI workloads expose the limits of less structured application architecture

## Why it is still worth showing

Although this codebase is no longer the current direction, it demonstrates technical range, iteration discipline, and the architectural reasoning that led to Aura-RS.
