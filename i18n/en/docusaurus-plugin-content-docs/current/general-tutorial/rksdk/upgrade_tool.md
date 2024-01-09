---
sidebar_position: 3
---

import Loader from "../../common/general/\_loader.mdx"

# upgrade_tool

upgrade_tool is the software developed by Rockchip for USB flashing on Linux platform.

---

## Installation for upgrade_tool

Please download and extract the following file to install upgrade_tool:

- [upgrade_tool v2.1](https://dl.radxa.com/tools/linux/Linux_Upgrade_Tool_V2.1.zip)

## Usage for upgrade_tool

<Tabs queryString="mode">
<TabItem value="CLI" label="Command Line Mode">

upgrade_tool is used in command line mode similar to [rkdeveloptool](rkdeveloptool#uses-rkdeveloptool).

:::caution
In command line mode, upgrade_tool does not support the selection of a Maskrom device, nor can it select the storage media to be written to.

If you need to select a specific one from multiple devices, use [Interactive Mode](upgrade_tool?mode=Interactive).
:::

### View connected Maskrom devices

```bash
./upgrade_tool ld
```

### Write file

:::caution
upgrade_tool does not automatically decompress compressed files when writing to them.

First extract the used files and specify the extracted files in upgrade_tool.
:::

```bash
sudo ./upgrade_tool db <loader>
sudo ./upgrade_tool wl 0 <image>
```

Download links for the required Loader and Image files can be found below.

### SPI U-Boot and Loader

<Loader />

### Reboot device

```bash
sudo ./upgrade_tool rd
```

</TabItem>
<TabItem value="Interactive" label="Interactive Mode">

If upgrade_tool is executed without any arguments, it will automatically enter interactive mode.

This mode will first ask to select the device to be written to:

```bash
$ sudo ./upgrade_tool
Using /home/rock/Linux_Upgrade_Tool/config.ini
Program Log will save in the /root/upgrade_tool/log/
List of rockusb connected
DevNo=1 Vid=0x2207,Pid=0x350b,LocationID=21     Mode=Maskrom
DevNo=2 Vid=0x2207,Pid=0x350b,LocationID=22     Mode=Maskrom
DevNo=3 Vid=0x2207,Pid=0x350b,LocationID=23     Mode=Maskrom
Found 3 rockusb,Select input DevNo,Rescan press <R>,Quit press <Q>:
```

After selecting the device, upgrade_tool displays all commands available in the current mode. Thereafter the operation is similar to [command line mode](upgrade_tool?mode=CLI).

</TabItem>
</Tabs>

---

## Parallel Write

Since upgrade_tool blocks the current terminal when writing to a device, if you need to write to multiple devices at the same time, you need to execute upgrade_tool multiple times to create multiple interactive mode sessions.
