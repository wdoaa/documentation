---
sidebar_position: 5
---

# 新手入门

本指南是为 Radxa CM5 IO 初级使用者编写，可以帮助您了解 Radxa CM5 IO 基本的准备和设置。
当您拿到一块 Radxa CM5 IO 主板时，您首先需要知道印在电路板上面的型号和硬件版本。
我们将尽可能多地介绍板子的信息。

## 必要项

- Radxa CM5 IO 主板

- 以下存储介质之一：  
  microSD 卡，容量不小于 8GB  
  板载emmc，容量可选：8GB、16GB、32GB

- 电源：  
  Radxa CM5 IO 采用 DC 电源接口供电，支持 5V、12V 输入，推荐使用12V，这样供电比较稳定。

- USB 键鼠  
  Radxa CM5 IO 有 4 个 USB-A 接口，因此可配备全尺寸键盘和鼠标。

- 显示器、 HDMI 线、USB-C 线  
  Radxa CM5 IO 配备了全尺寸 HDMI 接口。建议使用具有 HDMI 功能的显示器。  
  Radxa CM5 IO 最高支持 8K 分辨率，以及常规的4K、2K、1080P等分辨率。  
  Radxa CM5 IO 配备了全功能typec接口。支持DP显示，以及USB3.0设备。

- microSD 读卡器  
  将镜像刷写到 microSD 卡上。

## 可选项

- USB-A 转 USB-C 线：  
  用于 `fastboot`/`adb` 命令和 maskrom 模式通信。

- USB 转 TTL 串口线:  
  用于[串口调试](/general-tutorial/serial)。

- 以太网线、PCIE 接口的 wifi 模块
  Radxa CM5 IO 支持 Wi-Fi 或以太网连接。
  以太网电缆用于将 Radxa CM5 IO 连接到本地网络和互联网。

- 摄像头  
  Radxa CM5 IO 支持摄像头功能。

- LCD 屏  
  Radxa CM5 IO 支持 MIPI DSI 显示功能。
  :::tip
  瑞莎建议使用 [Radxa Display 8 HD](/accessories/lcd-8-hd) 或 [Radxa Display 10 FHD](/accessories/lcd-10-fhd)。
  :::

- 音频线  
  可通过扬声器或标准 3.5 毫米插孔的耳机播放音频。

## 系统安装

首先，选择您要使用的[官方镜像](/compute-module/images)并下载。

然后，参考[操作系统安装指南](/general-tutorial/os-installation)将镜像刷写到存储介质中。

最后，将系统存储介质：microSD 卡插入主板上的插口，通过 DC 电源适配器供电启动 Radxa CM5 IO，如果镜像烧录在EMMC中，直接供电即可启动 Radxa CM5 IO。
