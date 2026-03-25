# Multi-Head Self-Attention

> **📝 概念解釋：**
> 多頭自注意力機制 (Multi-Head Self-Attention) 是 Transformer 架構的靈魂。相比於單一的注意力機制，它將自注意力演算拆分成多個不同的「頭 (Heads)」平行運作。每個頭負責關注輸入序列中不同面向的特徵 (例如有的頭專注於文法結構、有的專注於主被動關係)，最後再把這些學習到的不同表徵拼接起來送入下一層。
>
> **💡 使用場景：**
> 大型語言模型 (LLM) 如 GPT-4、BERT 的神經網路核心層。因為它允許模型具有更豐富的表徵能力，能同步解析同一句子的多層次語法與語意。
>
> **🔗 關聯關鍵字：**
> `Transformer`, `Self-Attention`, `Scaled Dot-Product Attention`, `QKV (Query, Key, Value)`
