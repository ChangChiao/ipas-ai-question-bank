# VAE (變分自編碼器)

> **📝 概念解釋：**
> 變分自編碼器 (Variational Autoencoder, VAE) 是一種強大的機率生成模型。它不只是像傳統 Autoencoder 將輸入資料壓縮成固定向量，而是會學習將資料壓縮成一個「機率分佈的參數（平均值與變異數）」，然後再從這個分佈中取樣出隨機潛在向量 (Latent Vector) 來解碼並重建原始資料。這使得它能在潛在空間 (Latent Space) 中平滑地插值並生成連續且多樣的新樣本。
>
> **💡 使用場景：**
> 早期在影像生成、風格轉換、或是遊戲開發中用來自動生成虛擬角色的新臉孔，甚至是藥物分子的生成模擬與異常檢測。
>
> **🔗 關聯關鍵字：**
> `Autoencoder`, `Latent Space`, `KL Divergence`, `Generative Model`
