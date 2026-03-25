# KAG (知識感知圖譜)

> **📝 概念解釋：**
> 知識增強生成 (Knowledge-Augmented Generation, KAG) 是一個廣義的概念，亦可視為知識圖譜輔助生成 (Knowledge Graph-Augmented Generation)。它是 RAG 的一種進階演化型態，主要差異在於 KAG 利用了結構化且有邏輯關係的「知識圖譜 (Knowledge Graph)」而不是單純的非結構化文字切片。透過知識圖譜中實體(Entity)與關係(Relation)的鏈結，將強烈的邏輯關聯性餵給 LLM 以提升回答品質。
>
> **💡 使用場景：**
> 醫療問答與診斷系統。因為醫學名詞如「症狀」、「疾病」、「藥物」間具備嚴格且複雜的關聯網絡，使用知識圖譜增強可以避免 RAG 經常遇到「相似文字段落很多但不具備邏輯關聯」的盲點。
>
> **🔗 關聯關鍵字：**
> `Knowledge Graph`, `RAG`, `Ontology`, `Hallucination`
