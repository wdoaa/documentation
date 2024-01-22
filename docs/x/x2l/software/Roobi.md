---
sidebar_position: 20
---

# Roobi

Roobi OS

## 什么是Roobi

- Roobi 是一个能够在几乎不需要配置的情况下，安装计算机操作系统的软件。

- Roobi 系统旨在用户更方便的管理、恢复计算机。

- Roobi 与您的正常使用环境是隔离的。

- Roobi 可以自由安装用户创建的系统。

## 如何刷入Roobi OS

使用前提：PalmShell整机 或 带有eMMC的单板

### 使用 Roobi Flasher

Roobi Flasher 是用于恢复 Roobi 系统的一个刷入工具，如果您因为不可控原因，使Roobi系统无法启动，可通过该教程，将您的Roobi系统恢复到出厂时的状态。

1. 获取刷入镜像：[点击这里](https://github.com/palmshell/RoobiOS/releases/download/ps006_flasher_v1.1.0/ps006_flasher.img.xz)

2. 插入U盘。

3. 使用 balenaEtcher 将镜像写入U盘 。（**请注意，这个操作会清空您U盘中的数据**）

4. 激活eMMC：在开机之前，使用尖锐物品点击recovery按钮（可能位于机身的侧面或正面）并保持，于此同时点按电源键（按下并立刻松开）进行开机，直到显示器亮起后即可松开recovery按钮。

5. 在显示画面后，立刻点击 F7 进入引导选择界面

6. 选择您的U盘设备，按 [Enter] 选择相应条目（通常带有**USB**字样）

7. 此时，系统将会自动将 Roobi 刷入到eMMC中。
