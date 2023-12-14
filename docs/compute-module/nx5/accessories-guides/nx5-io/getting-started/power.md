---
sidebar_position: 18
---

# 电源管理

## 使用硬件电源键

当 NX5 IO 接上电源之后，在关机状态下电源绿灯将会一直常亮。此时按下电源键即可启动。

![NX5 IO Power](/img/nx5/nx5-io/nx5-io-power.webp).

当 NX5 IO 启动之后，再次按下电源键将弹出电源管理对话框：

![NX5 IO Power](/img/rock5a/rock5a-power-status.webp)

## 使用软件控制

### 通过图形界面控制

打开 Application Launcher。选择 `Leave` 选项来显示电源管理对话框：

![NX5 IO GUI 01](/img/rock5a/rock5a-GUI-leave.webp)

### 通过命令控制

你可以在终端执行以下指令来控制电源状态：

- 重启：`systemctl reboot`
- 关机：`systemctl poweroff`
- 待机：`systemctl suspend`
