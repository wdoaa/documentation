---
sidebar_position: 3
---

# Remote login

Introduce how to access SBC through a personal computer (PC) via serial port, adb, etc.

## Serial Login

Serial login is a way to connect to the device through the serial port and log in to the backend of the device.
Radxa ZERO 3 series are equipped with a 40PIN connector, and system serial debugging is enabled by default on the 40 PIN connector.

:::tip
The default serial debugging baud rate is `1500000n8, no flow control`, please make sure the USB to TTL serial cable supports 1.5M baud.
:::.

![USB to TTL](/img/accessories/600px-Usb2ttl-cable-definition.webp)

- Wiring Method

Connect the USB to TTL serial cable as shown below:

| Radxa SBC       | Connections | Serial Cable |
| --------------- | ----------- | ------------ |
| **GND** (pin 6) | <---------> | black line   |
| **TX** (pin 8)  | <---------> | white wire   |
| **RX** (pin 10) | <---------> | green wire   |

![USB to TTL connected](/img/accessories/1000px-Serial-connection.webp)

<Tabs queryString="target">
<TabItem value="Windows" label="Windows">

Windows system can use [Mobaxterm](https://mobaxterm.mobatek.net/) to debug serial port

Click `Session` in the upper left corner to create a new serial connection, select the serial port number in `Serial port`, fill in `1500000` in `Speed`, click OK and then double-click on the session, enter the password and then you can access it.

![mobaxterm serial ](/img/zero/zero3/mobaxterm-serial.webp)
</TabItem>
<TabItem value="Ubuntu" label="Ubuntu">
Ubuntu systems can be debugged using the Mincom serial tool

```bash
$ sudo apt-get update
$ sudo apt-get install minicom
```

Once the installation is complete, you can start configuring and using Minicom.
First, run the command sudo minicom -s to open the minicom configuration interface.

In the configuration interface, select "Serial port setup" and press enter to enter the serial port setup.

Select save setup as dfl, you can use the modification just made as the default configuration, and start up according to this configuration in the future.
Start minicom, execute the command sudo minicom.

</TabItem>
</Tabs>

## Adb Login

ADB is a bridge between your Android device and your computer, and is used to fully operate and manage your Android device on your computer.

### Wired Login

#### Requirements

1. a USB cable
2. a computer or laptop with the ADB tool installed on it
3. a Radxa ZERO 3W/E

#### Steps

1. Connect the USB cable between the USB connector of the computer and the OTG Type C connector of the Radxa ZERO 3W/E.
2. Open the computer terminal and enter adb devices to confirm that the Radxa ZERO 3W/E is recognized.
   Type adb shell to login

```bash
$ adb devices
  List of devices attached
  e74a71a469bf207c device

$ adb shell
  rk356x_radxa_zero3:/ $
```

### Wireless login

Wireless ADB is supported on Android 11 and later.

#### Requirements

1. a computer or laptop with ADB tools installed and ADB version greater than 31.0.0
2. a Radxa ZERO 3W with an Android image greater than or equal to 11.
3. the computer and Radxa ZERO 3W need to be on the same LAN.

#### Steps

1. Start Radxa ZERO 3W and connect to the network using wifi.
2. Enter the Developing mode by tapping the version number 7 times (Settings -> About Tablet -> Version Number).
3. Go to Developing Options (Settings -> System -> Developing Options), turn on wireless debugging and memorize the IP address and interface (example: 10.0.0.16:45613).
4. Open a computer terminal and type adb connect 10.0.0.16:45613 to connect to the Radxa ZERO 3W, type adb shell to login

```bash
$ adb connect 10.0.0.16:45613

$ adb shell
  rk356x_radxa_zero3:/ $
```
