---
sidebar_position: 10
---

# FAQ

## 热门问题

### 问题一： 我的 ROCK 5B 无法启动，如何检查是否坏了

按以下步骤排除 ROCK 5B 故障：

* 关闭 ROCK 5B 电源，取出 eMMC 模块、SD 卡、NVMe SSD
* 按住 MASKROOM 按钮 [（标签 32）](../hardware-design/hardware-interface)
* 使用 USB A to C 电缆将 ROCK 5B USB C 接口插入电脑，绿色 LED 灯应亮起
* 检查电脑 "设备管理器 "中是否有新的 USB 设备，如果有，说明 ROCK 5B 已激活。如果没有，请尝试其他 USB 端口，我们建议将 ROCK 5B 连接到电脑的后面板。

### 问题二： 我的 ROCK 5B HDMI 不能显示任何内容

* 您可以在 /boot/extlinux/extlinux.conf 中手动添加 HDMI 分辨率和帧速率
* 只需在附加行中添加 video=1920x1080@60（只需将分辨率和帧频改为显示器支持的分辨率即可）

### 问题三： Radxa APT 公钥不可用

当我尝试运行 apt update 时，得到以下错误信息：

```
root@rock-5b:~# apt update
Hit:1 http://security.debian.org/debian-security bullseye-security InRelease   
Hit:2 http://httpredir.debian.org/debian bullseye InRelease                    
Get:3 http://apt.radxa.com/bullseye-stable bullseye InRelease [2362 B]
Hit:4 http://httpredir.debian.org/debian bullseye-updates InRelease
Hit:5 http://httpredir.debian.org/debian bullseye-backports InRelease
Err:3 http://apt.radxa.com/bullseye-stable bullseye InRelease
  The following signatures couldn't be verified because the public key is not available: NO_PUBKEY 9B98116C9AA302C7
Reading package lists... Done
W: GPG error: http://apt.radxa.com/bullseye-stable bullseye InRelease: The following signatures couldn't be verified because the public key is not available: NO_PUBKEY 9B98116C9AA302C7
E: The repository 'http://apt.radxa.com/bullseye-stable bullseye InRelease' is not signed.
N: Updating from such a repository can't be done securely, and is therefore disabled by default.
N: See apt-secure(8) manpage for repository creation and user configuration details.
```

原因是公钥已过期。您可以执行以下命令获取新的可用密钥。

```
sudo apt-get install -y wget
export DISTRO=bullseye-stable
wget -O - apt.radxa.com/$DISTRO/public.key | sudo apt-key add -
sudo apt-get update
```
