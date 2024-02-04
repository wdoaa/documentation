---
sidebar_position: 2
---

# Preparation

## Required Cables

** Radxa ROCK S0 must be configured with a specialized cable in order to be used. **

### Wire Signal Definition

#### USB OTG / HOST Signal Definition

| color | signal |
| ----- | ------ |
| red   | 5V     |
| white | USB_DM |
| green | USB_DP |
| black | GND    |

#### 100Mbps Ethernet Signal Definition

| color | signal |
| ----- | ------ |
| red   | RXN    |
| green | RXP    |
| white | TXN    |
| black | TXP    |

![rocks0 sequence](/img/rockpi/s0/rock-s0-signal-sequence.webp)

### USB OTG Cable

Radxa 4P to USB-A Male Cable is a 4-Pin MX1.25mm to Male USB cable that can be connected to a 5V adapter to power the rock s0 or directly to a host computer for communication.

![rocks0 otg](/img/rockpi/s0/rocks0-otg-wire.webp)

### USB HOST Cable

Radxa 4P to USB-A Female Cable is designed for use with the 4-Pin MX1.25mm to Female USB cable, which provides the rock s0 with an interface to a usb device.

![rocks0 usb](/img/rockpi/s0/rocks0-usb-wire.webp)

### 100Mbps Ethernet Cable

Radxa 4P to Ethernet Adapter Cable is designed for use with the 4-Pin MX1.25mm to Ethernet cable, which connects the rock s0 to a 100Mbps Ethernet network.

![rocks0 eth](/img/rockpi/s0/rocks0-eth-wire.webp)

## Development preparation

### Power supply

The Radxa ROCK S0 is powered by [4 Pin USB 2.0 OTG port](/img/rockpi/s0/rocks0-otg-wire.webp), which supports 5V input only.

### Boot Media

microSD card, capacity not less than 8GB, for system boot disk

### microSD card reader

Used to create system boot disk

### Network connection

ROCK S0 has a Wi-Fi module on board, you can access the network via Wi-Fi or via [Ethernet](/img/rockpi/s0/rocks0-eth-wire.webp).

### USB to TTL serial port

[Serial cable](/rockpi/rocks0/low-level-dev/serial.md) is used to input debugging commands.

## FAQ

## Notes

## Reference

[Supported Accessories](... /accessories)
