---
sidebar_position: 1
---

# 快速开始

## 准备工作

### 必须

#### Radxa Zero 开发板

#### 存储设备:

- 板载的eMMC 或
- 如果开发板没有板载eMMC需要准备一个至少8GB的sd卡. eMMC是板子背面的那个大的贴片芯片，你可以检查下你的板子是否有这个元件.<br/>如果需要安装带有桌面环境的镜像，请使用至少16GB的sd卡，最好是32GB。

#### USB-C hub

- Radxa Zero 有一个板载 Type-C USB3.0接口（靠近板子中间的那个USBC口）。这个接口支持USB3.0 Type-A和有线网，但是不具备视频输出功能。

#### USB 键盘和鼠标

- 可以通过接在USB Hub上的键鼠控制Radxa Zero。

#### 显示器和HDMI线

- Radxa Zero 板载一个micro HDMI的视频输出接口，需要使用micro HDMI 转标准HDMI 线连接显示器。
- HDMI的输出分辨率取决于显示器，Radxa Zero会根据显示器调整到最佳的显示分辨率。

#### USB A to C 或USB C to C 数据线

- USB 数据线是用于Radxa Zero供电和传输数据的。使用USB A to C 还是USB C to C 取决于你点电脑接口类型。

#### microSD 卡读卡器 (用于没有板载eMMC的板子)

- 用于烧录系统镜像。

### 可选

#### 电源适配器

Radxa Zero 的功耗比较低，可以直接使用电脑USB供电，所以不再需要准备单独的电源适配器。如果独立使用Radxa Zero，可以使用 5V，1A（至少）的电源适配器。<br/> 使用电脑USB供电请使用USB3.0（可提供900mA电流），USB2.0只有500mA的电流会导致板子不稳定。

#### USB to TTL 串口线

如果需要串口控制，请准备一根串口通讯线。

## 烧录镜像

### microSD卡烧录

1. 选择您要使用的[官方镜像](/zero/images)并下载。

2. 参考[操作系统安装指南](/general-tutorial/os-installation)将镜像刷写到存储介质(SD卡)中。

### eMMC烧录

1. 选择您要使用的[官方镜像](/zero/images)并下载。
2. 在烧录前需要擦除eMMC，参考[eMMC擦除](/zero/zero/erase-emmc)
3. 参考[Maskrom模式](/zero/zero/maskrom)，使Radxa Zero进入Maskrom模式。
4. 系统烧录，擦除eMMC后进入MaskRom后会在电脑上显示一个大容量存储设备，参考上小节microSD卡烧录方式即可。
