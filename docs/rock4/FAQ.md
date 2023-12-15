# 常见问题

### 同样的系统，在旧的硬件上可以启动，但在新的硬件上运行异常。

由于新的硬件版本有可能会进行部分物料更新(比如由于物料紧缺或者停产进行的物料更换), 导致旧的系统可能无法兼容新的硬件版本，引起系统运行异常。

我们建议您在更换硬件版本时，重新基于我们最新发布的系统进行配置，以保证最佳的软件兼容性。

如果您不基于我们最新的镜像进行重新配置您的系统，你也可以在旧版本硬件上执行[系统更新](/radxa-os/rsetup#system-update)以及[启动器更新](/radxa-os/rsetup#update-bootloader)进行在线升级。
这也可以保证您的系统包含了最新的硬件支持。 注意请在系统升级前，先完全备份您的系统（如生成磁盘镜像）.

:::caution
旧的系统没有预装 `rsetup`，此时系统将无法在线更新，我们*强烈建议*您迁移到最新的 RadxaOS，从而获取完整的产品支持。

针对旧系统，如果不迁移到最新系统，我们会提供一些绕过的方法.

但是如果您的系统已经预装了 `rsetup` , 请使用上面提到的通过 rsetup 进行在线更新的方法进行系统升级, 使用绕过的方式可能会后续在线升级过程中产生异常!
:::

<details><summary>ROCK 4SE 旧系统在旧的硬件版本上正常运行，但是在新的硬件版本 V1.53 上无法正常启动, 串口最终输出为 "ERR"</summary>

### 现象

- 串口最后输出类似以下内容：

```
channel 0 training pass!
channel 1 training pass!
change freq to 800MHz 1,0
Channel 0: LPDDR4,800MHz
Col error!!!
Cap error!
Channel 1: LPDDR4,800MHz
Bus Width=32 Col=10 Bank=8 Row=16 CS=1 Die Bus-Width=16 Size=1536MB
no stride
read addr 0x1000000 = 0x20000000
ERR
```

- 您的系统在正常启动时，会在串口提示系统使用的是 `U-Boot 2017.09`：

```
U-Boot 2017.09-2700-g70b4cfe057 (Jun 05 2021 - 07:28:02 +0000), Build: jenkins-linux-build-release-604

Model: Radxa ROCK Pi 4B
PreSerial: 2
DRAM:  3.9 GiB
```

- 您受影响的产品使用的是 Micron 内存。

### 原因

旧版本的 `U-Boot` 不支持 Micron 内存，无法完成硬件初始化。

### 涉及版本

以下 `U-Boot` 版本已经过瑞莎测试，确认为与 Micron 内存不兼容：

- `2017.09-00026-g2431fa34678 (Feb 14 2022 - 21:41:40 +0800)`
- `2017.09-2700-g70b4cfe057 (Jun 05 2021 - 07:28:02 +0000)`

::::caution
这是一个不完全的列表。如果您发现了有其他受影响的版本或内存型号，请通过最下方的`编辑此页`向我们反馈。
::::

### 绕过方案

您可以通过以下命令来更新您现有的系统镜像或系统安装设备内的 `U-Boot` 内存初始化代码。此命令也可在正常启动后的 ROCK 4SE 内执行。

请注意替换最后一个命令所指定的参数为您想要更新的对象。

```bash
curl https://dl.radxa.com/rockpi4/troubleshooting/rock-4ab-uboot-2017-idbloader.tar.gz | tar xzv
sudo ./setup.sh update_idbloader ___/dev/sdX_or_/dev/mmcblkX_or_system.img___
```

</details>
