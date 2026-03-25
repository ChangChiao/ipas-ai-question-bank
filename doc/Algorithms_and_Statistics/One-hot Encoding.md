# One-hot Encoding

> **📝 概念解釋：**
> 獨熱編碼 (One-hot Encoding) 是一種將類別型資料 (Categorical Data) 轉換成機器學習模型能處理的數值型式技術。它會將原本的 N 種分類變成 N 個獨立的二進制特徵欄位，除了對應真實類別的欄位會標記為 1 之外，其餘全標記為 0，避免演算法被類別編號的數字大小所誤導。(例如處理顏色:紅/藍/綠)
>
> **💡 使用場景：**
> 當資料集中存在如「語言」、「城市」、「職業」這類沒有大小順序關係的名目資料時，送進神經網路或線性模型前都會先進行 One-hot Encoding 前處理。
>
> **🔗 關聯關鍵字：**
> `Feature Engineering`, `Label Encoding`, `Dummy Variable`, `Categorical Data`
