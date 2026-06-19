## Day 7: Onboarding pack and first 30 days

### 今日目標

把所有產出整理成可以上工用的 onboarding pack。

### Onboarding pack

| File | 用途 |
|---|---|
| `one-page-domain-brief.md` | 10 分鐘講清楚領域與系統邊界 |
| `50-survival-terms.md` | 不再像外行 |
| `end-to-end-workflow.md` | 從 audio 到 audit |
| `gateway-governance-memo.md` | 架構與治理主張 |
| `red-team-cases.jsonl` | 可測試安全風險 |
| `pii-guardrail-demo.md` | PII / guardrail 控制 |
| `gpu-sizing.csv` | 算力估算 |
| `k8s-checklist.md` | 部署可行性 |
| `model-inventory.md` | 模型與套件不再忘記 |
| `first-30-days-plan.md` | 上工節奏 |

### 上工第一天問題

用這些問題取得系統事實：

```text
目前 production stack 是 Python、Node.js、Go、Rust，還是混合？
模型服務用 vLLM、SGLang、Ollama、Triton、TGI、hosted API，還是自架？
客戶部署是 cloud、on-prem、edge、hybrid，比例如何？
資料是否可以離開客戶環境？
目前有沒有 AI Gateway 或統一 model router？
有沒有統一 audit log schema？
RAG 用哪個 vector DB？metadata schema 是什麼？
有沒有 retrieval eval set？
ASR/TTS 用哪些模型？授權條件與限制？
客戶最常抱怨的是 latency、準確率、資料安全、整合速度還是驗收不清？
milestone 驗收標準是功能、準確率、latency、安全、部署、文件還是客戶 demo？
```

### First 30 days

第一週：盤點，不急著重寫。

```text
repo structure
deployment method
model inventory
customer workflows
current logs
current eval method
security / PII policy
demo script
milestone and acceptance criteria
```

第二週：補最小治理層。

```text
request_id
audit log schema
PII gate
tool registry
latency measurement
model inventory
```

第三週：補 evaluation / red-team harness。

```text
RAG eval set
ASR eval set
prompt injection tests
PII leakage tests
tool misuse tests
```

第四週：補部署與客戶交付文件。

```text
Docker / K8s notes
GPU sizing spreadsheet
customer architecture diagram
known limitations
acceptance criteria
```

## 弱點補強地圖

| 弱點 | 一週內補法 | Evidence |
|---|---|---|
| AI red teaming 沒做過 | 做 30-case mini harness | `red-team-cases.jsonl`, report |
| PII / guardrail 弱 | input/output PII gate + audit schema | `pii-policy-events.yaml` |
| K8s 弱 | mock inference deployment checklist | `k8s-checklist.md` |
| GPU sizing 靠經驗 | weights + KV cache + overhead formula | `gpu-sizing.csv` |
| tool use 薄 | typed tool registry + permission + idempotency | `tool-registry.yaml` |
| real-time TTS latency 印象派 | timestamp table + p50/p95 | `latency-table.csv` |
| hotwords 未做過 | domain lexicon + correction audit | `hotword-lexicon.json` |
| RAG 指標不完整 | hit@k / MRR / citation / abstain | `rag-eval-plan.md` |
| model inventory 記不住 | 每個模型寫 card | `model-inventory.md` |
| 上工問題模糊 | first-week fact-finding questions | `first-30-days-plan.md` |

## 20 份公開 source dossier

這些資料不是要全部讀成摘要，而是要抽出可交付 artifact。

