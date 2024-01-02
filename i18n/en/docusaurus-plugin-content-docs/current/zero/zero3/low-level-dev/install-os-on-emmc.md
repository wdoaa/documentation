---
sidebar_position: 1
---

# Install OS on eMMC

## Preparation

## Image download

## Enter Maskrom Mode

<Tabs queryString="maskrom">
<TabItem value="ZERO 3W">

![ZERO 3W Overview](/img/zero/zero3/radxa_zero_3w.webp)

How to enter Maskrom mode on Radxa ZERO 3W

1. Remove the micro SD card and power cable
2. Press and hold the Maskrom button on the back of the
3. Connect the USB of PC host via USB-A to USB-C cable, if the green light of the power supply is always on, it will enter the Maskrom mode successfully

</TabItem>
<TabItem value="ZERO 3E">

![ZERO 3E Overview](/img/zero/zero3/radxa_zero_3e.webp)

How to enter Maskrom mode on Radxa ZERO 3E

1. Remove the micro SD card and power cable
2. Connect the USB of PC host via USB-A to USB-C cable, if the green light of the power supply is always on, it will enter the Maskrom mode successfully

</TabItem>
</Tabs>

The OTG interface on the Radxa ZERO 3 is TYPE-C, which allows communication between the host computer and the motherboard entering the Maskrom via a USB-C to USB-A cable.

In Maskrom mode, you can use the [Rockchip Development Kit](/general-tutorial/rksdk) to erase, wire-flash, etc. your product.

## Install OS on eMMC

[Windows Flash eMMC](/general-tutorial/rksdk/rkdevtool.md)

[Linux Flash eMMC](/general-tutorial/rksdk/rkdeveloptool.md)

## Boot the system
