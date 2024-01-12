---
sidebar_position: 3
---

# Getting Started

ROCK 3A features a quad core Cortex-A55 ARM processor, 32bit LPDDR4 memory,
up to 4K@60 HDMI, MIPI DSI, MIPI CSI, 3.5mm jack with mic, USB Port, GbE LAN,
PCIe 3.0, PCIe 2.0, 40-pin color expansion header, RTC. Also, ROCK 3A supports USB PD and QC powering.

## Annotation Diagram

![ROCK 3A Overview](/img/rock3/rock3a-interfaces.webp)

<details>

<summary>Maskrom Mode</summary>

The OTG interface of ROCK 3A is located on the upper USB 3.0 port, and can be used to communicate with the host computer and the board in Maskrom via the USB-A to USB-A cable.
In Maskrom mode, you can use [rkdevtool](low-level-dev/rkdevtool) or [upgrade-tool](low-level-dev/upgrade-tool) to operate your product.

The following are the steps for the ROCK 3A to enter Maskrom mode:

1. Shutdown and disconnect the power supply.
2. Connect the Maskrom pin, which is located next to the 40 pin GPIO connector.
3. Plug in the power cable and power up, if the power green light is always on, then the ROCK 3A has successfully entered the Maskrom mode.
4. Connect the OTG port of the board to the USB port of the host PC via the USB-A to USB-A cable to achieve communication.

</details>

## Features

|            Model            | ROCK 3 Model A                                                                                                                                                                                     |
| :-------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SoC<br/>CPU<br/>GPU<br/>NPU | **RK3568**<br/>Quad-core Cortex-A55, frequency 2Ghz<br/>Mali G52<br/>0.8TOPS NPU                                                                                                                   |
|           Memory            | 2/4/8GB LPDDR4 3200MT/s, up to 1560MHz                                                                                                                                                             |
|           Storage           | eMMC<br/>microSD card (microSD slot supports up to 128 GB microSD card)<br/>M.2 SSD (M.2 connector supports up to 8TB M2 NVME SSD)                                                                 |
|           Display           | HDMI 2.0 up to 4k\*2k@60                                                                                                                                                                           |
|            MIPI             | DSI 2 lanes via FPC connector<br/>Any two of HDMI, MIPI DSI can work at the same time, support mirror mode or extend mode                                                                          |
|            Audio            | 3.5mm jack with mic<br/>HD codec that supports up to 24-bit/96KHz audio                                                                                                                            |
|           Camera            | MIPI CSI 2 lanes via FPC connector, support up to 8 MP camera                                                                                                                                      |
|          Wireless           | None on board. Optional [Radxa Wireless Module A8](/accessories/wireless-a8)                                                                                                                       |
|             USB             | USB 3.0 OTG X1, software([rsetup](/radxa-os/rsetup)) switch for host/device switch, upper one<br/>USB 3.0 HOST X1<br/>USB 2.0 HOST X2                                                              |
|          Ethernet           | GbE LAN with Power over Ethernet (PoE) support<br/>additional HAT is required for powering from PoE                                                                                                |
|             IO              | 40-pin expansion header                                                                                                                                                                            |
|            Power            | USB PD, support USB Type-C PD 2.0, 9V/2A, 12V/2A, 15V/2A, 20V/2A (Recommended)<br/>Qualcomm® Quick ChargeTM: Supports QC 3.0/2.0 adapter, 9V/2A, 12V/1.5A (Recommended)<br/>DC 5V/4A power supply |
|            Size             | 85mm x 56mm                                                                                                                                                                                        |

## Start-up guide

### Preparation items

- ROCK 3A
- One of the following storage media:  
   microSD card with a capacity of not less than 16GB  
   [eMMC module](/accessories/emmc_module) with a capacity of not less than 16GB
- Power adapter, recommended [Radxa Power PD 30W](/accessories/pd_30w):  
   ROCK 3A is powered by Type-C connector and supports PD power input.
- USB keyboard and mouse
- HDMI monitor and HDMI cable  
   The ROCK 3A is equipped with a full-size HDMI connector. HDMI-enabled monitors are recommended. Supports up to 4K@60 display.
- microSD card reader or eMMC card reader  
   For mirroring microSD cards or eMMC modules.

### System Installation

1. Select the [Official Image](/rock3/images) you want to use and download it. 2.

2. Refer to the [Operating System Installation Guide](install-os) to overwrite the image to the storage media.

3. Insert the system storage media: microSD card or eMMC module into the socket on the board and boot your product powered by the Type-C power adapter.

4. Connect the peripherals and start using [Radxa OS](/radxa-os).

If you already know the product well enough, you can also use the Direct Connection method to flash the device.

## Hardware info

### GPIO

[GPIO Definition](/rock3/rock3a/hardware/rock3a-gpio)

### Hardware Docs Download

[v1.3 schematic pdf](https://dl.radxa.com/rock3/docs/hw/3a/ROCK-3A-V1.3-SCH.pdf) - ROCK 3A Schematic file Download

[v1.3 2D Top&Bottom dxf](https://dl.radxa.com/rock3/docs/hw/3a/rock3a_v1.3_2d_dxf.zip) - ROCK 3A 2D CAD file Download

[v1.3 3D](https://dl.radxa.com/rock3/docs/hw/3a/rock3a_v1.3_3d_emn_emp.zip) - ROCK 3A 3D CAD file Download (.emn/.emp format)

[v1.3 CAM pdf](https://dl.radxa.com/rock3/docs/hw/3a/ROCK-3A-V1.3-SMD.pdf) - Components position reference file Download
