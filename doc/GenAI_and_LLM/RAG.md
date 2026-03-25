# RAG (檢索增強生成)

> **📝 概念解釋：**
> 檢索增強生成 (Retrieval-Augmented Generation, RAG) 是一種結合了「知識搜尋」與「文本生成」的混合型 AI 應用架構。為了彌補通用大型語言模型(LLM) 無法內建企業私密知識的缺陷，或是容易發生幻覺(Hallucination)，RAG 系統會在把問題與 Prompt 丟給 LLM「生成」答案之前，先去額外的外部資料庫（例如向量資料庫）中「檢索」出最相關的文件片段放入 Prompt 中當作「開卷考」的參考資料。如此可以確保 AI 回答更具時效性且立基於真實事證上。
>
> **💡 使用場景：**
> 企業內部的專屬知識庫客服系統：它可以讀取數萬份不公開的公司 PDF 財報或內部法務規定，然後針對員工的問題給出精準答覆並附上出處。
>
> **🔗 關聯關鍵字：**
> `Vector Database`, `Hallucination`, `Prompt Engineering`, `Semantic Search`
