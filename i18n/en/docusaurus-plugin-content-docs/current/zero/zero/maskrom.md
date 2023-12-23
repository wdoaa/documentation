---
sidebar_position: 30
---

# Maskrom Model

This guide describes how to enter maskrom mode on Radxa Zero. Maskrom mode is a special boot mode for Radxa Zero. In this mode CPU will not boot off eMMC or microSD but will instead side load binaries from USB OTG port. This allows you to perform many low level maintenance tasks.

## Requirement

- Radxa Zero
- A PC/laptop running Windows, Linux, or macOS
- USB A to C cable or C to C cable, depending on your host

## Enable maskrom

First locate the USB boot button on the bottom of Zero:

![Zero_usb_boot](/img/zero/zero/Zero_usb_boot.webp)

Hold this button, then plug Zero into your computer. You can let go the button when you see power LED is on.

On Windows, you can open Device Manager and find the device:
![Windows-GX-CHIP](/img/zero/zero/Windows-GX-CHIP.webp)

## Install required tools

Download and install [Zagdig](https://zadig.akeo.ie/) for USB device driver. Make sure that the device is `GX-CHIP`, USB ID is `1B8E:C003` and choose **libusb-win32**, then click **Install Driver**. if there not show the device as flow, please select `Options`->`List All Devices`.

![Zagdig-libusb](/img/zero/zero/Zagdig-libusb.webp)

RZ USB Boot Helper is a Windows tool made by Radxa for maskrom sideloading. Download it from [Radxa DL](https://dl.radxa.com/zero/tools/windows/RZ_USB_Boot_Helper_V1.0.0.zip) and unzip everything to a convenient location.

The tool will list the current mode on its interface. Right now we have Maskrom mode:

![Rz-usb-helper-maskrom](/img/zero/zero/Rz-usb-helper-maskrom.webp)
