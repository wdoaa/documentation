---
sidebar_position: 2
---

import Ether from '../../../common/general/\_etcher.mdx'

# 安装操作系统

Zero 3W/3E 目前提供 Debian OS 系统。

## 准备工作

## 下载镜像

请到 [资源下载汇总](./download.md) 下载对应的镜像文件。

## 写入镜像

Balena Etcher 是一个跨平台且，用户界面友好的镜像文件烧写工具，我们推荐你使用它。
如果你使用 Windows，并且对 [Win32DiskImager](https://win32diskimager.org) 或 [Rufus](https://github.com/pbatard/rufus) 更熟悉，你也可以使用它们。

### 通过 Etcher 把镜像文件写到 microSD

<Ether model="zero3" />

## 启动系统

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

- 按照上述步骤成功烧录 microSD 卡后，将 microSD 卡插入 Radxa ZERO 3 的 `Micro SD Card Slot` 插槽内。
- Radxa ZERO 3 的供电接口为 `USB 2.0 OTG Type C port`，请使用 Type-C 线缆连接供电口和适配器。

:::tip
Radxa ZERO 3 只支持 `5V` 供电。瑞莎推荐使用 [Radxa Power PD30W](../accessories/pd-30w)。
:::
