# GRU (門控循環單元)

> **📝 概念解釋：**
> 閘門循環單元 (Gated Recurrent Unit, GRU) 是一種改良版的循環神經網路 (RNN)，用於解決標準 RNN 常見的梯度消失問題與長遠記憶無法保存的問題。它簡化了 LSTM 的設計，只有兩個閘門：「更新閘 (Update Gate)」和「重置閘 (Reset Gate)」，能在保持相近效能的同時大幅減少參數運算量。
>
> **💡 使用場景：**
> 對硬體資源有限（如手機端 AI 應用）但需要處理短至中等長度文本或是時間序列預測時，作為 LSTM 的輕量替代品。
>
> **🔗 關聯關鍵字：**
> `RNN`, `LSTM`, `Vanishing Gradient`, `Time Series`
