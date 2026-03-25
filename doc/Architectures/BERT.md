# BERT (Bidirectional Encoder Representations from Transformers)

> **📝 概念解釋：**
> 來自轉換器的雙向編碼器表徵量 (Bidirectional Encoder Representations from Transformers, BERT) 是由 Google 提出的里程碑式模型。有別於傳統由左至右單向閱讀文字，BERT 只使用了 Transformer 的「編碼器 (Encoder)」，使其能夠同步看見一個字語境的「上文與下文 (雙向)」。它透過「克漏字填空 (Masked LM)」與「下一句預測」任務進行預訓練，賦予字詞極其豐富的上下文語意特徵。
>
> **💡 使用場景：**
> 徹底改變了搜尋引擎演算法對用戶搜尋意圖的理解。非常適合那些不需要「連續生成」的任務，如文章情感分析、語意搜索比對、或抽取式問答。
>
> **🔗 關聯關鍵字：**
> `Transformer`, `Encoder`, `Masked Language Modeling`, `NLU`
