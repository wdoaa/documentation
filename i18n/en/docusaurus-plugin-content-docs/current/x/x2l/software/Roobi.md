---
sidebar_position: 20
---

# Roobi

Roobi OS

## What is Roobi

- Roobi is software that allows you to install computer operating systems with minimal configuration required.

- The Roobi system is designed to make computer management and recovery more convenient for users.

- Roobi operates independently of your normal usage environment.

- Roobi allows for the installation of user-created systems.

## How to Flash Roobi OS

Prerequisites: PalmShell device or single board with eMMC

### Using Roobi Flasher

Roobi Flasher is a flashing tool used to restore the Roobi system. If your Roobi system fails to boot due to uncontrollable reasons, you can follow this tutorial to restore your Roobi system to its factory state.

1. Obtain the flashing image: [Click here](https://github.com/palmshell/RoobiOS/releases/download/ps006_flasher_v1.1.0/ps006_flasher.img.xz)

2. Insert a USB flash drive.

3. Use balenaEtcher to write the image to the USB flash drive. (**Please note that this operation will erase the data on your USB flash drive**)

4. Activate eMMC: Before powering on the device, press and hold the recovery button (located on the side or front of the device) with a sharp object, and simultaneously press the power button (press and release immediately) to power on. Release the recovery button when the display lights up.

5. After the display appears, immediately press F7 to enter the boot selection interface.

6. Select your USB device and press [Enter] to choose the corresponding entry (usually labeled with **USB**).

7. The system will automatically flash Roobi into the eMMC.
