---
sidebar_position: 2
---

# 系统烧录

Zero 3W/3E 目前提供 Debian OS 系统

## 准备工作

## 镜像下载

请到 [资源下载汇总](/zero/zero3/getting-started/download.md) 下载对应的镜像文件

## 系统安装

1. [下载](https://etcher.balena.io/)刷写工具 `Etcher`。  
   ![ROCK5A via Etcher 01](/img/rock5a/rock5a-etcher.webp)

2. 打开 Etcher，将准备的操作系统镜像刷写到 microSD 卡。在 Etcher 窗口中，单击 `Flash from file` 选择刚下载的操作系统镜像。  
   ![ROCK5A via Etcher 02](/img/rock5a/rock5a-etcher-1.webp)

3. 在 Etcher 窗口中，点击 `Select target`。  
   ![ROCK5A via Etcher 03](/img/rock5a/rock5a-etcher-2.webp)

4. 在 Etcher 窗口中，点击 `Flash!` 然后等待刷写进度条。  
   ![ROCK5A via Etcher 04](/img/rock5a/rock5a-etcher-3.webp)

5. 在 Etcher 窗口中，当刷写成功时将会显示 `Flash Complete!`  
   ![ROCK5A via Etcher 05](/img/rock5a/rock5a-etcher-4.webp)

**如果刷写操作系统镜像错误, 请手动再试一次。**

## 启动系统

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

- 按照上述步骤成功烧录 microSD 卡后，将 microSD 卡插入 Radxa ZERO 3 的 `Micro SD Card Slot` 插槽内
- Radxa ZERO 3 的供电接口为 `USB 2.0 OTG Type C port`，请使用 Type-C 线缆连接供电口和适配器

:::tip
Radxa ZERO 3 只支持 `5V` 供电。瑞莎推荐使用 [Radxa Power PD30W](/accessories/pd_30w)。
:::

## 参考文档

[安装操作系统镜像到 eMMC](/zero/zero3/low-level-dev/install-os-on-emmc.md)
