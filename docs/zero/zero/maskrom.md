---
sidebar_position: 40
---

# Maskrom 模式

以windows系统操作为例，其他系统操作参考[Wiki](https://wiki.radxa.com/Zero/dev/maskrom#Enable_maskrom)

## 准备工作

- Radxa Zero
- 电脑（Windows，Linux或MacOS）
- USB A to C或 C to C的数据线

## 进入Maskrom模式

首先在板子的背面找到USB boot button:
![Zero_usb_boot](/img/zero/zero/Zero_usb_boot.webp)

按住这个按键，将数据线插入电脑，直到电源灯亮了就松开。

在windows中的设备管理器，可以看到出现下面的设备
![Windows-GX-CHIP](/img/zero/zero/Windows-GX-CHIP.webp)

## 安装驱动

下载安装[Zagdig](https://zadig.akeo.ie/)软件安装USB驱动，如果在插入设备后没有出现下图中的设备信息，选择 `Options`->`List All Devices`

![Zagdig-libusb](/img/zero/zero/Zagdig-libusb.webp)

Windows下需要使用[Radxa DL](https://dl.radxa.com/zero/tools/windows/RZ_USB_Boot_Helper_V1.0.0.zip)软件从USB加载二进制文件，比如擦除eMMMC的操作。连接Radxa Zero进入Maskrom, Radxa DL **没有**显示 `Not detected, press and hold USB boot key and power on` 的提示就表示已经进入maskrom。接下来就可以进行[擦除eMMC](/zero/zero/erase-emmc).

![Rz-usb-helper-maskrom](/img/zero/zero/Rz-usb-helper-maskrom.webp)

注意：擦除过程不要断开Radxa Zero的连接，直到电脑的资源管理器中出现一个大容量存储设备则表示擦除成功，可以进行新的镜像烧录。
