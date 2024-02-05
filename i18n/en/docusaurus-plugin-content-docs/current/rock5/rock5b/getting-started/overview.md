---
sidebar_position: 1
---

# ROCK 5B Overview

## Introduction

The Radxa ROCK 5B is an elegant single board computer (SBC) based on the RK3588 chipset.
Its compact size of 100 x 75mm covers almost all the features of the RK3588, offering excellent flexibility and scalability.
The ROCK 5B provides a solid basis for users such as geeks, single board computer enthusiasts, IoT enthusiasts and university teachers and students to turn their ideas into reality.
It has a wide range of applications in edge computing, artificial intelligence, cloud computing, intelligent surveillance and other areas.

ROCK 5B is available as:

- Personal Desktop Computers
- Personal Private Servers
- Android Video Player
- Robot Controller
- Blockchain Nodes

Other usage scenarios to be discovered

The ROCK 5B offers multiple memory options: 4GB, 8GB and 16GB LPDDR4x.

## Hardware Interface Overview

[![ROCK 5B](/img/rock5b/rock-5b-overview.webp)](../hardware/hardware-details)

**Note: The actual board layout or chip location may change over time, but the main connector types and locations will remain the same.**

### Maskrom Mode

To boot ROCK 5B into maskrom mode, try the following steps.

- Press and hold the **Maskrom Button (25)**
- Plug the USB Male A to Male C cable to ROCK 5B Type-C port, the other side to PC
- Confirm that ROCK 5B is in Maskrom mode .

```bash
#For macOS host:
	lsusb result
Output:Bus 000 Device 004: ID 2207:350b Fuzhou Rockchip Electronics Co., Ltd. Composite Device

#For Linux host:
	lsusb result
Output:Bus 001 Device 030: ID 2207:350b Fuzhou Rockchip Electronics Company

#For Windows host:
Open RKDevTool and you would see the device is in Found One MASKROM Device.
```

## ROCK 5B Specification Features

### Hardware Specifications

- Quad Cortex‑A76, frequency 2.2~2.4Ghz with quad Cortex‑A55, frequency 1.8Ghz
- Mali G610MP4 GPU, supports OpenGLES 1.1, 2.0, and 3.2, OpenCL up to 2.2 and Vulkan 1.2
- Build‑in NPU supports INT4/INT8/INT16/FP16 hybrid operation and computing power is up to 6TOPs
- 4GB/8GB/16GB 64bits LPDDR4x ram options
- Up to quad display via two HDMI, one DP(type C), one MIPI DSI
- H.265/VP9 (HEVC)/AVS2 hardware decode (up to 8Kp60)
- H.264 hardware decode (up to 8Kp30)
- H.265/H.264 hardware encode (up to 8Kp30)

### Interface Features

- 1x full function USB C port (supports USB PD power, DP Display up to 4Kp60, USB 3.0)
- 1x microSD Card
- 2x standard HDMI output ports, one supporting displays up to 8Kp60 resolution, one supporting up to 4Kp60
- 1x micro HDMI input port, supporting up to 4Kp60 display input
- 2x USB2 HOST ports
- 1x USB3 HOST port, 1x USB3 OTG port
- 1x 2.5 Gigabit Ethernet port (supports PoE with add‑on PoE HAT)
- 1x M.2 M Key with PCIe 3.0 4‑lanes support
- 1x M.2 E Key with PCIe 2.1 1‑lane, SATA, SDIO, UART support
- 1x eMMC module connector for eMMC 5.1 support
- 1x camera port (4‑lanes MIPI CSI)
- 1x display port (4‑lanes MIPI DSI)
- misc
  - 1x RTC battery connector
  - 1x PWM fan connector
  - 1x Power button
  - 1x Recovery button
  - 1x RGB power/status/user LED
  - 2x heatsink mounting holes
- 40x user GPIO supporting various interface options:(TODO)
  - 1 x UART
  - 2 x SPI bus
  - 2 x I2C bus
  - 1 x PCM/I2S
  - 1 x SPDIF
  - 1 x PWM
  - 1 x ADC
  - 6 x GPIO
  - 2 x 5V DC power in
  - 2 x 3.3V power pin

**Notice: For more GPIO information, please check [ROCK 5B GPIO](../hardware/rock5b-gpio).**

### Software

- ARMv8 Instruction Set
- Debian/Ubuntu Linux support
- Android 12 support
- RKNN NPU Software
- Hardware access/control libraries available for Linux/Android

### Mechanical Specification

![rock5b top size](/img/rock5b/rock-5b-size-top.webp)

![rock5b bottom size](/img/rock5b/rock-5b-size-bottom.webp)
