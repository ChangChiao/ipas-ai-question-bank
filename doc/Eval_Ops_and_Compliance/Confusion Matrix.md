# Confusion Matrix (混淆矩陣)

> **📝 概念解釋：**
> 混淆矩陣 (Confusion Matrix) 是一種將分類模型的預測結果可視化的矩陣表格。在二元分類中它是 2x2 的矩陣，包含了四個指標：真陽性 (TP)、偽陽性 (FP，誤報)、真陰性 (TN)、偽陰性 (FN，漏報)。透過這四個基礎數值的組合，科學家可以進一步計算出精確度 (Precision)、召回率 (Recall)、F1-Score 以及整體準確率 (Accuracy)。
>
> **💡 使用場景：**
> 所有的分類任務評估皆須仰賴混淆矩陣來得知模型「錯在哪裡」。例如在醫療快篩檢測上，若漏掉一個染病患者(FN)的代價極高，則團隊必須透過混淆矩陣來調教閾值，極力降低 FN 的發生。
>
> **🔗 關聯關鍵字：**
> `Precision`, `Recall`, `F1 Score`, `Classification Evaluation`
