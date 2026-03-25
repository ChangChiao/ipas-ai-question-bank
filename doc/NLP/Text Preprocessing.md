# Text Preprocessing

## 📝 概念解釋 (Concept Explanation)
文本前處理 (Text Preprocessing) 是自然語言處理 (NLP) 模型在讀取人類語言前必經的「資料清理與標準化」步驟。電腦沒辦法直接讀懂文字，它只能處理數字。因此，需要將雜亂無章的自然語言文字清理乾淨，為後續的辭典建立與文字向量化做準備。
常見的前處理技巧包含：去除標點符號與特殊字元、統一大小寫 (Lowercasing)、斷詞 (Tokenization)、去除無意義的停用詞 (Stop Words，如的、了、is、the)、以及將單字還原為基本型態的詞幹擷取 (Stemming) 或詞形還原 (Lemmatization)。

## 💡 使用場景 (Use Cases)
- **搜尋引擎最佳化與資訊檢索**：當使用者搜尋 "Runned quickly" 時，文字前處理能將它轉換成原型 "run" 和 "quick"，進而去資料庫比對出最相關的文章，而不會因為時態或副詞的些微差異找不到結果。
- **情緒分析 (Sentiment Analysis)**：在分析大量的 Twitter 或論壇貼文來判斷消費者對新手機的評價時，前處理會優先幫忙濾掉無關緊要的網址、表情符號與標點符號，保留像是 "good", "terrible" 等有意義的字眼。

## 🔗 關聯關鍵字 (Related Keywords)
`Tokenization (斷詞/分詞)`, `Stop Words (停用詞)`, `Stemming (詞幹擷取)`, `Lemmatization (詞形還原)`, `NLP (自然語言處理)`
