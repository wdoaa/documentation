---
sidebar_position: 2
---

# System Installation

Radxa ZERO 3 currently provides Debian OS system

## Preparation

## Image download

Please go to [Resource Download Summary](/zero/zero3/getting-started/download.md) to download the corresponding image file

## Install System

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

## Boot the system

<Tabs queryString="install-os">
<TabItem value="ZERO 3W">

- **ZERO 3W**

![ZERO 3W Overview](/img/zero/zero3w/radxa_zero_3w.webp)

</TabItem>
<TabItem value="ZERO 3E">

- **ZERO 3E**

![ZERO 3E Overview](/img/zero/zero3w/radxa_zero_3e.webp)

</TabItem>
</Tabs>

- After successfully burning the microSD card according to the above steps, insert the microSD card into the `MicroSD Card Slot` of the Radxa ZERO 3.
- The Radxa ZERO 3 is powered by a `USB 2.0 OTG Type C port`, using a Type C cable to connect the power port to the adapter.

:::tip
Radxa ZERO 3 only supports `5V` power supply.Radxa Recommended [Radxa Power PD30W](/accessories/pd_30w).
:::

## Reference

[Install OS on eMMC](/zero/zero3/low-level-dev/install-os-on-emmc.md)
