---
sidebar_position: 10
---

# Getting Started

The Radxa X series is a newly launched single-board computer series by Radxa, based on the X86 platform.

:::warning
The Radxa X2L doesn't come with a CMOS battery. For the first time power on, the BIOS initializes hardware setting, the red light is on. This will last about 1 minute then X2L will reboot, and the white light is on, and the BIOS boots normally. Without CMOS battery(Type: CR1220), the above will repeat.
:::

## Activate Onboard eMMC

** Skip if No Onboard eMMC **

- By default, the eMMC is not recognized. It needs to be activated using the eMMC Recovery Button.
- Before powering on, press and hold the eMMC Recovery Button, then insert the power plug to start the device. Release the eMMC Recovery Button once the display lights up.
- At this point, the power indicator will be red, indicating that the system can now recognize and access the eMMC module.

## Install OS

### Before Start

- Radxa X2L

- USB Flash Drive with at least 8 GB

- [Rufus Install](https://rufus.ie/)

- M.2 M Key NVMe SSD as the system drive

- Ubuntu / Windows 10 ISO

- PC Host

- Display that supports HDMI interface

- Mouse and keyboard with USB support

- Power adapter with PD protocol support
  :::tip
  Radxa Recommends [Radxa Power PD30W](/accessories/pd_30w)。
  :::

### Burning ISO to USB Drive

- After downloading and installing Rufus, open the program. Next, insert the USB flash drive into the computer, and then choose the corresponding USB drive from the Rufus device list. Finally, select the ISO file you want to burn to demonstrate the burning process for Windows 10, with the burning process for Ubuntu being the same.

![install_rufus](/img/x/x_rufus.webp)

- After clicking Start, please wait patiently for the burning process to finish. If the burning is unsuccessful, try the operation again or switch to another USB flash drive.

### Operation Before Burning

- Gently insert the NVMe SSD into the corresponding M.2 M Key slot, and secure it in place using M2 x 4 flat-head screws.

![install_ssd](/img/x/x_ssd.webp)

- Insert the USB drive, which has already been burned, into the USB port.

![install_usb1](/img/x/x_usb1.webp)

- Connect the display to the motherboard using an HDMI cable.

![install_hdmi](/img/x/x_hdmi.webp)

- Plug in the mouse and keyboard.

![install_usb2](/img/x/x_usb2.webp)

### Install OS

- Power on and start the system, then follow the process to install the image.

![install_win1](/img/x/x_win10_01.webp)

![install_win1](/img/x/x_win10_02.webp)

![install_win1](/img/x/x_win10_03.webp)

## Install Driver

### Radxa X2L

- Please refer to [Install Driver](/x/x2l/driver)

## BIOS Setting

- Please refer to [BIOS Setting](/x/x2l/bios)

## Use of accessories

### Heatsink 9010A

- Please refer to [Heatsink 9010A](/x/x2l/accessories/heatsink-9010a)

### Wireless Module

- Please refer to [Wireless Module](/x/x2l/accessories/wireless-module)

## Hardware Information

- Please refer to [Hardware Information](/x/x2l/hardware/hardware-info)
