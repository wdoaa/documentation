---
sidebar_position: 2
---

# 系统烧录

Zero 3W/3E 目前提供 Debian OS 系统

## 准备工作

- 1x microSD (容量 >=8GB)
- 1x microSD 读卡器
- 5V 电源适配器 (推荐使用 [Radxa Power PD30W](/accessories/pd_30w))

## 镜像下载

请到 [资源下载汇总](/zero/zero3/getting-started/download.md) 下载对应的镜像文件

## 系统安装

1. 将 microSD 卡插入到读卡器中，然后将读卡器插到 PC 的usb口中

2. [下载](https://etcher.balena.io/)刷写工具 `Etcher`。  
   ![ROCK5A via Etcher 01](/img/rock5a/rock5a-etcher.webp)

3. 打开 Etcher，将准备的操作系统镜像刷写到 microSD 卡。在 Etcher 窗口中，单击 `Flash from file` 选择刚下载的操作系统镜像。  
   ![ROCK5A via Etcher 02](/img/rock5a/rock5a-etcher-1.webp)

4. 在 Etcher 窗口中，点击 `Select target`。  
   ![ROCK5A via Etcher 03](/img/rock5a/rock5a-etcher-2.webp)

5. 在 Etcher 窗口中，点击 `Flash!` 然后等待刷写进度条。  
   ![ROCK5A via Etcher 04](/img/rock5a/rock5a-etcher-3.webp)

6. 在 Etcher 窗口中，当刷写成功时将会显示 `Flash Complete!`  
   ![ROCK5A via Etcher 05](/img/rock5a/rock5a-etcher-4.webp)

**如果刷写操作系统镜像错误, 请手动再试一次。**

## 启动系统

- 按照上述步骤成功烧录 microSD 卡后，将 microSD 卡插入 Radxa ZERO 3 的 MicroSD 插槽内。
- Radxa ZERO 3 的供电接口为 [USB 2.0 OTG Type C port](/zero/zero3/hardware-design/hardware-interface.md)，请使用 Type-C 线缆连接供电口和适配器。

:::tip
Radxa ZERO 3 只支持 `5V` 供电。瑞莎推荐使用 [Radxa Power PD30W](/accessories/pd_30w)。
:::

## 参考文档

[安装操作系统镜像到 eMMC](/zero/zero3/low-level-dev/install-os-on-emmc.md)
