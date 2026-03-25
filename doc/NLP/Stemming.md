# Stemming (詞幹提取)

> **📝 概念解釋：**
> 詞幹提取 (Stemming) 是將字詞後綴或是字尾直接移除的一種啟發式截斷方法，目的是將字詞縮減為「詞幹 (Stem)」。不同於 Lemmatization，Stemming 只是生硬地斬除常見的字尾，例如可能不管詞性直接把「automates」、「automatic」、「automation」全部去掉尾巴變成「automat」。雖然速度極快，但不一定會產出正確的單字原形。
>
> **💡 使用場景：**
> 早期需要極速建立大規模索引的搜尋引擎系統；或對精準度要求不高、但需要快速降低字彙量 (Vocabulary Size) 以進行情感分類的輕量級文本挖掘。
>
> **🔗 關聯關鍵字：**
> `Lemmatization`, `Text Normalization`, `Porter Stemmer`
