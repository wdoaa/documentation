---
sidebar_position: 3
---

# 8/10 inch Display Screen Tutorial

![Panel Connection](/img/rock5b/rock5b-display-8hd-FPC.webp)  
![Panel Connection](/img/rock5b/rock5b-display-8hd-connected.webp)

- Prepare Radxa Display 8HD or Radxa Display 10HD, and connect to ROCK5B through FPC cable.

- Open the Kconsole terminal via the Application Launcher in the lower left corner and run the `rsetup` command:

```bash
radxa@rock-5b:~$ rsetup
```

- Enable Overlay of the Radxa camera 4K via [Device Tree Configuration](../os-config/rsetup#overlays).

:::caution [Caution]

1. Please enable the `[] Enable Radxa Display 8 HD` item Overlay.
2. Quit and reboot after `[*] Enable Radxa Display 8 HD` is successfully displayed for the configuration to take effect.  
   :::
