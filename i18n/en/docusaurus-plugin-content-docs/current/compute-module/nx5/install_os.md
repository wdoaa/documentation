---
sidebar_position: 2
---

import Etcher from "../../common/general/\_etcher.mdx"

# System Installation

The Debian OS is currently available with the Radxa NX5.

## Before start

Installation to micoSD card requires preparation：

- microSD card (recommended class10 or higher)
- microSD card reader

Installation to eMMC requires preparation:

- micro USB to Type-A USB cable

## Download Image

Please go to [Computing Module Images Download Summary](/compute-module/images) to download the corresponding Images.

## Install OS

### Install OS to microSD card

<Etcher model="nx5" />

### Install OS to eMMC

1. Connecting the micro USB cable to the host computer.

2. Press and hold the maskrom button and power up, then enter maskrom mode.

<Tabs queryString="os">

<TabItem value="linux" label="Linux/Mac">

#### Writing with rkdeveloptool on Linux/Mac

&emsp;[rkdeveloptool](low-level-dev/rkdeveloptool)

&emsp;[upgrade_tool](low-level-dev/upgrade-tool)（Multiple devices can be burned at the same time）

</TabItem>

<TabItem value="windows" label="Windows">

#### Writing with rkdeveloptool on Windows

&emsp;[rkdevtool](low-level-dev/rkdevtool)

</TabItem>

</Tabs>
