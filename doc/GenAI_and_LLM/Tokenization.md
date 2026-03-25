# Tokenization (分詞)

> **📝 概念解釋：**
> 標記化 / 斷詞 (Tokenization) 是自然語言處理中將文本資料「數位化翻譯給電腦看」最源頭的步驟。因為神經網路只懂數字，它會把一個句子拆解成最小單位 Token（可能是單純的一個詞、半個詞、或是中文字元），然後對應到一個專屬的數字 ID。不同的模型採用了不同的切分演算法(例如 BPE 或 WordPiece)，這也是為何一段中文字，ChatGPT 與 Claude 消耗的 Token 數量會不一樣的原因。
>
> **💡 使用場景：**
> 任何與 LLM 相關的對話串。開發者在計算 OpenAI API 耗費成本時，就是以 Token 數量為計價標準。另外，如果模型對繁體中文的 Tokenization 切片不佳，很容易造成模型理解錯誤與出現亂碼幻覺。
>
> **🔗 關聯關鍵字：**
> `BPE (Byte Pair Encoding)`, `Vocabulary`, `WordPiece`, `NLP`
