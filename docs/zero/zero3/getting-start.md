---
sidebar_position: 1
---

# 开始使用

- Radxa ZERO 3W/3E 是一款超小尺寸高性能单板计算机，外形紧凑，接口丰富
- Radxa ZERO 3W/3E 专为包括制造商、物联网开发人员、业余爱好者和 PC DIY 爱好者在内的多元化用户群量身定制，是一个超小尺寸的多功能的平台,可以用于各种不同的应用，包括物联网设备、机器学习边缘计算、家庭自动化、教育和娱乐等。

## 标注图

- **ZERO 3W**
  ![ZERO 3W Overview](/img/zero/zero3w/radxa_zero_3w.webp)

- **ZERO 3E**
  ![ZERO 3W Overview](/img/zero/zero3w/radxa_zero_3e.webp)

## 特性

<table>
    <tr>
        <td align="center" >模块</td>
        <td align="center">ZERO 3W</td>
        <td align="center">ZERO 3E</td>
    </tr>
    <tr>
        <td align="center">SoC</td>
        <td colspan="2" align="center">Rockchip RK3566</td>
    </tr>
    <tr>
        <td align="center">CPU</td>
        <td colspan="2" align="center">四核 Cortex-A55, 频率最高达 1.6Ghz</td>
    </tr>
    <tr>
        <td align="center">GPU</td>
        <td colspan="2" align="center">Arm Mali™‑G52‑2EE, 支持Arm Mali™‑G52‑2EE, OpenGL® ES1.1/2.0/3.2, Vulkan® 1.1, OpenCL™ 2.0</td>
    </tr>
    <tr>
        <td align="center">内存</td>
        <td colspan="2" align="center">1/2/4/8 GB LPDDR4</td>
    </tr>
    <tr>
        <td align="center">存储</td>
        <td align="center">板载 eMMC 模块：0/8/16/32/64 GB <br/> microSD 存储卡</td>
        <td align="center">microSD 存储卡</td>
    </tr>
    <tr>
        <td align="center">显示</td>
        <td colspan="2" align="center">提供 Micro HDMI接口：支持 1080p60 输出</td>
    </tr>
    <tr>
        <td align="center">以太网</td>
        <td align="center">/</td>
        <td align="center">支持以太网供电 (PoE) 的千兆以太网<br/>PoE 供电需要额外选购HAT</td>
    </tr>
    <tr>
        <td align="center">无线通讯</td>
        <td align="center">Wi-Fi 4 (802.11 b/g/n) BT 5.0 with BLE</td>
        <td align="center">/</td>
    </tr>
    <tr>
        <td align="center">USB</td>
        <td colspan="2" align="center">USB 2.0 Type-C OTG X1 <br/> USB 3.0 Type-C HOST X1</td>
    </tr>
    <tr>
        <td align="center">摄像头</td>
        <td colspan="2" align="center">1x4 通道 MIPI CSI</td>
    </tr>
    <tr>
        <td align="center">其他</td>
        <td colspan="2" align="center">一个40针扩展座</td>
    </tr>
    <tr>
        <td align="center">电源</td>
        <td colspan="2" align="center">需要 5V/2A 电源适配器</td>
    </tr>
    <tr>
        <td align="center">尺寸</td>
        <td colspan="2" align="center">65mm x 30mm</td>
    </tr>
</table>

## 开始前准备

### 必要项

- ZERO 3W/3E 主板

- 以下存储介质：  
  microSD 卡，容量不小于 8GB

- 电源：  
  ZERO 3W/3E 采用 Type-C 接口供电，仅支持 5V 输入。建议最低使用 5V/2A 电源适配器。
  :::tip
  瑞莎推荐使用 [Radxa Power PD30W](/accessories/pd_30w)。
  :::

- USB 键鼠 和 Type-C Hub  
  有 2 个 USB-C 接口，一个用于供电和OTG,另一个使用 Type-C Hub 可以使用全尺寸键盘和鼠标。

- 显示器和 Micro HDMI 线  
  配备了Micro HDMI 接口。建议使用具有 HDMI 功能的显示器。
  最高支持 1920 x 1080 分辨率。

- microSD 读卡器  
  将镜像刷写到 microSD 卡上。

### 可选项

- USB 转 TTL 串口线:  
  用于[串口调试](/general-tutorial/serial)。

- 摄像头  
  支持MIPI CSI摄像头。

### 系统安装

1. 选择您要使用的[官方镜像](/zero/images)并下载。

2. 参考[操作系统安装指南](/general-tutorial/os-installation)将镜像刷写到存储介质中。

3. 将 microSD 卡插入主板上的microSD插口，带 eMMC 的可以直接在 eMMC 里烧录固件,通过 Type-C 电源适配器供电启动 ZERO 3W/3E。

[Maskrom 模式](/zero/zero3/maskrom)

## 硬件资料

### GPIO

[GPIO 定义](/zero/zero3/hardware/zero3-gpio)

### 下载

#### ZERO 3W V1.11 量产版本

[v1.11 2D dxf](https://dl.radxa.com/zero3/docs/hw/3w/radxa_zero_3w_2d_dxf.zip) - 下载 ZERO 3W v1.11 2D 文件  
[v1.11 原理图 pdf](https://dl.radxa.com/zero3/docs/hw/3w/radxa_zero_3w_v1110_schematic.pdf) - 下载 ZERO 3W V1.11 的原理图  
[v1.11 位号图 pdf](https://dl.radxa.com/zero3/docs/hw/3w/radxa_zero_3w_v1110_smb.zip) - 下载 ZERO 3W V1.11 的元器件位置参考表
