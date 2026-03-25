# Diffusion Model (擴散模型)

> **📝 概念解釋：**
> 擴散模型 (Diffusion Model) 是近幾年主宰圖像生成領域的新興架構（如 Midjourney、Stable Diffusion）。其運作基於物理熱力學原理：先將一張清晰的圖片透過多步的人工地逐步「添加雜訊 (Forward Process)」，直到它完全成為無意義的躁點；接著再訓練神經網路學會「逆向去除雜訊 (Reverse Process)」，一步步從亂碼中重新還原出高品質、或是符合指定提詞 (Prompt) 條件的嶄新圖像。
>
> **💡 使用場景：**
> 目前所有的頂級 AI 繪圖工具皆採用此技術，可透過描述文字(Text-to-Image)產出高擬真照片、插畫、甚至是生成影音(Video Generation)。
>
> **🔗 關聯關鍵字：**
> `Generative Model`, `Denoising`, `Stable Diffusion`, `Computer Vision`
