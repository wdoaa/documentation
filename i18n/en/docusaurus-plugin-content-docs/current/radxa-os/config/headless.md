---
sidebar_position: 10
---

# Headless Setup

This guide is intended to guide you in the use without the keyboard or the monitor.

The SSH service is automatically enabled when no monitor is connected during the first boot. Despite this, you still need to link to LAN so that you can get the **_IP address_** of SBC.

## Ethernet

You can refer to this guide: [network guide](/radxa-os/config/network.md).  
Connect the SBC to **the same network** as your computer via wired connection.

## Wireless

The [wireless guide](/radxa-os/config/network.md) may be helpful.

_Note: Some solutions require a WiFi module to be installed in order to connect to the wireless network. For more details, please check product parameters on [Product Introduction](https://radxa.com/products)._

After flashing the image to a microSD card, keep it connected with your Linux or Windows machines, the config folder will be available on file system. There are two files **before.txt** and **config.txt** in it.

**before.txt**: Radxa First Boot Configuration, it will be copied into the correct location in the Linux root file system, the machine will use those settings to start up wireless networking.

**config.txt**: rsetup config file, it will be applied on every boot.

To enable automatic Wi-Fi connection, add the following line in **before.txt**:

```
connect_wi-fi YOUR_WIFI_SSID YOUR_WIFI_PASSWORD
```

## Get IP Address

It will be simple when you can connect the SBC to your personal computer by serial port tool:  
Please refer to the [Serial Console Guide](https://wiki.radxa.com/Rock5/dev/serial-console).

- Access to the terminal via the serial software like `putty` or `minicom`.
- Turn on the product and wait for login prompt.
- Login with the default account.
- Run `ip a` to check the IP address.

You can also get the IP from your router's DHCP lease page. Refer to your router manufacturer's documentation.

## SSH Connection

There is the [SSH guide](remote-login).

After installing the ssh service, connect remotely directly on terminal via username and ip address like following code.  
`ssh <username>@[IP address]`

For example, `ssh radxa@192.168.42.100`.
![ssh connect](/img/configuration/ssh-connect.webp)
