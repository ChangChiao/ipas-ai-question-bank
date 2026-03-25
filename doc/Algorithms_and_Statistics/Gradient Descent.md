# Gradient Descent (梯度下降)

> **📝 概念解釋：**
> 梯度下降法 (Gradient Descent) 是機器學習與深度學習中最核心的最佳化演算法之一。它的目標是尋找損失函數 (Loss Function) 的區域最小值。運作原理是在每一次迭代時，計算當下參數所在位置的「梯度 (斜率)」，然後沿著梯度的反方向，乘上學習率 (Learning Rate) 更新參數，一步步逼近最低點。
>
> **💡 使用場景：**
> 訓練類神經網路的底層驅動力。所有你看到的深度學習模型（包含 ChatGPT 背後的 GPT 模型），在訓練時都是依靠梯度下降 (及其變形如 Adam、SGD) 來調整網路上億個權重參數。
>
> **🔗 關聯關鍵字：**
> `Optimization`, `Learning Rate`, `Loss Function`, `Backpropagation`
