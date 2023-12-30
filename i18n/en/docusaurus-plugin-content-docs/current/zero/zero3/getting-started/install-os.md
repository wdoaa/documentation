---
sidebar_position: 2
---

import Ether from '../../../common/general/\_etcher.mdx'

# Install an operating system

Radxa ZERO 3 currently provides Debian OS system.

## Preparation

## Download Image

Please go to [Resource Download Summary](./download) to download the corresponding image file.

## Write Image

Balena Etcher is a cross-platform and user friendly image file burning tool that we recommend you use.
If you use Windows and are more familiar with [Win32DiskImager](https://win32diskimager.org) or [Rufus](https://github.com/pbatard/rufus), you can use them as well.

### Write the image file to the microSD via Etcher

<Ether model="zero3" />

## Boot the system

<Tabs queryString="model">
<TabItem value="zero-3w">

- **ZERO 3W**

![ZERO 3W Overview](/img/zero/zero3w/radxa_zero_3w.webp)

</TabItem>
<TabItem value="zero-3e">

- **ZERO 3E**

![ZERO 3E Overview](/img/zero/zero3w/radxa_zero_3e.webp)

</TabItem>
</Tabs>

- After successfully burning the microSD card according to the above steps, insert the microSD card into the `MicroSD Card Slot` of the Radxa ZERO 3.
- The Radxa ZERO 3 is powered by a `USB 2.0 OTG Type C port`, using a Type C cable to connect the power port to the adapter.

:::tip
Radxa ZERO 3 only supports `5V` power supply. Radxa Recommended [Radxa Power PD30W](../accessories/pd-30w).
:::
