# ELMo

## 📝 概念解釋 (Concept Explanation)
ELMo (Embeddings from Language Models) 是一種創新的自然語言處理 (NLP) 模型架構，由 AllenAI 在 2018 年提出。它的出現解決了傳統詞向量（如 Word2Vec 或 GloVe）中「一詞多義」無法區分的問題。
傳統詞向量只會給每個單字一個固定的向量表示，不管這個字出現在什麼前後文中。而 ELMo 導入了「上下文感知 (Contextualized)」的概念，它利用深層的雙向長短期記憶網路 (Bi-LSTM) 來檢視整個句子，然後為裡面每個單字產生動態的向量表示。也就是說，句子中同一個單字（如 Bank，銀行/河岸）的意思，會根據它相鄰上下文的不同，而擁有一組完全不一樣的向量。

## 💡 使用場景 (Use Cases)
- **解決同音異義/一詞多義問題**：我們在處理英文句子 "I went to the bank to deposit money"和 "I sat on the river bank"，ELMo 會因為上下文的不同，自動為這兩個 bank 提供不同語義的向量，大幅提高機器的理解精準度。
- **提升下游 NLP 任務的效能**：無論是進行問答系統、機器翻譯或是情感分析，只要將傳統的靜態詞向量替換成 ELMo 訓練出來的動態上下文詞向量，通常都能非常顯著地提高模型的整體準確度與效能。

## 🔗 關聯關鍵字 (Related Keywords)
`Contextualized Word Embeddings`, `Bi-LSTM (雙向長短期記憶網路)`, `Word2Vec`, `BERT`, `NLP (自然語言處理)`
