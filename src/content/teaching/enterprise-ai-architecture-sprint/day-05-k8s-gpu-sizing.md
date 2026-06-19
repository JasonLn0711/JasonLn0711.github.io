## Day 5: Docker, K8s, GPU sizing, vLLM

### 今日目標

你要能用初階但正確的方式回答「這個系統怎麼部署、要多少 GPU、怎麼估算、怎麼驗證」。

### Docker

Docker 把服務、依賴、runtime 包起來。

最小服務拆法：

```text
api-gateway
asr-service
llm-service
tts-service
postgres
redis
observability
```

第一週不一定要全跑起來，但 README 要說清楚每個 service 的責任。

### Kubernetes

你需要知道的 K8s 物件：

| Resource | 白話 | 在 AI 系統中的用途 |
|---|---|---|
| Pod | 跑 container 的最小單位 | inference service pod |
| Deployment | 管多個 Pod 與 rolling update | 更新 model server |
| Service | 穩定內部入口 | gateway 呼叫 model service |
| Ingress | 對外 HTTP/HTTPS | 客戶或 demo 入口 |
| ConfigMap | 非敏感設定 | model name, feature flags |
| Secret | 敏感設定 | API key, DB password |
| PVC | 持久化儲存 | model cache, logs |
| Resource limits | CPU/memory/GPU 要求 | `nvidia.com/gpu: 1` |

GPU 在 K8s 不是自動出現。通常需要 device plugin，讓 kubelet 知道節點有 GPU 可排程。

最小 inference deployment：

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: vllm-service
spec:
  replicas: 1
  selector:
    matchLabels:
      app: vllm-service
  template:
    metadata:
      labels:
        app: vllm-service
    spec:
      containers:
        - name: vllm
          image: vllm/vllm-openai:latest
          ports:
            - containerPort: 8000
          resources:
            limits:
              nvidia.com/gpu: 1
          env:
            - name: MODEL_NAME
              value: "replace-with-model-name"
```

### GPU sizing

不要只說「A6000 應該可以」。要拆成公式。

模型權重粗估：

```text
FP16 / BF16: params * 2 bytes
INT8: params * 1 byte + overhead
INT4: params * 0.5 byte + overhead
```

KV cache 粗估：

```text
KV cache bytes
≈ 2 * num_layers * num_kv_heads * head_dim * context_length * concurrency * bytes_per_element
```

總 VRAM：

```text
total VRAM
≈ model weights
+ KV cache
+ activation / runtime overhead
+ CUDA graph / framework overhead
+ fragmentation buffer
+ safety margin
```

vLLM 需要知道：

```text
gpu_memory_utilization
max_num_seqs
max_num_batched_tokens
max_model_len
quantization
tensor_parallel_size
```

### 今日產出

建立 GPU sizing spreadsheet：

| model | params_B | precision | weight_GB | context | concurrency | kv_cache_GB | overhead_GB | safety_GB | total_GB | GPU | fits | p50 | p95 |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|---|---|---:|---:|
| 7B | 7 | INT4 | | 4096 | 4 | | | | | 24GB | | | |
| 31B | 31 | INT4 | | 8192 | 2 | | | | | 48GB | | | |
| 70B | 70 | INT4 | | 8192 | 4 | | | | | H100/H200 | | | |

建立 K8s checklist：

```text
pod starts
readiness passes
liveness passes
service routes
ingress reaches service
secret loaded but not logged
config visible
GPU resource request documented
logs include request_id, model, latency, error_code
rollback path documented
```
