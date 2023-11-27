# FAQ

## The same system can start on old hardware but runs abnormally on new hardware.

Our products are subject to fluctuations in the market environment during production, and the bill of materials of our products are updated from time to time. Sometimes, such updates would involve important components such as memory, eMMC, wireless modules, etc.

Since the old system cannot anticipate these future hardware changes, its software components naturally lack support for these new hardware variants, thus leading to the above mentioned operational anomalies.

We recommend that you reconfigure your system based on our latest release when changing hardware versions to ensure optimal software compatibility.

If you are unable to reconfigure your system, you can perform a full backup of your system (e.g., generating a disk image) before system migration, and then perform a [system update](/radxa-os/rsetup#system-update) and a [bootloader update](/radxa-os/rsetup#update-bootloader). This also ensures that your system contains the latest hardware support.

:::caution
If your system does not come with `rsetup` pre-installed, the system you are currently using is at the end of its product life and no more system updates will be available. This also means that the system you are currently using will not support future hardware versions.

We _strongly recommend_ that you migrate to the latest RadxaOS to get full product support.

We will provide workarounds for some of the more common problems here, but this **does NOT mean that we endorse** continued use of an EoL system.

::::warning
If your system contains `rsetup`, please strictly follow the instructions in the previous section. Performing the below workarounds on the latest RadxaOS may result in system anomalies, or even data loss!
::::

<details><summary>ROCK 4A/B fails to start, final output from serial console is "ERR"</summary>

### Phenomenon

- The serial console's final output is similar to the following:

```
channel 0 training pass!
channel 1 training pass!
change freq to 800MHz 1,0
Channel 0: LPDDR4,800MHz
Col error!!!
Cap error!
Channel 1: LPDDR4,800MHz
Bus Width=32 Col=10 Bank=8 Row=16 CS=1 Die Bus-Width=16 Size=1536MB
no stride
read addr 0x1000000 = 0x20000000
ERR
```

- Your system indicates it is using `U-Boot 2017.09` on the serial console during a successful boot:

```
U-Boot 2017.09-2700-g70b4cfe057 (Jun 05 2021 - 07:28:02 +0000), Build: jenkins-linux-build-release-604

Model: Radxa ROCK Pi 4B
PreSerial: 2
DRAM:  3.9 GiB
```

- Your affected product uses Micron memory.

### Cause

Older versions of `U-Boot` do not support Micron memory and cannot initialize the hardware.

### Affected versions

The following `U-Boot` versions have been tested by Radxa and confirmed to be incompatible with Micron memory:

- `2017.09-00026-g2431fa34678 (Feb 14 2022 - 21:41:40 +0800)`
- `2017.09-2700-g70b4cfe057 (Jun 05 2021 - 07:28:02 +0000)`

::::caution
This is a non-exhaustive list. If you find another affected version or memory model, please send it to us via the `Edit this page` at the bottom.
::::

### Workaround

You can update the `U-Boot` memory initialization code within your existing system image or system installation device with the following command. This command can also be executed within ROCK 4A/B after it is booted normally.

Replace the parameter used by the last command to the storage target you want to update.

```bash
curl https://dl.radxa.com/rockpi4/troubleshooting/rock-4ab-uboot-2017-idbloader.tar.gz | tar xzv
sudo ./setup.sh update_idbloader ___/dev/sdX_or_/dev/mmcblkX_or_system.img___
```

</details>
:::
