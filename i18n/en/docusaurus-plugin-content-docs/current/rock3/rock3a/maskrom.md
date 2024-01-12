---
sidebar_position: 40
---

# Maskrom Mode

The OTG interface of ROCK 3A is located on the upper USB 3.0 port, and can be used to communicate with the host computer and the board in Maskrom via the USB-A to USB-A cable.
In Maskrom mode, you can use [rkdevtool](low-level-dev/rkdevtool) or [upgrade-tool](low-level-dev/upgrade-tool) to write and erase your product.

## Enter the Maskrom mode

Steps for the ROCK 3A to enter Maskrom mode:

1. Shutdown and disconnect the power supply.
2. Short-circuit the SPI pins as shown in the attached figure, which are the two pins near the outside of the 3-pin row of pins next to the power button.
   ![ROCK 3A SPI](/img/rock3/3a/rock3a-spi.webp)

3. Remove the eMMC and microSD card etc, or you can connect the Maskrom pin, which is located next to the 40 pin GPIO connector.
   ![ROCK 3A Maskrom](/img/rock3/3a/rock3a-maskrom.webp)
4. Plug in the power cable and power up, if the power green light is always on, then the ROCK 3A has successfully entered the Maskrom mode.
5. If enter the Maskrom mode, you can disconnect the Maskrom pins

&emsp;&emsp;If you need to **Burn system image to EMMC**, you need to **continue to short the SPI pin**;

&emsp;&emsp;If you need to **Burn firmware to SPI Nor Flash**, you need to **disconnect the SPI pin**;

&emsp;&emsp;(About the position of the SPI pins please refer to step 2)

7. Connect the OTG port of the board to the USB port of the host PC via the USB-A to USB-A cable.
   ![ROCK 3A Maskrom OTG](/img/rock3/3a/rock3a-maskrom-otg.webp)
8. Use [rkdevtool](low-level-dev/rkdevtool) or [upgrade-tool](low-level-dev/upgrade-tool) for Maskrom mode operation
