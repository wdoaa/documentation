---
sidebar_position: 2
---

# System installation

Radxa ZERO 3 currently provides Debian OS system

## Preparation

## Image download

Please go to [Resource Download Summary](/zero/zero3/other-os/android/download.md) to download the corresponding image file

## System Flashing

There are two ways to flash image on SD card. Use Etcher or Win32DiskImager. You can choose one of them.

### Flash the operating system image to microSD

<Tabs queryString="target">
   <TabItem value="via Etcher" label="Etcher">

#### Flash the operating system image to microSD via Etcher

1. [Download](https://etcher.balena.io/) Flash tool `Etcher`.
   ![ROCK5A via Etcher 01](/img/rock5a/rock5a-etcher.webp)

2. Open Etcher and flash the prepared operating system image to the microSD card. In the Etcher window, click `Flash from file` to select the operating system image you just downloaded.
   ![ROCK5A via Etcher 02](/img/rock5a/rock5a-etcher-1.webp)

3. In the Etcher window, click `Select target`.
   ![ROCK5A via Etcher 03](/img/rock5a/rock5a-etcher-2.webp)

4. In the Etcher window, click `Flash!` and wait for the flash progress bar to flash.
   ![ROCK5A via Etcher 04](/img/rock5a/rock5a-etcher-3.webp)

5. In the Etcher window, `Flash Complete!` will be displayed when the flash is successful.
   ![ROCK5A via Etcher 05](/img/rock5a/rock5a-etcher-4.webp)

**If there is an error in flashing, please try again. **

</TabItem>

   <TabItem value="Via Win32DiskImager" label="Win32DiskImager">

#### Flash the operating system image to microSD via Win32DiskImager

1. [Download](https://win32diskimager.org/) Flash tool `Win32DiskImager`
   ![ROCK5A via Win32DiskImager 01](/img/rock5a/rock5a-win32.webp)

2. Open Win32DiskImager
   ![ROCK5A via Win32DiskImager 02](/img/rock5a/rock5a-win32-1.webp)

3. Click the folder icon button and select the image you want to flash
   ![ROCK5A via Win32DiskImager 03](/img/rock5a/rock5a-win32-2.webp)

4. After completing the above operations, click the `Write` button to start flashing the image, and then wait for the writing of the image to complete.
   ![ROCK5A via Win32DiskImager 04](/img/rock5a/rock5a-win32-3.webp)

</TabItem>
</Tabs>

## Boot the system

## Reference
