---
sidebar_position: 40
---

# How to erase eMMC

This guide describes how to erase Radxa Zero series eMMC for installing a new system. Beware that this is not a secure erase, and only the bootloader and the partition header are wiped.

## Requirement

- Radxa Zero or Radxa Zero 2
- A PC/laptop running Windows, Linux, or macOS
- USB A to C cable or C to C cable, depending on your host

## How to

Follow [maskrom guide](/zero/zero/maskrom) to setup and load [radxa-zero-erase-emmc.bin](https://dl.radxa.com/zero/images/loader/radxa-zero-erase-emmc.bin)

![Rz-usb-helper-fastboot](/img/zero/zero/Rz-usb-helper-fastboot.webp)

Once your computer detects a new USB storage device, your eMMC will be wiped and you can flash to this newly found USB device.