| # | Source | 你要抽什麼 |
|---|---|---|
| 1 | McKinsey seven-step problem solving: <https://www.mckinsey.com/capabilities/strategy-and-corporate-finance/our-insights/how-to-master-the-seven-step-problem-solving-process> | issue tree、hypothesis-driven problem solving |
| 2 | McKinsey PhD-to-consulting / medical-device due diligence case: <https://www.mckinsey.com/careers/life-at-mckinsey/our-culture-and-communities/careers-blog/yvonne-apd> | 快速建立產業假設與用 expert interviews 校正 |
| 3 | National Academies, How People Learn, experts vs novices: <https://www.nationalacademies.org/read/9853/chapter/5> | 專家如何用 big ideas 組織知識 |
| 4 | VOISS public product page: <https://www.voiss.cc/> | AI Coach public positioning、source tracing、enterprise-specific topics |
| 5 | VOISS market positioning: <https://www.voiss.cc/market-positioning.html> | AI Coach vs RAG/Agent platform, CRM/HRD/LMS integration |
| 6 | OpenAI Agents SDK guide: <https://developers.openai.com/api/docs/guides/agents> | agents、tools、handoffs、state 的 runtime 抽象 |
| 7 | OpenAI Agents tracing / observability: <https://developers.openai.com/api/docs/guides/agents/integrations-observability> | model calls、tool calls、handoffs、guardrails trace evidence |
| 8 | LiteLLM AI Gateway: <https://docs.litellm.ai/docs/simple_proxy> | unified model gateway、spend tracking、budgets、routing |
| 9 | LiteLLM proxy architecture: <https://docs.litellm.ai/docs/proxy/architecture> | rate limit、router、fallback、retry lifecycle |
| 10 | OWASP Top 10 for LLM Applications 2025: <https://genai.owasp.org/llm-top-10/> | prompt injection、sensitive information disclosure、excessive agency tests |
| 11 | NIST AI RMF: <https://www.nist.gov/itl/ai-risk-management-framework> | AI risk governance language |
| 12 | NIST AI RMF Generative AI Profile: <https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence> | generative AI risk management actions |
| 13 | Microsoft AI Red Team: <https://learn.microsoft.com/en-us/security/ai-red-team/> | AI red-team operating model |
| 14 | Microsoft AI red teaming training: <https://learn.microsoft.com/en-us/security/ai-red-team/training> | attack techniques、defense strategies、automated tests |
| 15 | Microsoft Presidio: <https://microsoft.github.io/presidio/> | PII detection / anonymization SDK |
| 16 | Presidio supported entities: <https://microsoft.github.io/presidio/supported_entities/> | PII recognizers and custom recognizers |
| 17 | vLLM optimization and tuning: <https://docs.vllm.ai/en/stable/configuration/optimization/> | KV cache、gpu_memory_utilization、max_num_seqs |
| 18 | Kubernetes device plugins: <https://kubernetes.io/docs/concepts/extend-kubernetes/compute-storage-net/device-plugins/> | GPU/NIC/FPGA device resources in K8s |
| 19 | NVIDIA GPU Operator time-slicing: <https://docs.nvidia.com/datacenter/cloud-native/gpu-operator/latest/gpu-sharing.html> | GPU sharing and oversubscription tradeoffs |
| 20 | pyannote.audio: <https://github.com/pyannote/pyannote-audio> | diarization building blocks: VAD, speaker change, overlap, embeddings |
| 21 | pyannote.metrics: <https://pyannote.github.io/pyannote-metrics/reference.html> | DER/JER and detection metrics |
| 22 | LlamaIndex retrieval evaluation: <https://developers.llamaindex.ai/python/examples/evaluation/retrieval/retriever_eval/> | hit-rate、MRR、Precision、Recall、AP、NDCG |
| 23 | Milvus multi-vector hybrid search: <https://milvus.io/docs/multi-vector-search.md> | hybrid search and reranking |
| 24 | BreezyVoice: <https://github.com/mtkresearch/BreezyVoice> | Taiwanese Mandarin TTS and bopomofo control |

## 最終口條

你可以把自己的定位說成：

```text
我的強項是已經做過語音模型調整、RAG metadata/reranker、以及現場問題觀察。
我這週的補強方向是把這些能力升級成 enterprise voice AI system delivery：
AI Gateway、agent governance、PII guardrail、red-team harness、K8s/GPU sizing、
real-time latency measurement、customer acceptance evidence。

我不會把未知包裝成已知。我會把未知轉成 architecture、schema、test case、
latency table、capacity estimate、known limitation、next validation gate。
```

這才是 enterprise AI architect 的入門姿態：不裝熟，但能快速把混亂問題變成可交付、可驗證、可維運的系統證據。
