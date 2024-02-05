---
sidebar_position: 5
---

# Radxa M.2 E Key to SATA Board Tutorial

ROCK 5B has an M.2 E-Key, supports PCIe 2.1 1-lanes, SATA, SDIO, UART.

It can use breakout board to make M.2 E-key into SATA.

## Prepare

- ROCK 5B
- M.2 E key to SATA breakout board
- SATA cable

![M.2-SATA-01](/zh/img/rock5b/m2-sata-01.webp)
![M.2-SATA-02](/zh/img/rock5b/m2-sata-02.webp)

## Hardware Connection

SATA power cable, yellow is 12V, red is 5V, black is GND.

1. If you use SSD. Need to use 5V power from 40pin. as the picture shows:

![M.2-SATA-03](/zh/img/rock5b/m2-sata-03.webp)

2. If you use a hard drive. Requires 12V and 5V power supplies. In the picture, the digital power supply is used to supply 12V, and the 5V power supply in 40pin is used.
   ![M.2-SATA-04](/zh/img/rock5b/m2-sata-04.webp)

## Software Configuration

- Add the following command in /boot/config.txt

```
dtoverlay=rock-5b-sata
```

- Switch root to execute commands

```
sudo su
update_exlinux.sh
reboot
```

- After restarting the device, use `lsblk` to view your hard disk device.

```
rock@rock-5b:~$ lsblk
NAME         MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
sda            8:48   0 149.1G  0 disk
mmcblk1      179:0    0  14.6G  0 disk
├─mmcblk1p1  179:1    0   512M  0 part
└─mmcblk1p2  179:2    0  14.1G  0 part /
mmcblk1boot0 179:32   0     4M  1 disk
mmcblk1boot1 179:64   0     4M  1 disk
```

- You can test read and write speeds with the dd or fio commands, but only if you protect your data.
