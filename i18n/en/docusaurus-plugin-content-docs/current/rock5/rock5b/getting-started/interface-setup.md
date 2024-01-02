---
sidebar_position: 17
---

# Interface Usage

If you are using the ROCK 5B for the first time, please familiarise yourself with the [peripheral interface](../hardware/hardware-details) of the ROCK 5B so that you can better understand what is to follow.

## Interface Connection Guide

![rock5b_01](/img/rock5b/rock5b-interface-1.webp)

- **USB Interface**

The ROCK 5B offers two USB 2.0 and two USB 3.0 ports.

- **Ethernet Port**

If you are using Ethernet wired internet access,
plug the cable into the RJ45 port on the ROCK 5B and the system desktop will pop up with a wired connection.

- **HDMI**

The ROCK 5B has two HDMI output ports, both supporting CEC and HDMI 2.1, with resolution support up to 8Kp60 and 4Kp60 respectively, and its Type-C connector can also support video output.  
In addition, the ROCK 5B has one HDMI input port, which supports HDMI 2.1 input with a resolution of 4Kp60.

:::caution
Note: Before using, please check the HDMI cable connector type.
:::

- **Power**

The power connector for the RACK 5B is a Type-C connector and Radxa recommends using [Radxa Power 30W](/accessories/pd_30w) to ensure that the unit is operational.

- **Headphone**

The ROCK 5B offers a 3.5mm headphone jack, so you can connect headphones or speakers to the headphone port of the ROCK 5B.

- **M.2 Interface**

The ROCK 5B is supplied with two M.2 connectors:

- The board has an M.2 E Key connector with 2230 specification, providing PCIe 2.1 single channel, USB, SATA, SDIO, PCM and UART signals and supporting industry standard M.2 WiFi 6 modules.  
  If you want to access the internet via a wireless module, Radxa recommends the [Radxa Wireless A8](/accessories/wireless-a8).
  The Radxa Wireless A8 has an M.2 2230 E port and can be installed on the M.2 E port of the ROCK 5B and set up for a wifi network.
  Please refer to [network settings](/radxa-os/config/network.md) for details.

![rock5b_01](/img/rock5b/rock5b-use-wireless.webp)

- On the back of the board there is an M.2 M Key connector with a 4-lanes PCIe 3.0 interface.
  A standard M.2 2280 connector on the board allows for deployment of M.2 2280 NVMe SSDs.  
  **<font color='red'>Note: This M.2 interface does not support M.2 SATA SSDs。</font>**

![rock5b_01](/img/rock5b/rock5b-use-ssd.webp)

- **TF Card**

The microSD card slot is located on the back of the ROCK 5B.
When installing the microSD card take care that the pins of the microSD card are close to the surface of the PCB.
Make sure that the orientation is not reversed as shown in the diagram for reference.  
![rock5b_01](/img/rock5b/rock5b-interface-2.webp)

- **eMMC Module**

The ROCK 5B provides a high speed B2B connection port for the eMMC, which can be used for operating systems and data storage.
For installation, align the missing corners of the module with the patterned area on the PCB as shown in the figure:  
![rock5b_01](/img/rock5b/rock5b-interface-3.webp)
