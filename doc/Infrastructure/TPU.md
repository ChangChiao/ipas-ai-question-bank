# TPU (張量處理單元)

> **📝 概念解釋：**
> 張量處理單元 (Tensor Processing Unit, TPU) 是 Google 專為加速機器學習與類神經網路運算而客製化設計的特定應用積體電路 (ASIC)。相對於 GPU 通用的平行運算架構，TPU 高度特化於執行深層卷積神經網絡中巨量的「矩陣乘法」與加法運算，其內部配備了矩陣乘法單元 (MXU)，能達成極高的吞吐量，並顯著降低運算的能耗。
>
> **💡 使用場景：**
> 用於需要訓練巨型語言模型或是處理海量資料深層學習任務的企業級應用。例如 Google 內部的搜尋引擎演算法訓練、Gemini 模型訓練皆依賴 TPU 叢集，開發者也可透過 Google Cloud 租用 TPU 進行加速。
>
> **🔗 關聯關鍵字：**
> `ASIC`, `GPU`, `Matrix Multiplication`, `TensorFlow`
