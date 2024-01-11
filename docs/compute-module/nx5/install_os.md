---
sidebar_position: 2
---

import Etcher from "../../common/general/\_etcher.mdx"

# 系统烧录

Radxa NX5 目前提供 Debian OS 系统

## 准备工作

烧录到 microSD 卡需要准备：

- microSD 卡 (建议 class10 等级以上)
- microSD 读卡器

烧录到 eMMC 需要准备：

- micro USB 转 Type-A USB 线

## 下载镜像

请到 [计算模块镜像下载汇总](/compute-module/images) 下载对应的镜像文件。

## 安装系统

### 安装系统到 microSD 卡

<Etcher model="nx5" />

### 安装系统到 eMMC

1. 将 micro USB 线缆连接到主机

2. 按住 maskrom 按键后上电，此时会进入 maskrom 模式

<Tabs queryString="os">

<TabItem value="linux" label="Linux/Mac">

#### Linux/Mac 系统使用 rkdeveloptool 烧录

&emsp;[rkdeveloptool](low-level-dev/rkdeveloptool)

&emsp;[upgrade_tool](low-level-dev/upgrade-tool)（可同时烧录多台设备）

</TabItem>

<TabItem value="windows" label="Windows">

#### Windows 系统使用 rkdeveloptool 烧录

&emsp;[rkdevtool](low-level-dev/rkdevtool)

</TabItem>

</Tabs>
