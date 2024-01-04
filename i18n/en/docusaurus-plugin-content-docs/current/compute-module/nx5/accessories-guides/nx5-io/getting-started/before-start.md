---
sidebar_position: 15
---

# Getting Started with NX5 IO

![nx5_nx5io](/img/nx5/nx5-io/nx5_io_with_module_main.webp)

## Preparing for the start

- NX5
- NX5 IO

eMMC as a system disk:

- One micro USB to typea USB connector cable ![10 10](/img/nx5/others/typea2micro.webp).

MicroSD card as system disk：

- microSD card, greater than 8GB (recommended class 10 or higher)
- Card reader: for burning the image to a microSD card

- Power supply

  - The NX5 IO is powered by a DC interface with an input voltage of 5V.
    The official Radxa Power PD 30W is recommended. ![Radxa Power PD 30W](/img/accessories/pd-30w.webp) ![typec2dc5v](/img/nx5/others/typec2dc5v.webp).

- USB keyboard and mouse

  - The NX5 IO is equipped with four USB-A 3.0 ports for a full-size keyboard and mouse.

- Monitor and HDMI/DP cable

  - The NX5 IO is equipped with a full-size HDMI/DP connector, allowing the use of displays that support the HDMI/DP connector.
  - HDMI EDID is used to determine the optimal display resolution. On monitors and TVs that support 1080p (or 4K/8K), this resolution will be selected. If 1080p is not supported, the EDID will find the next available resolution. This selected mode applies to most monitors/TVs, but not all!

- USB to TTL Serial Cable

  - The NX5 IO outputs a dedicated serial console for the CPU to access low-level debug messages.
  - Recommended Radxa USB to TTL Cable ![USB to TTL Cable](/img/accessories/usb-ttl.webp).

## Available Options

- Ethernet cable (network cable)

  - NX5 IO supports Ethernet Internet access
  - Network cable for connecting the NX5 IO to the local network and the Internet

- camera module

  - The NX5 IO supports the photo function.
  - Currently supports IMX219 (other camera modules are being adapted)

- WiFi/Bluetooth card
  - NX5 IO Supports common PCIE protocol wireless modules on the market
  - Recommended Radxa Wireless Module A8
    ![Radxa Wireless Module A8](/img/accessories/a8-module-01.webp).

## Burning Method Selection

Please refer to the system installation tutorial
&emsp;[System Installation](/compute-module/nx5/install_os.md)

## starter board

Use eMMC as the system disk, after burning the system, you can directly power on the system.

The following uses a microSD card as the system disk:

- Now insert the storage medium μSD Card with mirror image into the slot on the development board.

- (Optional) Use a USB to TTL serial cable, see `Serial Port Access` below.

- Power up the NX5 IO via the adapter.

- The NX5 IO will start with the green power LED on. After a while the other blue LED starts to flash.

### Login to NX5 IO

- Default User Password

```bash
User Name : radxa
Password  : radxa
# or
User Name : rock
Password  : rock
```

- Switch to the root user

```bash
rock@rock-nx5-io:~$ sudo su
[sudo] password for rock:
root@rock-nx5-io:/home/rock#
```

- The root user has no password by default. You can set the password with "passwd root".

```bash
root@rock-nx5-io:/home/rock# passwd root
New password:
Retype new password:
passwd: password updated successfully
root@rock-nx5-io:/home/rock#
```

#### HDMI Monitor and Mouse Keyboard

- Plug in the HDMI cable and mouse keyboard as shown in the figure

#### serial port access

- [serial port access](../../../low-level-dev/serial)

#### SSH access

- [SSH access](/radxa-os/config/ssh-access.md)

### file transfer

#### SCP

scp Command Format

- Options: Commonly -r transfers folders
- Source address: The location of the file on the host.
- Destination address: the location where the file needs to be uploaded to NX5 IO.
- User name: User name of NX5 IO, default: rock.
- IP Address: This is the IP address of NX5 IO, please fill in according to the actual situation.

```bash
scp options source address username@IP address:destination address
```

:::tip
For more information about scp commands, please refer to the man manual.
:::

### Ethernet connection

- Viewing Network Configuration

```bash
sudo ifconfig
```

- Test network

```bash
ping -c 5 www.bing.com
```

### WIFI&BT Connection

- [WIFI_BT Support and Usage Tutorials](/accessories/wireless-a8).

### LED status

The NX5 IO has a power LED and a user LED.

- Power LED
  The Power LED is green. It is always on when the NX5 IO is powered on by default.

- User LED (customizable)
  The User LED is blue. By default, its blinking status indicates the running kernel.

### GPIO Functional Description

The NX5 IO has one 40-pin expansion connector. Each pin is color-coded. For more information, please refer to the **GPIO** introduction page of the corresponding motherboard.

### Shutdown and Reboot

- Shutting down immediately

```bash
sudo shutdown -h now
```

- Reboot command

```bash
sudo reboot
```
