# Lemmatization (詞形還原)

> **📝 概念解釋：**
> 詞形還原 (Lemmatization) 是一種 NLP 的文本強正規化技術。它的目的是將帶有時態、單複數變化的單字，依據字詞的詞性與字典規則，標準化還原成它的「基本原形 (Lemma)」。例如將「running」還原為「run」，將「better」還原為「good」。這比暴力的字根提取 (Stemming) 來得更精準且合乎語言學。
>
> **💡 使用場景：**
> 用在開發高階的搜尋引擎與問答系統。當用戶搜尋「good hotels」時，系統因為詞形還原，也能成功比對並回傳包含「best hotel」的相關網頁文件。
>
> **🔗 關聯關鍵字：**
> `Stemming`, `Text Normalization`, `Tokenization`, `WordNet`
