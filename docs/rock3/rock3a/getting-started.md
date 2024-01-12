---
sidebar_position: 3
---

# 开始使用

ROCK 3A 配备了四核 Cortex-A55 ARM 处理器和 LPDDR4 运行内存，
最高支持 4K@60 的 HDMI、MIPI DSI、MIPI CSI、带麦克风的 3.5 毫米耳机插孔、USB 端口、千兆以太网、PCIe 3.0、PCIe 2.0、40 pin GPIO 扩展座、RTC。  
此外，ROCK 3A 还支持 PD 和 QC 协议供电。

## 标注图

![ROCK 3A Overview](/img/rock3/rock3a-interfaces.webp)

<details>

<summary>Maskrom 模式</summary>

ROCK 3A 的 OTG 接口位于处于上方的 USB 3.0 接口，可通过 USB-A 转 USB-A 线连接主机和进入 Maskrom 的主板进行通信。
在 Maskrom 模式下，您可使用 [rkdevtool](low-level-dev/rkdevtool) 或 [upgrade-tool](low-level-dev/upgrade-tool) 来对您的产品进行操作。

以下是 ROCK 3A 进入 Maskrom 模式的步骤：

1. 拔出电源线断电
2. 短接 Maskrom 引脚，其位于 40 pin GPIO 连接座旁
3. 插入电源线上电，如果电源绿灯常亮则成功进入 Maskrom 模式
4. 通过 USB-A 转 USB-A 线连接主板的 OTG 口和 PC 主机的 USB 口即可实现通信

</details>

## 特性

|            模块             | ROCK 3 Model A                                                                                                                                                           |
| :-------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SoC<br/>CPU<br/>GPU<br/>NPU | **RK3568**<br/>四核 Cortex-A55, 频率高达 2Ghz<br/>Mali G52<br/>0.8TOPS NPU                                                                                               |
|            内存             | 2/4/8GB LPDDR4 3200MT/s                                                                                                                                                  |
|            存储             | eMMC，microSD 存储卡，M.2 NVMe 固态硬盘                                                                                                                                  |
|            显示             | 最高支持 4K@60 的 HDMI                                                                                                                                                   |
|            MIPI             | 通过 FPC 连接的 2-lane MIPI DSI                                                                                                                                          |
|            声音             | 带麦克风的 3.5 毫米耳机插孔<br/>支持高达 24 位/96KHz 音频的高清编解码器                                                                                                  |
|           摄像头            | 通过 FPC 连接的 2-lane MIPI CSI，支持高达 800 万像素摄像头                                                                                                               |
|            无线             | 可额外选购 [Radxa Wireless Module A8](/accessories/wireless-a8)                                                                                                          |
|             USB             | 一个 USB 3.0 OTG, 位于上方的 USB 3.0 端口，通过软件（[rsetup](/radxa-os/rsetup)）来切换硬件功能；一个 USB 3.0 HOST 端口；两个 USB 2.0 HOST 端口                          |
|           以太网            | 支持以太网供电 (PoE) 的千兆以太网：PoE 供电需要额外选购的 HAT                                                                                                            |
|             IO              | 40 pin GPIO 扩展座                                                                                                                                                       |
|            电源             | USB PD, 支持 USB Type-C PD 2.0, 9V/2A, 12V/2A, 15V/2A, 20V/2A（推荐）<br/>Qualcomm® Quick ChargeTM: 支持 QC 3.0/2.0 充电协议, 9V/2A, 12V/1.5A（推荐）<br/>DC 5V/4A 供电 |
|            尺寸             | 85mm x 56mm                                                                                                                                                              |

## 启动指南

### 准备项

- ROCK 3A
- 以下存储介质之一：  
   microSD 卡，容量不小于 16GB  
   [eMMC 模块](/accessories/emmc_module)，容量不小于 16GB
- 电源适配器，推荐使用 [Radxa Power PD 30W](/accessories/pd_30w)：  
   ROCK 3A 采用 Type-C 接口供电，支持 PD 供电输入
- USB 键盘鼠标
- HDMI 显示器和 HDMI 线  
   ROCK 3A 配备了全尺寸 HDMI 接口。建议使用具有 HDMI 功能的显示器。最高支持 4K@60 显示。
- microSD 读卡器或 eMMC 读卡器  
   用于 microSD 卡或 eMMC 模块的镜像刷写。

### 系统安装

1. 选择您要使用的[官方镜像](/rock3/images)并下载。

2. 参考[操作系统安装指南](install-os)将镜像刷写到存储介质中。

3. 将系统存储介质：microSD 卡或 eMMC 模块插入主板上的插口，并通过 Type-C 电源适配器供电启动您的产品。

4. 连接外设，开始使用 [Radxa OS](/radxa-os)。

如果您对该产品已足够了解，您也可使用直连写入的方式来进行刷机。

## 硬件资料

### GPIO

[GPIO 定义](/rock3/rock3a/hardware/rock3a-gpio)

### 下载

[v1.3 schematic pdf](https://dl.radxa.com/rock3/docs/hw/3a/ROCK-3A-V1.3-SCH.pdf) - ROCK 3A 原理图下载

[v1.3 2D Top&Bottom dxf](https://dl.radxa.com/rock3/docs/hw/3a/rock3a_v1.3_2d_dxf.zip) - ROCK 3A 2D CAD 文件下载

[v1.3 3D](https://dl.radxa.com/rock3/docs/hw/3a/rock3a_v1.3_3d_emn_emp.zip) - ROCK 3A 3D CAD 文件下载 (.emn/.emp 格式)

[v1.3 CAM pdf](https://dl.radxa.com/rock3/docs/hw/3a/ROCK-3A-V1.3-SMD.pdf) - ROCK 3A 位号图下载
