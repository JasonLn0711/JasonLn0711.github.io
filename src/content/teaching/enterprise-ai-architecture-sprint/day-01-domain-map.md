## Day 1: 建立 domain map 與 issue tree

### 今日目標

你要把「我被問了很多 AI 名詞」轉成「我知道這份工作的系統邊界與交付風險」。

今日結束前，你要能說：

```text
我正在進入的不是單一模型職位，而是 enterprise voice agent / AI Coach
系統交付。核心工作是把語音、RAG、agent、tool、policy、audit、deployment、
customer workflow 串成可以部署、驗收、維運的系統。
```

### 初學者解釋

一個企業 AI 系統可以拆成五條流：

| 流 | 問題 | 例子 |
|---|---|---|
| data flow | 資料從哪裡來、去哪裡、被誰保存 | audio、transcript、RAG chunk、tool result、audit log |
| permission flow | 誰可以看什麼、做什麼 | sales agent 可讀 sales SOP，但不能讀 HR 機密 |
| responsibility flow | 出錯時誰負責 | ASR 錯名字、AI 建議違規話術、CRM 被寫錯 |
| latency flow | 每一步花多久 | VAD 200ms、ASR 900ms、LLM TTFT 600ms、TTS 1200ms |
| cost flow | 哪一步花錢與吃 GPU | ASR GPU、LLM token、TTS inference、vector DB、logging storage |

如果你只會講模型，面試官會擔心你只能做 demo。如果你能講這五條流，對方會知道你開始用系統工程方式思考。

### End-to-end 架構圖

```text
User / employee / salesperson
  |
  v
Audio capture
  |
  v
VAD / noise reduction / chunking
  |
  v
ASR
  |
  v
Diarization / timestamp / speaker attribution
  |
  v
Text cleaning / punctuation / hotword correction
  |
  v
Input PII gate
  |
  v
RAG retrieval / metadata filter / reranker
  |
  v
Agent orchestrator
  |-- tool registry
  |-- policy engine
  |-- memory manager
  |-- human approval queue
  |-- CRM / LMS / HRD / ERP connectors
  v
LLM output / coaching feedback / report
  |
  v
Output guardrail / citation / audit log
  |
  +--> dashboard
  +--> TTS response
  +--> enterprise write-back
  |
  v
Monitoring / evaluation / red teaming / cost tracking
```

### 50 survival terms

