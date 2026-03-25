# KL Divergence (KL 散度)

> **📝 概念解釋：**
> Kullback-Leibler Divergence (KL散度，又稱相對熵) 是用來衡量兩個機率分佈 (通常一個是真實分佈 P，一個是預測或近似分佈 Q) 之間差異的非對稱指標。當兩個分佈完全相同時，KL散度為 0；差別越大，數值越高。
>
> **💡 使用場景：**
> 在生成式 AI 與神經網路中，常被當作損失函數來最佳化模型，像是 VAE (變分自編碼器) 就利用 KL散度來確保隱空間分佈接近標準常態分佈。也可用於衡量自然語言模型中預測字詞機率分佈的誤差。
>
> **🔗 關聯關鍵字：**
> `Cross Entropy`, `Information Theory`, `VAE`, `Probability Distribution`
