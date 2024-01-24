---
sidebar_position: 17
---

# 接口设置

如果你是首次使用 ROCK 5B，请先熟悉下 ROCK 5B 的[外设接口](../hardware/hardware-details)，以便于你更好的理解后续的内容。

## 接口连接指南

![rock5b_01](/img/rock5b/rock5b-interface-1.webp)

- **USB接口**

ROCK 5B 提供两个 USB 2.0 和两个 USB 3.0 端口。

- **以太网口**

如果您使用的是以太网有线上网方式，请将网线对准 ROCK 5B 上的 RJ45 端口插入，系统桌面就会弹出有线连接。

- **HDMI**

ROCK 5B 有两个 HDMI 输出端口，均支持 CEC 和 HDMI 2.1，分辨率最高支持分别为 8Kp60 和 4Kp60，并且其 Type-C 接口也可支持视频输出。  
另外，ROCK 5B 拥有 1 个 HDMI 输入接口，支持 HDMI 2.1 输入，分辨率为 4Kp60。

:::caution
注意: 在使用之前，请确认 HDMI 线的接口规格。
:::

- **电源**

RACK 5B 的电源接口为 Type-C 接口。Radxa 建议使用 [Radxa Power 30W](/accessories/pd_30w)，确保设备能正常运行。

- **耳机接口**

ROCK 5B 提供了一个 3.5mm 耳机接口，你可以将耳机或喇叭连接到 ROCK 5B 的耳机口。

- **M.2接口**

ROCK 5B 提供两个 M.2 连接器：

- 主板正面有一个带 2230 安装孔的 M.2 E Key 连接器，提供 PCIe 2.1 单通道、USB、SATA、SDIO、PCM 和 UART 信号，支持工业标准 M.2 WiFi 6 模块。  
  如果你想通过无线模块上网，Radxa 推荐使用 [Radxa Wireless A8](/accessories/wireless-a8)。Radxa Wireless A8 的接口规格是 M.2 2230 E 口，安装在 ROCK 5B 的 M.2 E 口然后设置 wifi 网络就可以上网，具体操作请查考[网络设置](../radxa-os/network)。

![rock5b_01](/img/rock5b/rock5b-use-wireless.webp)

- 在板的背面有一个带有四通道 PCIe 3.0 接口的 M.2 M Key 连接器。 板上有一个标准的 M.2 2280 安装孔，可以部署 M.2 2280 NVMe SSD。  
  **<font color='red'>注意：该 M.2 接口不支持 M.2 SATA SSD。</font>**

![rock5b_01](/img/rock5b/rock5b-use-ssd.webp)

- **TF卡**

microSD 卡槽位于 ROCK 5B 的背面。 安装 microSD 卡时注意 microSD 卡的管脚要靠近 PCB 板表面。 确保方向没有颠倒，如图所示以供参考。  
![rock5b_01](/img/rock5b/rock5b-interface-2.webp)

- **eMMC 模块**

ROCK 5B为 eMMC 提供高速 B2B 连接口，可用于操作系统和数据存储。安装时，请将模块的缺角对准PCB板上的图案区域，如图所示：  
![rock5b_01](/img/rock5b/rock5b-interface-3.webp)
