---
sidebar_position: 18
---

# power management

## Using the hardware power button

When the NX5 IO is connected to the power supply, the power green light will remain on during the power off state. At this point, press the power button to start.

![NX5 IO Power](/img/nx5/nx5-io/nx5-io-power.webp).

Once the NX5 IO has started, pressing the power button again will bring up the Power Management dialog box:

![NX5 IO Power](/img/rock5a/rock5a-power-status.webp)

## Control with software

### Control via graphical interface

Open the Application Launcher. select the `Leave` option to display the Power Management dialog:

![NX5 IO GUI 01](/img/rock5a/rock5a-GUI-leave.webp)

### Control by command

You can control the power state by executing the following commands in the terminal:

- Reboot: `systemctl reboot`
- Shutdown: `systemctl poweroff`
- Standby: `systemctl suspend`
