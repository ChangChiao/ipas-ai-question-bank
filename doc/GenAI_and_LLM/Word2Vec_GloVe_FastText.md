# Word2Vec / GloVe / FastText

> **📝 概念解釋：**
> Word2Vec, GloVe 與 FastText 都是代表性的「詞嵌入 (Word Embedding)」技術演算法模型。它們的核心任務都是把人類的自然語言單字轉換（投射）成電腦可理解的多維度數學「向量 (Vector)」。
- **Word2Vec (Google提出)**：利用鄰近詞來預測中心詞，訓練出帶著語義關係的向量空間。
- **GloVe (史丹佛提出)**：結合了語料庫的全局單字共現統計矩陣。
- **FastText (Facebook提出)**：進一步將詞拆分成子詞 (Subword)，使得演算法可以處理從未見過的生僻字或錯別字。
>
> **💡 使用場景：**
> 前 Transformer 時代自然語言處理的標準第一步。透過這些技術，電腦甚至可以做文字的數學運算，例如經典的：`King - Man + Woman = Queen`。
>
> **🔗 關聯關鍵字：**
> `Word Embedding`, `NLP`, `Vector Space`, `CBOW`
