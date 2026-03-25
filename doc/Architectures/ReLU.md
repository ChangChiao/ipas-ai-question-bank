# ReLU

## 📝 概念解釋 (Concept Explanation)
ReLU (Rectified Linear Unit，線性整流函數) 是深度學習神經網路中最常使用的非線性「激勵函數 (Activation Function)」。它的數學表達式極為簡單：`f(x) = max(0, x)`。這意味著如果輸入值為負數，ReLU 就會輸出 0；如果輸入值為正數，ReLU 就會直接輸出該數值。
相較於早期的 Sigmoid 或是 Tanh 激勵函數，ReLU 有著計算速度極快、容易收斂且不易發生「梯度消失 (Vanishing Gradient)」問題的巨大優勢，是讓深層神經網路能夠成功訓練的關鍵技術之一。

## 💡 使用場景 (Use Cases)
- **卷積神經網路 (CNN) 中的特徵提取**：在影像辨識的 CNN 模型（如 ResNet, VGG）中，經過卷積層萃取出的特徵通常會直接進入 ReLU 層，把負數過濾為 0，藉此保留對影像最重要的正向邊緣或輪廓特徵。
- **防止梯度消失的深層網路訓練**：當訓練幾十層甚至上百層的深層神經網路時，ReLU 能確保傳遞的梯度不會在反向傳播中變得微乎其微，從而成功訓練出極深的網路結構。

## 🔗 關聯關鍵字 (Related Keywords)
`Activation Function (激勵函數)`, `Vanishing Gradient (梯度消失問題)`, `CNN (卷積神經網路)`, `Leaky ReLU`, `Sigmoid`
