---
sidebar_position: 1
---

# 安装系统到 EMMC

## 准备工作

- 1x [OTG 线材](/rockpi/rocks0/accessories/rocks0-wire.md)
- 1x 5V 电源适配器

## 镜像下载

请到 [资源下载汇总](/rockpi/rocks0/getting-started/download.md) 下载对应的镜像文件

## 进入 Maskrom 模式

![ROCK S0 Overview](/img/rockpi/s0/mark_rock_pi_s0.webp)

Radxa ROCK S0 进入 Maskrom 模式的方法

1. 拔出 microSD 卡和电源线
2. 按住正面的 Maskrom 按钮
3. 通过 OTG 线连接PC 主机的 USB，如果电源绿灯常亮则成功进入 Maskrom 模式

在 Maskrom 模式下，您可使用 [rkdevtool](rkdevtool) 或 [upgrade-tool](upgrade-tool) 来对您的产品进行擦写、线刷等操作。

## 安装系统到 eMMC

[Windows 环境下安装](rkdevtool)

[Linux 环境下安装](rkdeveloptool)

## 启动系统

- 使用OTG线连接板子的 [4 Pin USB 2.0 OTG port](/rockpi/rocks0/getting-started/overview.md) 到电源适配器上，然后系统开始启动，绿灯闪烁。

## 常见问题
