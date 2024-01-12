---
sidebar_position: 40
---

# Maskrom 模式

ROCK 3A 的 OTG 接口位于处于上方的 USB 3.0 接口，可通过 USB-A 转 USB-A 线连接主机和进入 Maskrom 的主板进行通信。
在 Maskrom 模式下，您可使用 [rkdevtool](low-level-dev/rkdevtool) 或 [upgrade-tool](low-level-dev/upgrade-tool) 来对您的产品进行擦写、线刷等操作。

## 进入 Maskrom 模式的方法

ROCK 3A 进入 Maskrom 模式的步骤：

1. 拔出电源线断电
2. 短接 SPI 引脚，如附图所示，其为电源键旁 3 pin 排针靠近外面的两个针脚
   ![ROCK 3A SPI](/img/rock3/3a/rock3a-spi.webp)
3. 移除 eMMC、microSD 卡等存储介质，或选择短接 Maskrom 引脚，其位于 40 pin GPIO 连接座旁
   ![ROCK 3A Maskrom](/img/rock3/3a/rock3a-maskrom.webp)
4. 插入电源线上电，如果电源绿灯常亮则成功进入 Maskrom 模式
5. 进入 Maskrom 后，断开 Maskrom引脚的连接,

&emsp;&emsp;如果需要**刷写EMMC**,则需**继续短接SPI引脚**;

&emsp;&emsp;如果需要**刷写SPI Nor Flash**, 则**需要断开SPI引脚**;

&emsp;&emsp;(关于SPI引脚的位置请参考步骤2)

7. 通过 USB-A 转 USB-A 线连接主板的 OTG 口和 PC 主机的 USB 口
   ![ROCK 3A Maskrom OTG](/img/rock3/3a/rock3a-maskrom-otg.webp)
8. 使用 [rkdevtool](low-level-dev/rkdevtool) 或 [upgrade-tool](low-level-dev/upgrade-tool) 来对您的产品进行擦写、线刷等操作。
