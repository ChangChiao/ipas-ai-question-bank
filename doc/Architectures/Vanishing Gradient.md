# Vanishing Gradient

## 📝 概念解釋 (Concept Explanation)
梯度消失 (Vanishing Gradient Problem) 是在訓練「很深」的神經網路（例如多層感知機 MLP 或早期的 RNN）時容易遇到的致命問題。
在訓練神經網路時，常使用「反向傳播演算法 (Backpropagation)」搭配連鎖律 (Chain Rule) 從最後一層往前更新每一層的權重。當網路層數太多，且使用的激勵函數（如 Sigmoid 或 Tanh）其導數值皆小於 1 時，這些小於 1 的數值在不斷相乘的過程中會變得越來越靠近 0。最終導致傳回最初幾層的梯度（也就是更新參數的方向與力度）趨近於零，這會讓最前面的神經層「幾乎停止學習變更」，導致整個模型無法有效訓練。

## 💡 使用場景 (Use Cases)
- **深度卷積神經網路 (CNN) 架構選擇**：為了避免在訓練幾十層以上的影像分類網路發生梯度消失，現代模型捨棄了 Sigmoid，改用 ReLU 作為隱藏層的激勵函數（因其導數為 1），或是引入如同 ResNet 中的「殘差連接 (Residual Connection)」，直接將梯度跨層傳遞。
- **解決自然語言處理中長序列的遺忘問題**：傳統 RNN 遇到長文章時，因梯度消失很容易忘記前文的線索。為了解決這個問題，後來的研究發展出了 LSTM (長短期記憶神經網路) 或 Transformer 等架構來保留長距離的記憶與梯度。

## 🔗 關聯關鍵字 (Related Keywords)
`Backpropagation (反向傳播)`, `Deep Learning (深度學習)`, `ReLU`, `ResNet (殘差網路)`, `Exploding Gradient (梯度爆炸)`
