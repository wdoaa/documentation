---
sidebar_position: 15
---

# NX5 IO 快速上手

![nx5_nx5io](/img/nx5/nx5-io/nx5_io_with_module_main.webp)

## 上手准备

- NX5核心板
- NX5 IO 底板

eMMC 做系统盘：

- 一条 micro USB 转 typea USB 接口线缆 ![10 10](/img/nx5/others/typea2micro.webp).

microSD卡做系统盘：

- microSD卡，大于 8GB （推荐class10级以上）
- 读卡器： 用于将镜像烧录到 microSD 卡中

- 电源供应

  - NX5 IO 采用DC接口供电，输入电压5V。
  - 推荐使用官方的 Radxa Power PD 30W ![Radxa Power PD 30W](/img/accessories/pd-30w.webp) ![typec2dc5v](/img/nx5/others/typec2dc5v.webp).

- USB 键盘和鼠标

  - NX5 IO 配备四个 USB-A 3.0 接口，可配备全尺寸键盘和鼠标。

- 显示器和 HDMI/DP 线

  - NX5 IO 配备全尺寸 HDMI/DP 接口，可以使用支持 HDMI/DP 接口的显示器。
  - HDMI EDID用于确定最佳显示分辨率。 在支持 1080p（或 4K/8K）的显示器和电视上，将选择此分辨率。 如果不支持 1080p，EDID会找到的下一个可用分辨率。 此选定模式适用于大多数显示器/电视，但不适用于所有显示器/电视

- USB 转 TTL 串口线

  - NX5 IO 为 CPU 输出一个专用串行控制台，可以访问低级调试消息
  - 推荐使用Radxa USB to TTL Cable ![USB to TTL Cable](/img/accessories/usb-ttl.webp).

## 可选选项

- Ethernet 线（网线）

  - NX5 IO 支持以太网上网
  - 网线用于将 NX5 IO 连接到本地网络和互联网

- 相机模块

  - NX5 IO支持拍照功能。
  - 目前支持 IMX219 (其他camera模组适配中)

- WiFi/蓝牙卡
  - NX5 IO 支持 市面上常见的PCIE协议无线模块
  - 推荐使用 Radxa Wireless Module A8
    ![Radxa Wireless Module A8](/img/accessories/a8-module-01.webp).

## 烧录方式选择

请参考系统安装教程
&emsp;[系统安装](/compute-module/nx5/install_os.md)

## 启动板子

使用eMMC 做为系统盘，烧录系统后，可以直接上电启动系统。

以下为采用 microSD卡做为系统盘：

- 现在将带有镜像的存储介质 μSD Card 插入开发板上的插槽中。

- （可选）使用 USB 转 TTL 串口线, 请参考下面`串口访问`。

- 通过适配器为 NX5 IO 供电。

- NX5 IO 将在绿色电源 LED 亮起的情况下启动。 过了一会儿，另一个蓝色 LED 开始闪烁。

### 登录 NX5 IO

- 默认用户密码

```bash
User Name : radxa
Password  : radxa
# or
User Name : rock
Password  : rock
```

- 切换到 root 用户

```bash
rock@rock-nx5-io:~$ sudo su
[sudo] password for rock:
root@rock-nx5-io:/home/rock#
```

- root 用户默认没有密码。 您可以通过“passwd root”设置密码。

```bash
root@rock-nx5-io:/home/rock# passwd root
New password:
Retype new password:
passwd: password updated successfully
root@rock-nx5-io:/home/rock#
```

#### HDMI 显示器和鼠标键盘

- 如图所示，插入HDMI线材和鼠标键盘

#### 串口访问

- [串口访问](/general-tutorial/serial)

#### SSH访问

- [SSH访问](/radxa-os/config/ssh-access.md)

### 文件传输

#### SCP

scp 命令格式

- 选项: 常用-r传输文件夹
- 源地址: 文件在主机的位置。
- 目标地址: 需要上传到NX5 IO的位置。
- 用户名： NX5 IO的用户名，默认: rock。
- IP地址: 此处为NX5 IO的IP地址，请根据实际情况填写。
-

```bash
scp 选项   源地址  用户名@IP地址:目标地址
```

:::tip
关于更多关于scp的命令，请参考man手册
:::

### 以太网连接

- 查看网络配置

```bash
sudo ifconfig
```

- 测试网络

```bash
ping -c 5 www.bing.com
```

### WIFI&BT 连接

- [WIFI_BT 支持和使用教程](/accessories/wireless-a8).

### LED 状态

NX5 IO 具有电源 LED 和用户 LED。

- 电源指示灯
  电源 LED 为绿色。 NX5 IO 默认通电时常亮，

- 用户灯（可自定义）
  用户 LED 为蓝色。 默认情况下，其闪烁状态显示正在运行的内核。

### GPIO 功能描述

NX5 IO 有 1 个 40 针扩展接头。 每个管脚以颜色区分，更多信息请查看对应主板的**GPIO**介绍页.

### 关机与重启

- 立刻关机

```bash
sudo shutdown -h now
```

- 重启命令

```bash
sudo reboot
```
