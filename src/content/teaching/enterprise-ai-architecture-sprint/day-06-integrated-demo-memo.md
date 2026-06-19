## Day 6: Integrated demo and architecture memo

### 今日目標

把前五天的知識變成可以展示的 evidence。

### Demo scope

Demo 可以是 semi-real-time，不必假裝 production-ready。重要的是量測、界線與可重現。

Flow：

```text
audio file or microphone
-> VAD / ASR
-> optional diarization label
-> PII redaction
-> RAG retrieve
-> agent feedback
-> output guardrail
-> TTS or text response
-> audit log
```

畫面或 README 必須列：

```text
hardware
model names
runtime
input audio condition
ASR latency
LLM first token latency
TTS first audio latency
end-to-end latency
known limitations
```

### Architecture memo template

標題：

```text
Enterprise Voice Agent Gateway v0 Architecture Proposal
```

第一段：capability

```text
本架構支援多種企業 AI Coach 任務。共同層負責 audio intake、model routing、
identity、policy、PII、tool permission、memory scope、audit、evaluation、
red teaming；adapter 層負責不同任務的 taxonomy、RAG corpus、output schema、
policy rules、tool permissions、evaluator。
```

第二段：layers

```text
Audio layer:
  VAD / ASR / diarization / hotword correction / TTS

Knowledge layer:
  parsing / metadata / embedding / vector DB / reranker / citation

Agent layer:
  orchestrator / tool registry / memory / approval queue

Governance layer:
  identity / RBAC / ABAC / PII / policy / audit / red teaming

Deployment layer:
  Docker / K8s / vLLM / observability / rollback
```

第三段：validation

```text
Functional:
  完成指定 coaching / report / retrieval task

Quality:
  ASR WER/CER, keyword accuracy, RAG hit@k/MRR, answer faithfulness

Latency:
  p50/p95 by component and end-to-end

Security:
  OWASP/NIST mapped red-team pass rate, PII leakage tests

Ops:
  health checks, logs, GPU memory, rollback, acceptance checklist
```

### 今日產出

建立：

```text
demo-script.md
architecture-memo.md
known-limitations.md
acceptance-checklist.md
```

Known limitations 要用正向 scope-control 語言：

```text
Current scope:
  The demo supports controlled audio-file or short-turn microphone input.

Validation layer:
  Real-time barge-in, overlap-heavy audio, and noisy far-field audio require
  separate latency and accuracy validation before production deployment.
```
