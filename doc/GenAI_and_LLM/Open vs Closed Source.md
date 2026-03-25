# Open vs Closed Source

## 📝 概念解釋 (Concept Explanation)
在 AI 模型（特別是 LLM 大型語言模型）領域中，分成開源 (Open Source) 與閉源 (Closed Source/Proprietary) 兩大陣營。
- **開源模型 (Open Source)**：開發機構會將模型訓練好的權重參數 (Weights) 或程式碼公開，供全世界免費下載。開發者可以將模型部署在自己的電腦或企業私有伺服器上，甚至為了特定目的進行微調 (Fine-Tuning)。代表性的如 Meta 的 **Llama**, Google 的 **Gemma**, 法國的 **Mistral**。
- **閉源模型 (Closed Source)**：模型代碼與內部權重是被公司封鎖保密的。一般人無法把模型下載回家，只能透過他們提供的 API 或是網頁介面 (如 ChatGPT 網頁版) 並且付費來使用它強大的運算與推理能力。代表性的如 OpenAI 的 **GPT-4**, Anthropic 的 **Claude 3**, Google 的 **Gemini 1.5 Pro**。

## 💡 使用場景 (Use Cases)
- **選擇開源情境 - 高度機密醫療病歷資料**：某醫院希望引進 AI 幫忙整理病歷，但法規嚴格禁止病患資料上傳至第三方雲端伺服器。此時醫院就必須選擇下載「開源模型（如 Llama）」，部署在沒有連外網的內部伺服器運行，確保資料絕對安全。
- **選擇閉源情境 - 追求極致的邏輯推演或編程**：如果一間新創公司想要開發一個無所不能的全自動化程式編寫助理助理，因為不需要保密自家資料，它會直接串接「閉源模型 API（如 GPT-4 或 Claude 3.5 Sonnet）」，利用地球上目前推論能力最強的模型來確保產品卓越的品質，把底層重擔交給大科技公司去維護。

## 🔗 關聯關鍵字 (Related Keywords)
`Llama`, `GPT-4`, `Fine-Tuning (微調)`, `Self-Hosting (自託管)`, `API (應用程式介面)`
