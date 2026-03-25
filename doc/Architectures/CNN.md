# CNN (卷積神經網路)

> **📝 概念解釋：**
> 卷積神經網絡 (Convolutional Neural Network, CNN) 是一種專門處理具備網格拓樸結構資料（最典型為圖片中的像素網格）的深度學習架構。其核心是「卷積層 (Convolutional Layer)」，會利用多個小型的卷積核 (Filter / Kernel) 在整個輸入區域滑動並進行內積運算，從而擷取像是邊緣、紋理、形狀等局部空間特徵；加上「池化層 (Pooling)」用來縮小維度，使模型具備平移不變性 (Translation Invariance) 且大幅降低運算參數量。
>
> **💡 使用場景：**
> 電腦視覺界的第一霸主。廣泛應用於醫療 X 光片腫瘤辨識、自動駕駛系統的行人與車輛偵測、手機的相簿人臉自動分類、以及瑕疵品自動挑檢的工業 AI。
>
> **🔗 關聯關鍵字：**
> `Convolution`, `Computer Vision`, `Pooling`, `Image Classification`
