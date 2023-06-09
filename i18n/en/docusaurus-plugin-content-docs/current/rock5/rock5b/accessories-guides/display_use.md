---
sidebar_label: '8/10 inch Display Screen Tutorial'
sidebar_position: 3
---

# 8/10 inch Display Screen Tutorial

![显示屏安装-01](/zh/img/rock5b/display-8hd-01.png)
![显示屏安装-02](/zh/img/rock5b/display-8hd-02.png)

- Prepare Radxa Display 8HD or Radxa Display 10HD, and connect to ROCK5B through FPC cable.
- After startup, add a line to the end of the file /boot/config.txt
```
dtoverlay=rock-5b-radxa-display-8hd
# or
dtoverlay=rock-5b-radxa-display-10hd
```
- Execute the command with root authority, and then restart the device.
```
$ sudo su
# update_extlinux.sh
# reboot
```