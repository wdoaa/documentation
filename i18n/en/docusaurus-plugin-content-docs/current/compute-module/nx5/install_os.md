---
sidebar_position: 2
---

# System Installation

The Radxa NX5 is currently available for Debian OS.

## Before start

<Tabs queryString="target">
 <TabItem value="io board" label="NX5 IO">

Installation to micoSD card requires preparation：

- microSD card (recommended class10 or higher)

- USB card reader

Installation to eMMC requires preparation:

- micro usb to typea usb connector cable

<!-- placeholder -->

 </TabItem>
</Tabs>

## Images Download

Please go to [Computing Module Images Download Summary](/compute-module/images.md)  to download the corresponding Images.

## Images Installation

There are two ways to burn an image to the SD card, using Etcher or Win32DiskImager.

### Install the operating system image to the microSD

<Tabs queryString="target">
  <TabItem value="Via Etcher" label="Etcher">

#### Installing an operating system image to microSD via Etcher

1. [Download](https://etcher.balena.io/) `Etcher`.
   ![ROCK5A via Etcher 01](/img/rock5a/rock5a-etcher.webp)

2. Open Etcher and burn the prepared OS image to the microSD card. In the Etcher window, click `Flash from file` to select the OS image you just downloaded.  
   ![ROCK5A via Etcher 02](/img/rock5a/rock5a-etcher-1.webp)

3. In the Etcher window, click `Select target`.
   ![ROCK5A via Etcher 03](/img/rock5a/rock5a-etcher-2.webp)

4. In the Etcher window, click `Flash!` Then wait for the progress bar to finish.  
   ![ROCK5A via Etcher 04](/img/rock5a/rock5a-etcher-3.webp)

5. When successful it will display `Flash Complete!`.
   ![ROCK5A via Etcher 05](/img/rock5a/rock5a-etcher-4.webp)

**If you get an error burning the OS image, try again manually.**

</TabItem>

  <TabItem value="via Win32DiskImager" label="Win32DiskImager">

#### Burn OS image to microSD via Win32DiskImager

1. [Download](https://win32diskimager.org/) `Win32DiskImager`.
   ![ROCK5A via Win32DiskImager 01](/img/rock5a/rock5a-win32.webp)

2. Open Win32DiskImager.
   ![ROCK5A via Win32DiskImager 02](/img/rock5a/rock5a-win32-1.webp)

3. Click on the folder icon button and select the image you want to burn.
   ![ROCK5A via Win32DiskImager 03](/img/rock5a/rock5a-win32-2.webp)

4. After completing the above, click `Write` button to start burning the image, and then wait for the write image to complete.  
   ![ROCK5A via Win32DiskImager 04](/img/rock5a/rock5a-win32-3.webp)

</TabItem>
</Tabs>

### Install the OS image to eMMC

<Tabs queryString="target">
 <TabItem value="io board" label="NX5 IO">


1. Connecting the micro usb cable to the host computer.

2. Press and hold the maskrom button and power up, then enter maskrom mode.

<!-- placeholder -->

 </TabItem>
</Tabs>

<Tabs queryString="target">

<TabItem value="Linux/Mac" label="Linux">

#### Burning with rkdeveloptool on Linux/Mac systems

&emsp;[rkdeveloptool](/general-tutorial/rksdk/rkdeveloptool)

&emsp;[upgrade_tool](general-tutorial/rksdk/upgrade_tool)（Multiple devices can be burned at the same time）

</TabItem>

<TabItem value="Windows" label="Windows">

#### Burning with rkdeveloptool on Windows systems

&emsp;[rkdevtool](/general-tutorial/rksdk/rkdevtool)

</TabItem>

</Tabs>
