---
sidebar_position: 18
---

# 电源管理

## 使用硬件电源键

当 ROCK 5B 接上电源之后，在关机状态下电源绿灯将会一直常亮。此时按下电源键即可启动。

![ROCK 5B Power](/img/rock5b/rock5b-power.webp)

当 ROCK 5B 启动之后，再次按下电源键将弹出电源管理对话框：

![ROCK 5B Power](/img/rock5a/rock5a-power-status.webp)

## 使用软件控制

### 通过图形界面控制

打开 Application Launcher。选择 `Leave` 选项来显示电源管理对话框：

![ROCK5A GUI 01](/img/rock5a/rock5a-GUI-leave.webp)

### 通过命令控制

你可以在终端执行以下指令来控制电源状态：

- 重启：`systemctl reboot`
- 关机：`systemctl poweroff`
- 待机：`systemctl suspend`
