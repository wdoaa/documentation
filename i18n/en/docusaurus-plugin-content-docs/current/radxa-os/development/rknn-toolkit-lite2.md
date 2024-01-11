---
sidebar_position: 20
---

import ImportRknn from "../../common/dev/\_rknn-toolkit2.mdx"

# Board-side Python NPU model inference tutorial (RKNN Toolkit Lite2)

:::info
This document only shows how to run the official example, for more information you can see the rknn_toolkit_lite2/doc folder in [RKNN Toolkit2 repository](https://github.com/rockchip-linux/rknn-toolkit2).
:::

## Install RKNN Toolkit Lite2 and its dependencies.

:::info
RKNN Toolkit Lite2 and its dependencies are installed by default in the official Radxa system image, if it does not work, try the following commands.
:::

```bash
sudo apt update
sudo apt install rknpu2-rk3588 python3-rknnlite2    #SOC is RK3588 series
sudo apt install rknpu2-rk356x python3-rknnlite2    #SOC is RK356X series
```

## Install RKNN Toolkit Lite2 official rexample

```bash
sudo apt update
sudo apt install python3-rknnlite2-example
```

## Running the Resnet18 example

:::info
RKNN Toolkit Lite2 is mainly used for deploying RKNN models on Rockchip NPU.  
Before using RKNN Toolkit Lite2, users need to convert the models exported by deep learning frameworks to RKNN models through RKNN Toolkit2.  
:::

<!-- The tutorial of using RKNN Toolkit2 can be found in [PC-based NPU model transformation and inference tutorial RKNN Toolkit2. -->

<ImportRknn />

```bash
cd /usr/share/python3-rknnlite2
python test.py
--> Load RKNN model
done
--> Init runtime environment
I RKNN: [14:34:53.240] RKNN Runtime Information: librknnrt version: 1.5.2 (c6b7b351a@2023-08-23T15:28:22)
I RKNN: [14:34:53.242] RKNN Driver Information: version: 0.8.2
W RKNN: [14:34:53.242] Current driver version: 0.8.2, recommend to upgrade the driver to the new version: >= 0.8.8
I RKNN: [14:34:53.250] RKNN Model Information: version: 6, toolkit version: 1.5.2-source_code(compiler version: 1.5.2 (71720f3fc@2023-08-21T09:35:42)), target: RKNPU v2, target platform: rk3588, framework name: PyTorch, framework layout: NCHW, model inference type: static_shape
done
--> Running model
resnet18
-----TOP 5-----
[812]: 0.9996760487556458
[404]: 0.00024927023332566023
[657]: 1.449744013370946e-05
[466 833]: 9.023910024552606e-06
[466 833]: 9.023910024552606e-06

done
```

:::info
Executing this example will load the Resnet18 model and perform inference to get the top5 classification results for the test image.  
Here, category 812 has the highest probability, so the model may think that the input image belongs to category 812.  
To understand what category 812 represents, you need to look at the dataset or labels that were used in the training of the model, or look for documents or resources related to the model to determine what category 812 means.  
In this case category 812 would represent the space shuttle.
:::

![Input image](/img/general-tutorial/rknn/space_shuttle_224.webp)
