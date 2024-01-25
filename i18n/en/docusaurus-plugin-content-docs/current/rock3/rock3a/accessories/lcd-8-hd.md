---
sidebar_position: 20
---

# How to setup Radxa Display 8 HD on ROCK 3A

## Hardware Connections

The fpc provided by Radxa Display 8 HD, one port of fpc is connected to the screen, and the other is connected to ROCK 3A. (To be connected without power on)

Connect the FPC to the 8HD screen as shown in the figure, use your fingers to pull up the black module of the fpc connector, insert the fpc cable into the card slot, and then pull down the black module to fix the fpc cable.

![Radxa Display 8 HD](/img/accessories/rock3a-fpc-to-8hd.webp)

Connect the FPC to ROCK 3A as shown in the figure. ROCK 3A provides a MIPI DSI interface. Pull up the white module of the MIPI DSI interface, insert the fpc into the connector and pull down the white module to fix the fpc.

![Radxa Display 8 HD](/img/accessories/rock3a-fpc-to-dsi.webp)

Connect the pins on the fpc to the corresponding pins on the 40 PIN on the ROCK 3A using DuPont wire as shown.

![Radxa Display 8 HD](/img/accessories/rock3a-fpc-to-40pin.webp)

Below is a sample connection diagram.

![Radxa Display 8 HD](/img/accessories/rock3a-fpc-pin.webp)
![Radxa Display 8 HD](/img/accessories/rock3a-fpc-connect.webp)

## Software Configuration

Open a terminal, run `rsetup` command as below:

```bash
radxa@rock-3a:~$ rsetup
```

Typing the password and select `Overlays` to rsetup tool interface.  
Select `Overlays`:

```bash
Please select an option below:
        System Maintenance
        Hardware
        Overlays
        User Settings
        Localization
        About
        <Ok>             <Cancel>
```

Then, select `Manage overlays`:

```bash
Configure Device Tree Overlay
        Manage overlays
        View overlay info
        Install overlay from source
        Reset overlays


      <Ok>            <Cancel>
```

Next, the installed device tree would shown, it may be different on different product.
Press the space bar to `Enable Radxa Display 8HD`

```bash
Please select overlays:
        [ ] Enable 1-Wire on GPIO3_A5
        [ ] Enable CAN0-M0
        [ ] Enable CAN1-M0
        [ ] Enable CAN1-M1
        [ ] Enable FIQ Debugger on UART5-M1
        [ ] Enable I2C1
        [ ] Enable I2C2-M0
        [ ] Enable I2C3-M0
        [ ] Enable MCP2515 on SPI3-M1 CS0
        [ ] Enable NPU
        [ ] Enable NXP PCA9555 I2C GPIO multiplexer on I2C2-M0
        [ ] Enable OKdo 5MP Camera
        [ ] Enable PWM1-M0
        [ ] Enable PWM1-M1
        [ ] Enable PWM12-M1
        [ ] Enable PWM13-M1
        [ ] Enable PWM14-M0
        [ ] Enable PWM14-M1
        [ ] Enable PWM15-M0
        [ ] Enable PWM15-M1
        [ ] Enable PWM2-M0
        [ ] Enable PWM2-M1
        [ ] Enable PWM9-M0
        [ ] Enable Radxa 5-inch Touchscreen
        [ ] Enable Radxa Display 8HD
        [ ] Enable Raspberry Pi 7-inch Touchscreen
        [ ] Enable Raspberry Pi Camera v1.3
        [ ] Enable Raspberry Pi Camera v2
        [ ] Enable Sharp LQ133T1JW01 Display
        [ ] Enable SATA2
        [ ] Enable UART0
        [ ] Enable UART2-M0
        [ ] Enable UART3-M0
        [ ] Enable UART5-M1
        [ ] Enable UART7-M1
        [ ] Enable UART8-M1
        [ ] Enable UART9-M1
        [ ] Enable spidev on SPI3-M1 over CS0
        [ ] Enable spidev on SPI3-M1 over CS1
        [ ] Set OTG port to Host mode
        [ ] Set OTG port to Peripheral mode
        [ ] Set OTG port to be controlled by hardware switch
        <Ok>                   <Cancel>
```

Select the overlays you want to load with the space bar,

```bash
[*] Enable Radxa Display 8 HD
```

Overlay with a `*` indicates that it is enabled. It would work after reboot.

```bash
radxa@rock-3a:~$ sudo reboot
```
