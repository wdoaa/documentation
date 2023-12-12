---
sidebar_position: 20
---

# 如何在 ROCK 3A 上使用 Radxa Display 8 HD

## 硬件连接

Radxa Display 8 HD 提供的 fpc，fpc 一边是用于接屏幕，另一边是用于接 ROCK 3A。（要在没有接通电源的情况下连接）

如图将 fpc 连接到 8HD 屏，用手指向上拉起 fpc 接头黑色模块，将 fpc 排线插入卡槽，然后按下黑色模块固定 fpc 排线。

![Radxa Display 8 HD](/img/accessories/rock3a-fpc-to-8hd.webp)

如图所示，将 fpc 连接到 ROCK 3A。 ROCK 3A 提供了一个 MIPI DSI 接口。 将 MIPI DSI 接口的白色模块拉起，将 fpc 插入连接器，将白色模块拉下固定 fpc 。

![Radxa Display 8 HD](/img/accessories/rock3a-fpc-to-dsi.webp)

如图所示，使用杜邦线将 fpc 上的引脚与 ROCK 3A 上 40 PIN 上相对应的管脚相连接。

![Radxa Display 8 HD](/img/accessories/rock3a-fpc-to-40pin.webp)

下面是连接示例图:

![Radxa Display 8 HD](/img/accessories/rock3a-fpc-pin.webp)
![Radxa Display 8 HD](/img/accessories/rock3a-fpc-connect.webp)

## 软件配置

打开终端，运行“rsetup”命令如下:

```bash
radxa@rock-3a:~$ rsetup
```

输入密码进入 rsetup 工具界面，并选择 `Overlays`:

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

然后, 选择 `Manage overlays`:

```bash
Configure Device Tree Overlay
        Manage overlays
        View overlay info
        Install overlay from source
        Reset overlays


      <Ok>            <Cancel>
```

接着，进入设备的管理界面，不同的产品可能会有所不同。

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

按下空格键使能 8HD 屏幕 `Enable Radxa Display 8HD`

```bash
[*] Enable Radxa Display 8HD
```

最后，重新启动就可以使用。

```bash
radxa@rock-3a:~$ sudo reboot
```
