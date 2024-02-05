---
sidebar_position: 2
---

# WIFI & BT Tutorial

- ROCK 5B is not equipped with onboard WiFi/BT module, it needs an external module. It tested and supported[WIFI/BT卡](./support_accessories)
- The M.2 wireless module demonstrated here is: Radxa Wireless Module A8.
  ![Radxa Wireless Module A8](/zh/img/accessories/a8-module-01.webp)
- The installation is as shown in the figure:

![Radxa Wireless Module A8](/zh/img/accessories/a8-module-02.webp)

## WIFI Usage

1. First enter the ROOT user mode.

```
sudo su
```

2. Open WIFI

```
nmcli r wifi on
```

3. Scanning WIFI

```
nmcli dev wifi
```

1. Connect to wifi network

```
nmcli dev wifi connect "wifi_name" password "wifi_password"
```

## Bluetooth Usage

- When you use Radxa Wireless A8 Module, you must add the following blacklist to make BT work normally.

```
root@rock-5b:~# cat /etc/modprobe.d/blacklist.conf
blacklist pgdrv
blacklist btusb
blacklist btrtl
blacklist btbcm
blacklist btintel

root@rock-5b:~# reboot
```

- The Radxa APT includes the broadcom-wifibt-firmware package for Broadcom wireless modules and the intel-wifibt-firmware package for Intel wireless modules. The corresponding package needs to be downloaded.

```
root@rock-5b:~# apt-get update -y
root@rock-5b:~# apt-get install -y broadcom-wifibt-firmware intel-wifibt-firmware
```

1. Test the status of the Bluetooth module and check the Bluetooth device.

```
root@rock-5b:~# systemctl status bluetooth
```

2. Run the bluetooth device.

```
root@rock-5b:~# systemctl start bluetooth
```

3. Detect bluetooth devices

```
root@rock-5b:~# hciconfig
hci0:   Type: Primary  Bus: UART
       BD Address: 10:2C:6B:49:D5:53  ACL MTU: 1021:8  SCO MTU: 64:1
       UP RUNNING
       RX bytes:850 acl:0 sco:0 events:58 errors:0
       TX bytes:2814 acl:0 sco:0 commands:58 errors:0
```

4. Test: connect bluetooth speaker, first install pulseaudio

```
root@rock-5b:~# apt-get install -y pulseaudio-module-bluetooth pulseaudio
```

5. Run pulseaudio

```
root@rock-5b:~# pulseaudio --start
```

6. Connect using pulseaudio

```
root@rock-5b:~# bluetoothctl
[bluetooth]# default-agent
[bluetooth]# power on
[bluetooth]# scan on
[bluetooth]# trust 41:42:1A:8D:A9:65       #BT-280
[bluetooth]# pair 41:42:1A:8D:A9:65
[bluetooth]# connect 41:42:1A:8D:A9:65
```

7. Now you can listen to music.
