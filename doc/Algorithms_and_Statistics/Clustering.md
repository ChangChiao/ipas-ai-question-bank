# Clustering

## 📝 概念解釋 (Concept Explanation)
分群 (Clustering) 是一種「非監督式學習 (Unsupervised Learning)」的演算法。它的主要目的是在「沒有事先標記答案」的情況下，自動發現資料內部的隱藏結構，並根據資料之間的相似性（例如距離的遠近），將資料劃分成若干個不同的群組（Clusters）。同一個群組內的資料具有較高的相似度，而不同群組間的資料則差異較大。

## 💡 使用場景 (Use Cases)
- **客戶市場區隔 (Customer Segmentation)**：電商或零售業根據消費者的購買習慣、年齡、消費能力等特徵進行自動分群，進而針對不同群體（如高價值客群、價格敏感客群）推播客製化的行銷活動與商品推薦。
- **異常偵測 (Anomaly Detection)**：在信用卡交易或工廠設備監測中，將正常行為的數據分群後，如果出現不屬於任何常見群組（或是距離群集中心極遠）的特異數據，即可快速將其標記為可能的盜刷或設備故障異常。
- **影像壓縮與特徵萃取**：在電腦視覺中，透過對影像中的顏色或像素特徵進行分群（如 K-Means），自動減少影像使用的色彩數量，達到壓縮的效果。

## 🔗 關聯關鍵字 (Related Keywords)
`Unsupervised Learning (非監督式學習)`, `K-Means`, `Hierarchical Clustering (階層式分群)`, `DBSCAN`, `Dimensionality Reduction (降維)`
