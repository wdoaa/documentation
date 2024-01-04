---
sidebar_position: 5
---

# Getting Started

This guide is designed for Radxa CM5 IO enthusiast. The purpose is to learn about Radxa CM5 IO as well as how to prepare and set up for basic use.  
When you get a board, you need to know what model it is and which hardware version it is. The information is printed in the top side of the board.  
We will introduce the board information as much as possible.

## Necessary

- Radxa CM5 IO board

- One of the Storage media below:  
  microSD card, at least 8GB.  
  Onboard emmc, capacity options: 8GB, 16GB, 32GB.

- Power Supply:  
  The Radxa CM5 IO is powered by a DC power connector, supporting 5V and 12V inputs, 12V is recommended for more stable power supply.

- USB Keyboard and Mouse  
  With three USB-A connectors, Radxa CM5 IO can be equipped with a full sized keyboard and mouse.

- Monitor and HDMI Cable  
  Radxa CM5 IO is equipped with a full sized HDMI connector. HDMI capable monitor is recommended.  
  Radxa CM5 IO supports resolutions up to 8K, as well as the usual 4K, 2K and 1080P resolutions.  
  Radxa CM5 IO is equipped with a full-featured typec interface. DP display is supported, as well as USB 3.0 devices.

- microSD Card Reader  
  For flashing the image to the microSD Card

## Optional

- USB type A to type A cable:  
  This is needed for fastboot/adb commands and the maskrom mode for advanced flashing.

- USB to TTL serial cable:  
  This is needed for [serial console](../low-level-dev/serial).

- Ethernet cable, PCIE interface wifi module
  Radxa CM5 IO supports Internet access via WIFI or Ethernet.  
  An Ethernet cable is used to connect your Radxa CM5 IO to a local network and the Internet.

- Camera Module  
  Radxa CM5 IO supports camera function.

- LCD Module  
  Radxa CM5 IO supports 2-lanes MIPI DSI display function.  
  :::tip
  The official recommendation is to use [Radxa Display 8 HD](/accessories/lcd-8-hd) or [Radxa Display 10 FHD](/accessories/lcd-10-fhd)
  :::

- Audio cable  
  Audio can be played through speaker or headphones using a standard 3.5mm jack.

## OS Installation

First, choose the [official image](/compute-module/images) that you want to flash and download it.

Then, flash the image to the storage media by referring the [OS Installation guide](/general-tutorial/os-installation).

Finally, insert the system storage media: microSD card into the socket on the motherboard and start the Radxa CM5 IO by powering it through the DC power adapter, or if the image is burned in EMMC, the Radxa CM5 IO can be started by powering it directly.
