---
sidebar_position: 20
---

# 恢复 Roobi

Roobi Flasher 是用于恢复 Roobi 系统的一个刷入工具，如果您因为不可控原因，使 Roobi 系统无法启动，可通过该教程，将您的 Roobi 系统恢复到出厂时的状态。

1. 获取刷入镜像：[点击这里](https://github.com/palmshell/RoobiOS/releases/download/ps006_flasher_v1.1.0/ps006_flasher.img.xz)

2. 插入 U 盘。

3. 使用 balenaEtcher 将镜像写入U盘 。（**请注意，这个操作会清空您U盘中的数据**）

4. 激活 eMMC：首先需要找到 eMMC Recovery 按钮。（可能位于机身的侧面或正面，请查看指定产品的产品标注图）在开机之前，按住 eMMC Recovery 按钮并保持，于此同时点按电源键（按下并立刻松开）进行开机，直到显示器亮起后即可松开 eMMC Recovery 按钮。

5. 在显示画面后，立刻点击 F7 进入引导选择界面

6. 选择您的 U 盘设备，按 [Enter] 选择相应条目（通常带有**USB**字样）

7. 此时，系统将会自动将 Roobi 刷入到 eMMC 中。
