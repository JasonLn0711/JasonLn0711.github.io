## Day 2: Voice AI pipeline

### 今日目標

你要把語音 AI 從「模型」拆成可評估、可替換、可部署的 pipeline。

### 核心流程

```text
microphone / audio file
-> resampling / mono conversion
-> VAD
-> ASR
-> diarization
-> text cleaning
-> punctuation
-> hotword correction
-> downstream RAG / agent
-> TTS
-> playback
-> latency and quality logs
```

### ASR

ASR 是 Automatic Speech Recognition，把語音轉成文字。

你要把自己的 ASR 經驗整理成 case study，但在 public repo 只保留 generalized pattern：

```text
Problem:
  低取樣率電話語音、噪音、口音、專有名詞造成 baseline ASR 錯誤。

Baseline:
  記錄原始模型、資料切分、WER / CER、錯誤類型。

Method:
  VAD 切段、transcript cleaning、LoRA / partial fine-tune、
  train / validation / test split、錯誤分析。

Result:
  在 private model card 中保存具體數字；public 教程只保存方法。

Failure modes:
  數字、地址、人名、產品名、電話壓縮、重疊語音、方言、code-switching。
```

初學者要記住：企業 ASR 不只看平均 WER。更重要的是 business-critical term accuracy：

```text
客戶姓名
公司名稱
商品名稱
金額
日期
地址
法規詞
醫療/金融/半導體專有名詞
```

### VAD

VAD 是 Voice Activity Detection，判斷哪段音訊有人聲。

成熟說法：

```text
VAD = voice probability model + energy threshold + smoothing
```

不要只說「用分貝判斷」。實務上要處理：

```text
frame size: 10ms / 20ms / 30ms
voice probability threshold
minimum speech duration
minimum silence duration
pre-roll / post-roll
hysteresis 防止開開關關
```

可用套件：

```text
webrtcvad
silero-vad
pyannote.audio
```

### Diarization

Diarization 回答 who spoke when。它不是 ASR。

流程：

```text
audio
-> speech activity detection
-> speaker turn segmentation
-> speaker embedding
-> clustering
-> speaker label assignment
-> post-processing
```

指標：

```text
DER: diarization error rate
JER: Jaccard error rate
```

企業例子：

```text
AI Coach 要評分業務是否打斷客戶。
如果 speaker attribution 錯，把客戶的話算到業務身上，評分就失效。
```

### Overlap speech

兩個人同時講話時，不能只靠一般 diarization。

拆成：

```text
overlap detection
source separation
multi-label diarization
speaker attribution
```

第一週不用完整解決，但要把 limitation 說清楚。

### Hotwords / contextual biasing

Hotwords 是讓系統更重視特定詞，例如公司名、產品型號、客戶姓名、藥名、GPU 型號、機台名稱。

一週內先做 post-ASR correction：

```text
ASR output
-> domain lexicon
-> fuzzy match
-> candidate correction
-> confidence threshold
-> correction audit log
```

詞表 schema：

```json
{
  "term": "A6000",
  "aliases": ["A 六千", "欸六千"],
  "category": "GPU",
  "priority": 0.9,
  "domain": "infrastructure"
}
```

### TTS / voice clone / 台灣腔

TTS 的 production 問題要拆成 quality 與 latency。

Quality：

```text
naturalness
speaker similarity
pronunciation
prosody
emotion
accent
code-switching
stability
```

Latency：

```text
text normalization
model prefill
first audio latency
full audio generation
playback buffer
```

不要再說「應該一秒左右」。要量：

```text
timestamp_audio_end
timestamp_asr_done
timestamp_llm_first_token
timestamp_llm_done
timestamp_tts_first_audio
timestamp_tts_done
timestamp_playback_done
```

### 今日產出

建立 `voice-module-inventory.md`：

| Module | Package/model | Input | Output | Metric | Failure mode | Latency field |
|---|---|---|---|---|---|---|
| VAD | silero-vad / webrtcvad | PCM audio | speech segments | FP/FN, boundary error | music, far-field, silence clipping | vad_ms |
| ASR | Whisper / Breeze-ASR / other | speech segment | transcript | WER/CER, keyword accuracy | noise, names, numbers | asr_ms |
| Diarization | pyannote.audio | audio | speaker turns | DER/JER | overlap, similar speakers | diarization_ms |
| Hotword | lexicon + fuzzy match | transcript | corrected transcript | term accuracy | false correction | correction_ms |
| TTS | BreezyVoice / CosyVoice / other | text | audio | MOS, first audio latency | accent, code-switching | tts_first_audio_ms |
