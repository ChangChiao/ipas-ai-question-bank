# CAG (Cache-Augmented Generation)

## 概念解釋
Cache-Augmented Generation (CAG) 是一種透過快取（Cache）機制來優化大型語言模型（LLM）推理與生成過程的技術架構。與傳統的 RAG（檢索增強生成）每次都需要將外部檢索到的文本合併至提示詞（Prompt）中讓模型重新計算不同，CAG 利用底層的 KV Cache（鍵值快取）或 API 提供的 Prompt Caching 技術，將長文本、靜態知識庫或系統指令預先存儲在記憶體中。

當接收到查詢時，模型可以直接調用這些已快取的文本狀態進行推理，從而：
- 大幅降低重複處理相同文本的運算成本。
- 顯著減少首字回應時間（TTFT, Time To First Token），提升生成速度。
- 在支援超大上下文視窗（Context Window）的同時，避免嚴重的延遲與效能衰退。

## 使用場景
1. **大型固定知識庫問答**：例如企業內部的員工手冊、不常更動的法規文件或產品說明文件。預先將整份文件快取後，使用者提問時即可瞬間產生基於該知識庫的精準回答。
2. **客服系統與多輪對話**：在漫長的對話歷史中，系統設定（System Prompt）與前期的歷史記錄可被快取，每次使用者輸入新對話時只需處理最新的一句話，降低運算開銷。
3. **程式碼生成與輔助（Coding Assistants）**：將整個專案的 Codebase 或是龐大的 API 說明文檔載入快取，讓 AI 在生成程式碼時能瞬間理解全域架構而不會造成卡頓。
4. **高併發且對延遲敏感的應用**：包含大量 Few-shot 範例的複雜任務、即時語音對話或遊戲 NPC 即時互動等，這些場景需要極低的延遲、以及更高的系統吞吐量。

## 關聯關鍵字
- RAG (檢索增強生成 / Retrieval-Augmented Generation)
- Prompt Caching (提示詞快取)
- KV Cache (鍵值快取)
- TTFT (首字回應時間 / Time To First Token)
- Context Window (上下文視窗)
- LLM Inference Optimization (推論最佳化)
