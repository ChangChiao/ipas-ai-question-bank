# Contextualized Word Embeddings

## 📝 概念解釋 (Concept Explanation)
上下文文字嵌入 (Contextualized Word Embeddings) 是現代自然語言處理（NLP）的一項核心突破。傳統的詞向量技術（像 Word2Vec）是靜態的，每個字在字典裡只有一個固定的向量數學值。這遇到「同音異義字」就會出錯，因為不管是哪種意思，它都會給出相同的數字。
相反的，Contextualized Word Embeddings 會像人類閱讀一樣，先看完這個單字「前後發生了什麼事」，然後動態地賦予它向量。例如句子中出現 "Apple"，如果前面的字是 "Steve Jobs"，它就會產生代表科技公司的向量；如果前面的字是 "eat a delicious"，它就會產生代表水果的向量。因為這種動態轉換，模型才真正擁有了理解複雜「語義」的能力。

## 💡 使用場景 (Use Cases)
- **多義詞消歧義 (Word Sense Disambiguation)**：當客戶留言說「你們銀行的服務就像對岸的河岸一樣荒涼」時，"銀行 (Bank)" 與 "河岸 (Bank)" 在英文裡皆為同字，但在 BERT 這樣的模型眼中，它們的向量表示將截然不同，不會被混淆，情緒分析的結果也會更加精確。
- **強大的閱讀理解問答系統**：正因為能夠根據整句話理解單字的細微差異，導入了這項技術的模型，在閱讀一整篇文章後，能像人類一樣準確回答關於文章內容的刁鑽提問，是目前所有強大 LLM 的基礎。

## 🔗 關聯關鍵字 (Related Keywords)
`Word Embeddings (詞向量)`, `ELMo`, `BERT`, `Transformer`, `Word2Vec`
