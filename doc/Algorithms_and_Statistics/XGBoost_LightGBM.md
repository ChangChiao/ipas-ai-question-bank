# XGBoost / LightGBM

> **📝 概念解釋：**
> XGBoost 與 LightGBM 都是基於梯度提升決策樹 (Gradient Boosting Decision Tree, GBDT) 架構的高效能開源演算法。它們的原理是透過不斷地建立新的決策樹來擬合上一棵樹的殘差 (Residuals)，最終將所有決策樹的結果加權組合起來。XGBoost 以極致的系統優化著名；LightGBM 則利用直方圖算法與葉子生長策略，在保持準確率的同時達到極快的訓練速度。
>
> **💡 使用場景：**
> 可以說是處理「表格型資料 (Tabular Data)」的神器。目前在 Kaggle 等各大資料科學競賽上幾乎是必備的首選方案，用於銷售預測、點擊率(CTR)預估、推薦系統等挑戰。
>
> **🔗 關聯關鍵字：**
> `Ensemble Learning`, `Gradient Boosting`, `Decision Tree`, `Tabular Data`
