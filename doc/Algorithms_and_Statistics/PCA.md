# PCA (主成分分析)

> **📝 概念解釋：**
> 主成分分析 (Principal Component Analysis, PCA) 是一種降維 (Dimensionality Reduction) 技術。它透過正交轉換，將可能具相關性的高維度變數，轉換成一組線性不相關的低維度變數，稱為「主成分」。目的是在盡可能保留原始資料變異量 (Variance) 的前提下，減少特徵數量，以節省運算資源並去除雜訊。
>
> **💡 使用場景：**
> 經常在資料前處理步驟使用，或者是為了資料視覺化（將百維資料降至 2D 或 3D 後作圖）。例如：處理高解析度影像特徵提取時，先透過 PCA 大幅壓縮影像維度，過濾無用特徵。
>
> **🔗 關聯關鍵字：**
> `Dimensionality Reduction`, `Eigenvalue`, `Eigenvector`, `Feature Extraction`
