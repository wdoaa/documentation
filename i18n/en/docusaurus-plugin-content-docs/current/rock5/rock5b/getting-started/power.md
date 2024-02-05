---
sidebar_position: 18
---

# Power Management

## Control with hardware power key

When the ROCK 5B is connected to the power supply but off, the green power LED will stay on. Press the power button to start the system.

![ROCK 5B Power](/img/rock5b/rock5b-power.webp)

After the ROCK 5B is booted into the desktop, press the power button again, and the power management dialog will pop up:

![ROCK 5B Power](/img/rock5a/rock5a-power-status.webp)

## Control with software

### Control via GUI

Open the Application Launcher. Select `Leave` option to show the power management dialog:

![ROCK5A GUI 01](/img/rock5a/rock5a-GUI-leave.webp)

### Control via command

You can run the following commands in a terminal to control the power state:

- Reboot: `systemctl reboot`
- Shutdown: `systemctl poweroff`
- Suspend: `systemctl suspend`
