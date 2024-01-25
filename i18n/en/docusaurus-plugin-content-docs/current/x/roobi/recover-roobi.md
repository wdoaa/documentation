---
sidebar_position: 20
---

# Recover Roobi

Roobi Flasher is a flashing tool used to restore the Roobi system. If your Roobi system fails to boot due to uncontrollable reasons, you can follow this tutorial to restore your Roobi system to its factory state.

1. Obtain the flashing image: [Click here](https://github.com/palmshell/RoobiOS/releases/download/ps006_flasher_v1.1.0/ps006_flasher.img.xz)

2. Insert a USB flash drive.

3. Use balenaEtcher to write the image to the USB flash drive. (**Please note that this operation will erase the data on your USB flash drive**)

4. Activate eMMC: To begin, locate the eMMC Recovery button (may be located on the side or front of the device, please refer to the product labeling diagram for specific product information). Before powering on, press and hold the eMMC Recovery button, and simultaneously press the power button (press and release immediately) to turn on the device. Release the eMMC Recovery button once the display lights up.

5. After the display appears, immediately press F7 to enter the boot selection interface.

6. Select your USB device and press [Enter] to choose the corresponding entry (usually labeled with **USB**).

7. The system will automatically flash Roobi into the eMMC.
