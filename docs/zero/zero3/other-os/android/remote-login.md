---
sidebar_position: 3
---

# 远程登录

本章节旨在向需要通过个人电脑（PC）远程访问 SBC 的用户介绍如何通过串口、adb 等方式进行远程登录

## 串口登录

串口登录是一种通过串口连接设备并登录设备后台的方式。
Radxa ZERO 3 系列均配备 40-PIN 排针，并默认开启了串口终端

:::tip
默认的串口调试波特率为 `1500000n8，无流量控制`,请确保使用的 USB 转 TTL 串口线支持 1.5M 波特
:::

![USB to TTL](/img/accessories/600px-Usb2ttl-cable-definition.webp)

- 接线方法

如下所示连接 USB 转 TTL 串口线：

| Radxa SBC       | 连接  | 串口线 |
| --------------- | ----- | ------ |
| **GND** (pin 6) | <---> | 黑色线 |
| **TX** (pin 8)  | <---> | 白色线 |
| **RX** (pin 10) | <---> | 绿色线 |

![USB to TTL connected](/img/accessories/1000px-Serial-connection.webp)
<Tabs queryString="target">
<TabItem value="Windows" label="Windows">

Windows 系统可以使用 [Mobaxterm](https://mobaxterm.mobatek.net/) 调试串口

点击左上角的 `Session` 新建 Serial 连接，在 `Serial port` 处选择串口号， `Speed` 处填入 `1500000`, 点击 OK 后双击会话，输入密码后即可访问。

![mobaxterm serial ](/img/zero/zero3w/mobaxterm-serial.webp)
</TabItem>
<TabItem value="Ubuntu" label="Ubuntu">
Ubuntu 系统可以使用 Mincom 串口工具调试

```bash
$ sudo apt-get update
$ sudo apt-get install minicom
```

安装完成后，就可以开始配置和使用Minicom。
首先，执行命令sudo minicom -s 打开minicom配置界面。

在配置界面中，选择“Serial port setup”，按下回车键进入串口设置。

选择save setup as dfl，可以将刚刚的修改作为默认配置，以后启动都按照这个配置启动。
启动minicom，执行命令sudo minicom。

</TabItem>
</Tabs>

## Adb 登录

ADB是一个连接 Android 设备与电脑的桥梁，用于在电脑上对 Android 设备进行全面的操作和管理。

### 有线登录

#### 要求

1. 一条USB 线
2. 一台有安装 ADB 工具的电脑或笔记本
3. 一个 Radxa ZERO 3W/E

#### 步骤

1. 用 USB 线连接计算机的 USB 接口和 Radxa ZERO 3W/E 的 OTG Type C 接口
2. 打开计算机终端输入 adb devices 确认识别到 Radxa ZERO 3W/E ，
   输入 adb shell 登录

```bash
$ adb devices
  List of devices attached
  e74a71a469bf207c	device

$ adb shell
  rk356x_radxa_zero3:/ $
```

### 无线登录

Android 11 版本以后支持无线 ADB 。

#### 要求

1. 一台有安装 ADB 工具的电脑或笔记本 ，ADB 版本需要大于 31.0.0
2. 一个Radxa ZERO 3W ，安卓镜像需要大于或等于 11
3. 计算机和 Radxa ZERO 3W 需要在同一个局域网

#### 步骤

1. 启动 Radxa zero 3W，使用 wifi 连接 网络
2. 进入开发着模式，点击7次版本号可进入开发着模式（设置 -> 关于平板电脑 -> 版本号）
3. 进入开发着选项（设置 -> 系统 -> 开发着选项），打开无线调试，记住IP地址和接口(例：10.0.0.16:45613)
4. 打开计算机终端输入 adb connect 10.0.0.16:45613 连接 Radxa ZERO 3W ，输入 adb shell 登录

```bash
$ adb connect 10.0.0.16:45613

$ adb shell
  rk356x_radxa_zero3:/ $

```
