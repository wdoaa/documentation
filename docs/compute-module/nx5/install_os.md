---
sidebar_position: 2
---

# 系统烧录

Radxa NX5 目前提供 Debian OS 系统

## 准备工作

<Tabs queryString="target">
 <TabItem value="底板" label="NX5 IO">

烧录到microSD卡需要准备：

- microSD卡 (建议class10等级以上)

- USB读卡器

烧录到eMMC需要准备:

- micro usb 转 typea usb 接口线缆

<!-- 占位 -->

 </TabItem>
</Tabs>

## 镜像下载

请到 [计算模块镜像下载汇总](/compute-module/images) 下载对应的镜像文件

## 系统烧录

有两种烧录SD卡的方式，使用 Etcher 或者 Win32DiskImager，可以选择其中一种进行烧录

### 刷入操作系统镜像到 microSD

<Tabs queryString="target">
  <TabItem value="通过Etcher" label="Etcher">

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

</TabItem>

  <TabItem value="通过 Win32DiskImager" label="Win32DiskImager">

#### 通过 Win32DiskImager 刷入操作系统镜像到 microSD

1. [下载](https://win32diskimager.org/)刷写工具 `Win32DiskImager`  
   ![ROCK5A via Win32DiskImager 01](/img/rock5a/rock5a-win32.webp)

2. 打开 Win32DiskImager  
   ![ROCK5A via Win32DiskImager 02](/img/rock5a/rock5a-win32-1.webp)

3. 点击文件夹图标按钮然后选择要刷写的镜像  
   ![ROCK5A via Win32DiskImager 03](/img/rock5a/rock5a-win32-2.webp)

4. 完成上述操作后，单击 `Write` 按钮开始刷写镜像，然后等待写入镜像完成。  
   ![ROCK5A via Win32DiskImager 04](/img/rock5a/rock5a-win32-3.webp)

</TabItem>
</Tabs>

### 刷入操作系统镜像到 eMMC

<Tabs queryString="target">
 <TabItem value="底板" label="NX5 IO">

1. 将micro usb 线缆连接到主机

2. 按住 maskrom 按键后上电，此时会进入 maskrom 模式

<!-- 占位 -->

 </TabItem>
</Tabs>

<Tabs queryString="target">

<TabItem value="Linux/Mac" label="Linux">

#### Linux/Mac 系统使用 rkdeveloptool 烧录

&emsp;[rkdeveloptool](/general-tutorial/rksdk/rkdeveloptool)

&emsp;[upgrade_tool](low-level-dev/upgrade-tool)（可同时烧录多台设备）

</TabItem>

<TabItem value="Windows" label="Windows">

#### Windows 系统使用 rkdeveloptool 烧录

&emsp;[rkdevtool](/general-tutorial/rksdk/rkdevtool)

</TabItem>

</Tabs>
