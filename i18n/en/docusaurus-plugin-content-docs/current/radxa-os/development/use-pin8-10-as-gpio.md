---
sidebar_position: 10
---

# Configure PIN 8 && PIN 10 as normal GPIOs

:::info
By default, the UART2_M0 interface is a FIQ debugging serial port, which can output logs of DDR Init, U-Boot, Linux Kernel, etc. for debugging. Therefore, it is not recommended to cancel this configuration as you can use other serial ports if not necessary.
:::

## Preparation

- A Radxa single board computer or computing module running the official Radxa distribution.

## Start rsetup and go to the device tree management interface

```bash
rsetup
```

## After entering rsetup, follow [Device Tree Settings](/radxa-os/rsetup/devicetree) to enter the Device Tree management interface.

## Disable the FIQ-Debugger configuration.

Tick `Disable FIQ Debugger.`

![Disable FIQ Debugger](/img/general-tutorial/disable-fiq-debugger.webp)

Check the box and select OK, then exit rsetup and reboot the system, PIN 8 && PIN 10 can be used as normal GPIOs.
