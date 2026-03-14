---
title: Aura-RS
summary: A local-first Rust and Tauri audio assistant exploring secure transcription workflows, reliable job orchestration, and memory-safe desktop AI.
year: 2026
role: Builder and research lead
kind: flagship
mode: original
category: AI Systems
problem: Turning speech tooling into a deployable local application requires more than model inference. It needs secure orchestration, stable job handling, and a workflow that remains usable for real operators.
importance: "Aura-RS represents a move from prototype logic toward a more serious systems posture: local-first, privacy-aware, and architected for reliability rather than demo-only performance."
stack:
  - Rust
  - Tauri
  - React
  - TypeScript
  - SQLite
  - SQLCipher
tags:
  - Local-First
  - Speech Systems
  - Systems Design
featured: true
status: Active MVP
cover: /og/default.png
repo: https://github.com/JasonLn0711/Aura-RS
---

## What it is

Aura-RS is a local desktop audio assistant built around a minimal but serious workflow: select media, submit a transcription job, and inspect the result. The emphasis is on secure desktop architecture and a dependable execution path rather than a wide feature checklist.

## Why Rust

This project is the architectural successor to an earlier Python prototype. Rebuilding in Rust and Tauri makes the system more aligned with the qualities I care about for AI in real settings: memory safety, stronger boundaries, predictable concurrency, and a cleaner security posture.

## Architectural direction

The public MVP already points toward several priorities:

1. Local-first inference and storage
2. Clear separation between UI, job state, and platform services
3. Encrypted local history and controlled access to system capabilities
4. A minimal interaction surface that can grow without becoming fragile

## Why it matters in this portfolio

Aura-RS is one of the clearest examples of how I approach AI systems work: capability matters, but architecture and operational trust matter just as much.
