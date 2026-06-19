## Day 3: RAG, agent, tool use, AI Gateway

### 今日目標

你要把「會做 RAG / 會呼叫 LLM」升級成「能設計企業 agent gateway」。

### RAG

RAG 是 Retrieval-Augmented Generation。流程：

```text
documents
-> parsing
-> cleaning
-> chunking
-> metadata extraction
-> embedding
-> vector DB
-> retrieval
-> reranking
-> answer generation
-> citation / verification
```

企業 RAG 的關鍵是 metadata：

```json
{
  "doc_id": "sales_training_q2",
  "chunk_id": "sales_training_q2_0031",
  "department": "sales",
  "scenario": "objection_handling",
  "product": "insurance",
  "risk_level": "medium",
  "source_type": "training_manual",
  "effective_date": "2026-04-01",
  "owner": "HRD",
  "approved_by": "Legal",
  "acl": ["sales", "manager"],
  "text": "..."
}
```

正確區分：

```text
retrieval top-k: 從知識庫取前 k 個候選文件
reranker threshold: 候選文件分數低於門檻就不用
abstain: 沒足夠根據時拒答或要求澄清
generation top-p: LLM 生成文字時的 sampling 參數
```

一句話：

```text
top-k 是找資料；top-p 是生成文字。
```

### Agent

Agent 不是比較會聊天的 LLM。Agent 是能規劃、使用工具、維持狀態、交給其他 agent 或交給人審核的系統。

企業 agent 必須有：

```text
agent identity
task scope
allowed tools
allowed data sources
memory scope
approval requirement
audit events
evaluation set
red-team suite
```

### Tool use

你的 tool use 說法要從「format 對不上」升級成 enterprise tool lifecycle。

Tool schema：

```json
{
  "tool_id": "create_coaching_report",
  "description": "Create a coaching report for a completed role-play session.",
  "input_schema": {
    "session_id": "string",
    "employee_id": "string",
    "score_items": [
      {
        "metric": "string",
        "score": "number",
        "evidence_timestamp": "string",
        "comment": "string"
      }
    ]
  },
  "side_effect": "write",
  "required_role": "coach_report_writer",
  "data_scope": "same_department_only",
  "requires_approval": false,
  "idempotency_key": "session_id"
}
```

Tool call lifecycle：

```text
1. Agent proposes tool call.
2. Gateway checks tool exists.
3. Gateway validates input schema.
4. Gateway checks caller permission.
5. Gateway checks risk and approval requirement.
6. High-risk call goes to dry-run or human review.
7. Tool executes with timeout and retry policy.
8. Gateway validates output schema.
9. Gateway redacts PII if needed.
10. Gateway writes audit event.
```

### AI Gateway

AI Gateway 是模型流量與 agent 行為的 control plane。

它負責：

```text
authentication
authorization
model routing
quota / budget / rate limit
logging
PII / DLP
guardrail
fallback
evaluation hooks
audit
human review route
```

它不是 vLLM。vLLM 是 inference data plane，負責模型權重、KV cache、batching、token streaming。AI Gateway 負責 identity、policy、tool permission、audit、review、routing。

### 今日產出

建立三份 artifact：

```text
rag-schema.md
tool-registry.yaml
gateway-architecture.md
```

並寫三個 task adapter：

| Adapter | Taxonomy | Tools | Policy | Evaluator |
|---|---|---|---|---|
| sales coach | 開場、探問、異議處理、成交、追蹤 | CRM lookup, report writer | 不捏造折扣、不洩漏客戶資料 | coaching rubric |
| fraud call analyzer | 假檢警、投資詐騙、親友借錢、釣魚 | risk report generator | 高風險需人工確認 | risk label accuracy |
| HR coach | 主管溝通、績效回饋、衝突處理 | LMS writeback | 不產生歧視性評價 | feedback quality |
