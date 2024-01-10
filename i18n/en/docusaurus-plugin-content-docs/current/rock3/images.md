---
sidebar_position: 2
---

# Images Download

The Radxa team developed RadxaOS as the official operating system based on Debian.

If you want to try other images, please check [Third-party images](#third-party-images).

:::note
Note: Many third-party images have not been officially tested and may have some problems.
:::

:::tip
Tip: We will publish relevant information about each version release in [Raxa Forum](https://forum.radxa.com/).
:::

## Official Images

<Tabs queryString="model">
<TabItem value="ROCK 3A">

## ROCK 3A

### Official image

The following systems have been officially tested and verified by Radxa:

ROCK 3A: [Build 25](https://github.com/radxa-build/rock-3a/releases/download/b25/rock-3a_debian_bullseye_xfce_b25.img.xz)

For more images, please check: [ROCK 3A radxa-build](https://github.com/radxa-build/rock-3a/releases/latest)

### release notes

### Other alternative systems

#### Android

ROCK 3A is currently using Android 11, you can download the image from the following link:

[ROCK 3A Android 11](https://dl.radxa.com/rock3/images/android/rock3a-android11-20220408_1204-gpt.img.xz)

Additional information:

[Radxa Android Manifests](https://github.com/radxa/manifests)

[ROCK 3A Android 11 Installation Guide](https://wiki.radxa.com/Rock3/install/usb-install)
</TabItem>
<TabItem value="ROCK 3B">

## ROCK 3B

### Official image

The following systems have been officially tested and verified by Radxa:

ROCK 3B: [Build 18](https://github.com/radxa-build/rock-3b/releases/download/b18/rock-3b_debian_bullseye_xfce_b18.img.xz)

For more images, please check: [ROCK 3B radxa-build](https://github.com/radxa-build/rock-3b/releases/latest)

</TabItem>
<TabItem value="ROCK 3C">

## ROCK 3C

### download

The following systems have been officially tested and verified by Renesas:

ROCK 3C: [Build 38](https://github.com/radxa-build/rock-3c/releases/download/b38/rock-3c_debian_bullseye_xfce_b38.img.xz)

### release notes

[ROCK 3C Debian 11 version release notes](https://forum.radxa.com/t/230428-system-release-notice-for-rock-3c/16282)

</TabItem>
<TabItem value="E25">

coming soon ...

</TabItem>
</Tabs>

## Third-party Images

| System                                                                                                                                        | Download                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Version Information                                                                                                                                                                                      |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [![Armbian](/img/third-party-images-pic/Armbian.webp)](https://discord.com/channels/855634073376260096/888960277788393553/912495051010084895) | [Armbian](https://www.armbian.com/rock-3a/)                                                                                                                                                                                                                                                                                                                                                                                                                                          | Build 2021-11-23.<br/>User_name : pi , passward : armbian<br/>[Discord Discussion Group](https://discord.com/channels/855634073376260096/888960277788393553/912495237748899851)                          |
| [![Crux](/img/third-party-images-pic/Crux-logo.webp)](http://dl.slarm64.org/crux/images/rock_3/)                                              | [CRUX-ARM](https://dl.slarm64.org/crux/images/rock_3/crux-arm-3.6-aarch64-core-rock_3-6.0.6-build-20221029.img.zst)                                                                                                                                                                                                                                                                                                                                                                  | Build 2022-10-29.<br/>[README.TXT](http://dl.slarm64.org/slackware/images/rock_3a/README.TXT)<br/>[Forum Discussion Group](https://forum.radxa.com/t/rock-3-crux-arm-aarch64/7183)                       |
| [![Manjaro](/img/third-party-images-pic/Manjaro-Logo.webp)](https://manjaro.org/download)                                                     | [Manjaro Software Release](https://github.com/manjaro-arm/rock3-a-images/releases)                                                                                                                                                                                                                                                                                                                                                                                                   | Manjaro Product [Installation Guide](https://manjaro.org/)<br/>[Discord Discussion Group](https://discord.com/channels/855634073376260096/866316562520473600/916175047390003270)                         |
| [![Slarm64](/img/third-party-images-pic/Slarm64-logo.webp)](http://dl.slarm64.org/slackware/images/rock_3a/)                                  | [Slarm64 Core ( unofficial slackware )](https://dl.slarm64.org/slackware/images/rock_3/slarm64-current-aarch64-core-rock_3-6.2.0-build-20230305.img.zst)<br/>[Slarm64 Server ( unofficial slackware )](https://dl.slarm64.org/slackware/images/rock_3/slarm64-current-aarch64-server-rock_3-6.2.0-build-20230305.img.zst)<br/>[Slarm64 XFCE (unofficial slackware)](https://dl.slarm64.org/slackware/images/rock_3/slarm64-current-aarch64-xfce-rock_3-6.2.0-build-20230305.img.zst) | Build 2023-03-05.<br/>[README.TXT](http://dl.slarm64.org/slackware/images/rock_3a/README.TXT)<br/>[Forum Discussion Group](https://forum.radxa.com/t/rock-3-slarm64-aarch64-unofficial-slackware/7167/7) |
| [![Community](/img/third-party-images-pic/Community-logo.webp)](https://wiki.radxa.com/rock3/downloads/community_built_images)                | **Community Image**                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | **Compiled and Contributed by Community Members**                                                                                                                                                        |
| Ubuntu 22.04                                                                                                                                  | ROCK 3A: [ubuntu22.04_rk3568_rock3a_kernel5.10.66-20220523_beta3.zip](https://github.com/qxhome/rk3568-kernel5.10-alldrivers/releases/download/ubuntu22.04-kernel5.10-rk3568-rock3a-alldrivers-beta3/ubuntu22.04_rk3568_rock3a_kernel5.10.66-20220523_beta3.zip)                                                                                                                                                                                                                     | Contributor： [QXhome](https://forum.radxa.com/t/image-rock3a-kernel-5-10-66/10061)                                                                                                                      |
| OpenWRT                                                                                                                                       | ROCK 3A: [openwrt-rockchip-armv8-radxa_rock-3a-squashfs-sysupgrade.img.gz](https://github.com/mj22226/openwrt/releases/latest/)                                                                                                                                                                                                                                                                                                                                                      | Contributor： [Marty Jones](https://github.com/mj22226)                                                                                                                                                  |
