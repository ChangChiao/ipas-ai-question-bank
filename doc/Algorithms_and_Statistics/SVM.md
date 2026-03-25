# SVM (支持向量機)

> **📝 概念解釋：**
> 支持向量機 (Support Vector Machine, SVM) 是一種強大的監督式學習演算法，常用於分類。(概念上) 它的目標是尋找一個能將不同類別資料分開的最優超平面 (Hyperplane)，且使得該平面距離兩邊分類的最靠近資料點 (即支持向量 Support Vectors) 最大化 (最大化 Margin)。如果資料在低維度不可分，SVM 能透過核函數 (Kernel Trick) 投射到高維度空間來做分類。
>
> **💡 使用場景：**
> 特別適合用於高維度且樣本數相對不大的資料集。早期在影像辨識、文字分類與生物資訊學 (如基因分類) 都有非常卓越的表現。
>
> **🔗 關聯關鍵字：**
> `Margin`, `Supervised Learning`, `Kernel Trick`, `Hyperplane`
