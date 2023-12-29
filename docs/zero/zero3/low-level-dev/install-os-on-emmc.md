---
sidebar_position: 1
---

# 安装系统到 EMMC

## 准备工作

## 镜像下载

## 进入 Maskrom 模式

<Tabs queryString="maskrom">
<TabItem value="ZERO 3W">

![ZERO 3W Overview](/img/zero/zero3w/radxa_zero_3w.webp)

Radxa ZERO 3W 进入 Maskrom 模式的方法

1. 拔出 micro SD 卡和电源线
2. 按住背面的 Maskrom 按钮
3. 通过 USB-A 转 USB-C 线连接PC 主机的 USB，如果电源绿灯常亮则成功进入 Maskrom 模式

</TabItem>
<TabItem value="ZERO 3E">

![ZERO 3E Overview](/img/zero/zero3w/radxa_zero_3e.webp)

Radxa ZERO 3E 进入 Maskrom 模式的方法

1. 拔出 micro SD 卡和电源线
2. 通过 USB-A 转 USB-C 线连接PC 主机的 USB，如果电源绿灯常亮则成功进入 Maskrom 模式

</TabItem>
</Tabs>

Radxa ZERO 3 的 OTG 接口是 TYPE-C,可通过 USB-C 转 USB-A 线连接主机和进入 Maskrom 的主板进行通信。

在 Maskrom 模式下，您可使用 [Rockchip 开发套件](/general-tutorial/rksdk)来对您的产品进行擦写、线刷等操作。

## 安装系统到 eMMC

[Windows 环境下安装](/general-tutorial/rksdk/rkdevtool.md)

[Linux 环境下安装](/general-tutorial/rksdk/rkdeveloptool.md)

## 启动系统
