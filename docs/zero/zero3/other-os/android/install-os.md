---
sidebar_position: 2
---

# 系统安装

本文档将介绍如何把安卓镜像烧录到 Radxa ZERO 3 。

## 镜像下载

请到[资源下载汇总](/zero/zero3/other-os/android/download.md) 下载对应的镜像文件。

## 系统烧录

安装操作系统主要使用以下两种方法

1. 通过读卡器将系统镜像烧写到 MicroSD 卡 （**推荐**）
2. 使用 USB 线将系统镜像直接刷写到 eMMC 上

:::caution 注意
如果板子不带eMMC ，将不能使用方法 2，例如 Radxa ZERO 3E。
:::

## 方法一

### 准备

1. 准备一张 microSD 卡
2. 准备一个 SD 卡读卡器
3. 把 SD 卡插入 SD 读卡器, 然后把 SD 读卡器插入计算机的 USB 接口

### 刷入操作系统镜像到 microSD

#### 通过 Etcher 刷入操作系统镜像到 microSD

1. [下载](https://etcher.balena.io/)刷写工具 `Etcher`。  
   ![ROCK5A via Etcher 01](/img/rock5a/rock5a-etcher.webp)

2. 打开 Etcher，将准备的操作系统镜像刷写到 microSD 卡。在 Etcher 窗口中，单击 `Flash from file` 选择刚下载的操作系统镜像。  
   ![ROCK5A via Etcher 02](/img/rock5a/rock5a-etcher-1.webp)

3. 在 Etcher 窗口中，点击 `Select target`。  
   ![ROCK5A via Etcher 03](/img/rock5a/rock5a-etcher-2.webp)

4. 在 Etcher 窗口中，点击 `Flash!` 然后等待刷写进度条。  
   ![ROCK5A via Etcher 04](/img/rock5a/rock5a-etcher-3.webp)

5. 在 Etcher 窗口中，当刷写成功时将会显示 `Flash Complete!`  
   ![ROCK5A via Etcher 05](/img/rock5a/rock5a-etcher-4.webp)

**如果刷写操作系统镜像错误, 请手动再试一次。**

#### 通过 Win32DiskImager 刷入操作系统镜像到 microSD

1. [下载](https://win32diskimager.org/)刷写工具 `Win32DiskImager`  
   ![ROCK5A via Win32DiskImager 01](/img/rock5a/rock5a-win32.webp)

2. 打开 Win32DiskImager  
   ![ROCK5A via Win32DiskImager 02](/img/rock5a/rock5a-win32-1.webp)

3. 点击文件夹图标按钮然后选择要刷写的镜像  
   ![ROCK5A via Win32DiskImager 03](/img/rock5a/rock5a-win32-2.webp)

4. 完成上述操作后，单击 `Write` 按钮开始刷写镜像，然后等待写入镜像完成。  
   ![ROCK5A via Win32DiskImager 04](/img/rock5a/rock5a-win32-3.webp)

## 方法二

由于 Radxa ZERO 3E 没有 eMMC ，此方法只适用于 Radxa ZERO 3W

### 准备

1. 准备一条 USB 线
2. 按住 Maskrom 按键，用 USB 线连接计算机的 USB 接口和 Radxa Zero 3W 的 OTG Type C 接口
   ![zero3w](/img/zero/zero3w/radxa_zero_3w.webp)

### 我的电脑是Windows

&emsp;[rkdevtool](/general-tutorial/rksdk/rkdevtool)

### 我是电脑是Linux / macOS

&emsp;[rkdeveloptool](/general-tutorial/rksdk/rkdeveloptool)

&emsp;[upgrade_tool](general-tutorial/rksdk/upgrade_tool)（可同时烧录多台设备）

## 启动系统