| Term | Layer | 影響什麼決策 | 常見誤解 |
|---|---|---|---|
| ASR | voice | 語音轉文字品質 | 以為只要模型大就準 |
| TTS | voice | 回覆能不能即時且自然 | 只看聲音像不像，不量 latency |
| VAD | voice | 何時開始/停止送 ASR | 只用分貝門檻 |
| diarization | voice | 誰在何時說話 | 以為等同 ASR |
| speaker embedding | voice | speaker clustering | 以為中文英文差異最大 |
| overlap speech | voice | 同時講話如何歸屬 | 以為切段就能解 |
| hotword | voice | 專有名詞是否辨對 | 以為 post-processing 一定安全 |
| contextual biasing | voice | ASR 對 domain terms 的偏好 | 以為 prompt 就能解所有 ASR |
| WER / CER | voice eval | 語音辨識錯誤率 | 只看平均，不看關鍵詞 |
| DER / JER | diarization eval | speaker 分段品質 | 忽略 overlap |
| p50 / p95 latency | ops | 平均與尾端延遲 | 只報一次 demo 體感 |
| embedding | RAG | 文件向量化 | 以為 embedding 等於理解 |
| vector DB | RAG | 如何快速找相似文件 | 以為資料放進去就完成 |
| chunking | RAG | retrieval 粒度 | 亂切導致 citation 不準 |
| metadata | RAG | 權限、時效、情境過濾 | 當成裝飾欄位 |
| hybrid search | RAG | keyword + vector recall | 忽略 exact term |
| reranker | RAG | 候選文件重新排序 | 以為 top-k 就是最終答案 |
| top-k | retrieval | 取幾筆候選文件 | 跟 top-p 混淆 |
| top-p | generation | LLM sampling | 拿來講 retrieval |
| threshold | RAG | 低分是否拒答 | 沒資料也硬答 |
| abstain | RAG | 不足證據時拒答 | 以為拒答是失敗 |
| faithfulness | RAG eval | 回答是否忠於來源 | 只看文字流暢 |
| citation | RAG eval | 來源可追溯 | 只貼來源但內容對不上 |
| agent orchestrator | agent | 多步驟流程控制 | 以為 agent 等於 chatbot |
| tool use | agent | 是否呼叫外部能力 | 忽略權限與副作用 |
| tool registry | agent governance | 哪些工具可用 | 工具散落在 prompt 裡 |
| schema validation | agent governance | 參數是否可執行 | 讓模型自由填 |
| idempotency | backend | 重試是否造成重複動作 | 不考慮副作用 |
| dry-run | backend | 高風險操作先模擬 | 直接寫入 CRM |
| human-in-the-loop | governance | 何時人工核准 | 只寫在 prompt |
| memory scope | governance | 記憶能被誰讀 | 跨 agent 洩漏 |
| provenance | governance | 資料來源追蹤 | 事後無法稽核 |
| AI Gateway | governance | 模型流量總控制點 | 以為只是 proxy |
| policy engine | governance | allow / deny / review | 規則散在程式碼 |
| RBAC | security | role-based control | role 等於 permission |
| ABAC | security | attribute-based control | 忽略環境與資源屬性 |
| audit log | governance | 事後可重建行為 | 只記 final answer |
| DLP | security | 防止資料外洩 | 只做 output filter |
| PII detection | security | 個資偵測 | 只掃 user input |
| redaction | security | 個資遮罩 | 日誌仍保存原文 |
| prompt injection | security | 惡意文字改變模型行為 | 以為 system prompt 足夠 |
| data exfiltration | security | 資料被誘導洩漏 | 只防外部攻擊者 |
| OWASP LLM Top 10 | security | LLM 風險分類 | 當成考試名詞 |
| NIST AI RMF | governance | AI 風險治理語言 | 當成法規 |
| red teaming | security eval | 主動攻擊系統找風險 | 手動問幾題壞問題 |
| eval harness | eval | 測試可重現 | demo 看起來可以就算 |
| Docker | deployment | 打包服務 | 以為等於 production |
| Kubernetes | deployment | 編排、擴縮、更新 | 只會背 Pod |
| GPU device plugin | deployment | K8s 如何看見 GPU | 以為 GPU 自動可排程 |
| vLLM | inference | LLM serving / KV cache / batching | 以為它是 governance layer |
| KV cache | inference | context/concurrency 記憶體 | 只估 model weights |
| quantization | inference | VRAM 與品質 tradeoff | 只看能不能塞進 GPU |

### 今日產出

建立 `domain-brief.md` 草稿，包含：

```text
1. 一句話職務地圖
2. end-to-end workflow
3. 50 survival terms
4. issue tree
5. top 10 weakness repair goals
```

Issue tree 範例：

```text
能不能交付 enterprise voice AI Coach system？
|
+-- Voice quality
|   +-- ASR WER / CER
|   +-- diarization DER / JER
|   +-- overlap speech
|   +-- hotword correction
|   +-- TTS p50 / p95 latency
|
+-- Knowledge quality
|   +-- chunking
|   +-- metadata
|   +-- hybrid search
|   +-- reranker
|   +-- citation / abstain
|
+-- Agent controllability
|   +-- tool schema
|   +-- permission
|   +-- idempotency
|   +-- human approval
|   +-- audit
|
+-- Security / governance
|   +-- PII / DLP
|   +-- prompt injection
|   +-- red-team harness
|   +-- memory scope
|   +-- policy engine
|
+-- Deployment / ops
|   +-- Docker
|   +-- K8s
|   +-- GPU sizing
|   +-- observability
|   +-- rollback
|
+-- Customer delivery
    +-- onsite workflow
    +-- acceptance criteria
    +-- milestone
    +-- handoff docs
```
