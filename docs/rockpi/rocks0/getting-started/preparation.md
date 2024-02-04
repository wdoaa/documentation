---
sidebar_position: 2
---

# 准备工作

## 必备线材

** Radxa ROCK S0 必须配置专用线材才可以使用 **

### 线材信号定义

#### USB OTG / HOST 信号定义

| 颜色 | 定义   |
| ---- | ------ |
| 红色 | 5V     |
| 白色 | USB_DM |
| 绿色 | USB_DP |
| 黑色 | GND    |

#### 100Mbps 网口信号定义

| 颜色 | 定义 |
| ---- | ---- |
| 红色 | RXN  |
| 绿色 | RXP  |
| 白色 | TXN  |
| 黑色 | TXP  |

![rocks0 sequence](/img/rockpi/s0/rock-s0-signal-sequence.webp)

### USB OTG 线材

ROCK S0 适用 4-Pin MX1.25mm 转 公头 USB 的线材，该线材可接到 5V 适配器上为 ROCK S0 供电，也可以直接接到主机进行通信。

![rocks0 otg](/img/rockpi/s0/rocks0-otg-wire.webp)

### USB HOST 线材

ROCK S0 适用 4-Pin MX1.25mm 转 母头 USB 线材，该线材可为 ROCK S0 提供一个接usb设备的接口。

![rocks0 usb](/img/rockpi/s0/rocks0-usb-wire.webp)

### 以太网线材

ROCK S0 适用 4-Pin MX1.25mm 转 网口线材，该线材可为 ROCK S0 接入 100Mbps 以太网网络。

![rocks0 eth](/img/rockpi/s0/rocks0-eth-wire.webp)

## 开发准备

### 电源

Radxa ROCK S0 的供电接口为 4 Pin USB 2.0 OTG port，仅支持 5V 输入。

![rocks0 otg](/img/rockpi/s0/rocks0-otg-wire.webp)

### 启动介质

microSD 卡，容量不小于 8GB, 用于系统启动盘

### microSD 读卡器

用于制作系统启动盘

### 网络连接

ROCK S0 板载了 Wi-Fi 模块，可以通过 Wi-Fi 接入网络，也通过[以太网](/img/rockpi/s0/rocks0-eth-wire.webp)接入网络。

### USB to TTL 串口

[串口线](/rockpi/rocks0/low-level-dev/serial.md)用于输入调试指令

## 常见问题

## 注意事项

## 配件

[支持的配件](../accessories)
