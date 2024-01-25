---
sidebar_position: 1
---

# Install the system to EMMC

## Preparation

- 1x [OTG cable](/rockpi/rocks0/accessories/rocks0-wire.md)
- 1x 5V power adapter

## Image Download

Please go to [Download Summary](/rockpi/rocks0/getting-started/download.md) to download the corresponding image file.

## Enter Maskrom mode

![ROCK S0 Overview](/img/rockpi/s0/mark_rock_pi_s0.webp)

How to enter Maskrom Mode of Radxa ROCK S0

1. Disconnect the microSD card and power.
2. Press and hold the Maskrom button on the front of the device.
3. Connect the OTG cable to the USB of the host PC, if the green light of the power supply is always on, it will enter the Maskrom mode successfully.

In Maskrom mode, you can use [rkdevtool](rkdevtool) or [upgrade-tool](upgrade-tool) to erase, wire-flash, etc. your product.

## Install the system to eMMC

[Installation for Windows](rkdevtool)

[Linux installation](rkdeveloptool)

## Boot the system

- Use the OTG cable to connect the board's [4 Pin USB 2.0 OTG port](/rockpi/rocks0/getting-started/overview.md) to the power adapter, and then the system will start booting up with a blinking green light.

## FAQ
