---
sidebar_position: 1
---

# 射频天线

ROCK S0 板载AP6212 WiFi&BT模块, 有一个板载天线和一个外接天线座子, 可以通过overlay自由选择使用板载天线或外接天线。
默认使用板载天线。

![rocks0 antenna1 ](/img/rockpi/s0/rock-s0-antenna.webp)

- **1: 板载天线**
- **2: 外接天线**

## 使用外接天线

如果你需要使用外接天线, 需要开启外接天线的overlay,使用 rsetup [开启overlay](../os-config/rsetup#overlays)。

```bash
sudo rsetup
```

![rocks0 antenna2 ](/img/rockpi/s0/rock-s0-antenna2.webp)
