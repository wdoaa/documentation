---
sidebar_position: 1
---

# Getting Stared

## What you need

### Required

- Radxa Zero main board
- Storage media:
  - Built-in eMMC module, or
  - A microSD card that is at least 8GB if your board doesn't have an eMMC module. You can confirm this by checking if there is a big chip soldered on the bottom side of the board.
    For desktop usage we recommended at least 16GB, preferably 32GB.
- USB-C hub
  - Radxa Zero comes with one USB 3.0 Type-C port, located on the top side and is close to the center of the board. This port can be expanded into multiple USB 3.0 Type-A ports as well as Ethernet via USB Type-C Hub. No HDMI or DisplayPort Alternate Mode was implemented on this port, so you won't get video output even if your USB-C hub has those connectors.
- USB Keyboard and Mouse
  - Once a USB-C hub is connected, Radxa Zero can be controlled with a full sized keyboard and mouse.
- Monitor and HDMI Cable
  - Radxa Zero is equipped with a micro HDMI connector. A micro HDMI (Type-D) to HDMI (Type-A) cable is required. HDMI capable monitor/TV is recommended.
  - HDMI EDID display data is used to determine the best display resolution. On monitors and TVs that support 1080p (or 4K) this resolution will be selected. If 1080p is not supported the next available resolution reported by EDID will be used. This will work with MOST but not all monitor/TVs.
- USB A to C or USB C to C cable
  - The USB cable is used for powering the Radxa Zero as well as data transmission from your host PC to the Zero. Depending on host PC's USB port, you may need USB A to C(host PC is USB-A) or USB C to C(host PC is USB-C) cable.
- microSD Card Reader (required for configuration without built-in eMMC)
  For flashing the image into microSD Card.

### Optional

- Power supply
  - Yes, power supply is optional for Radxa Zero since the power consumption is so low it can be powered directly from host PC's USB port.
    If you plan to use Zero independently from PC, you can use any 5V USB power supply with at least 1A output.
    If you do power the Zero from host PC's USB port, make sure it is a USB 3.0 port so it can provide up to 900mA power. Old USB 2.0 port can only provide up to 500mA.
- USB to TTL serial cable
  - This is needed if you intend to use serial console.

## Write Image

### Flash image to microSD card

1. Download the [offial image](/zero/images)。
2. Refer to the [Operating System Installation Guide](install-os) to overwrite the image to the storage media.

### Flash image to eMMC

1. Download the [offial image](/zero/images).
2. Refer to the [How to erase eMMC](/zero/zero/erase-emmc)
3. Refer to the[Maskrom](/zero/zero/maskrom)，and enable maskrom mode
4. Refer to the method above that `Flash image to microSD card` to flash image to eMMC.
