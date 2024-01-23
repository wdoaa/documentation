---
sidebar_position: 20
---

# RTSP 远程推流教程(基于 Gstreamer)

## 需求

1. 兼容摄像头
2. 如使用 ROCK 5B，也可使用 HDMI RX 作为视频源

:::caution
使用 HDMI RX 时，目前 gst-mppenc 暂不支持 NV24(YCbCr444) 与 RGB 输入，需要 HDMI 输入端切换颜色格式为 NV12(YCbCr420) 或 NV16(YCbCr422)，或者使用 [FFmpeg](./rtsp-ffmpeg) 进行推流。
:::

## 服务端配置

### 安装编译依赖

```bash
sudo apt update
sudo apt install libgstreamer-plugins-base1.0-dev libgstreamer-plugins-bad1.0-dev build-essential meson libcgroup-dev gobject-introspection libgirepository1.0-dev
```

### 获取 gst-rtsp-server 源码

```bash
wget https://gstreamer.freedesktop.org/src/gst-rtsp-server/gst-rtsp-server-1.18.6.tar.xz
tar -xvf gst-rtsp-server-1.18.6.tar.xz
```

### 编译 gst-rtsp-server

```bash
cd gst-rtsp-server-1.18.6/
meson build
cd build
ninja
```

### 运行 gst-rtsp-server

:::info
此处我们假定 `/dev/video0` 是你想要使用的视频源。如果你的摄像头被分配到了其他的名称下，请替换以下命令行中对应的文件名。
:::

```bash
cd examples/
./test-launch --gst-debug-level=3 "( v4l2src device=/dev/video0 ! queue ! mpph265enc bps=51200000 rc-mode=vbr !  rtph265pay name=pay0 pt=97 )"
```

## 客户端配置

以下以 Windows 下运行 [VLC](https://www.videolan.org/vlc/) 为例，介绍如何收看 RTSP 视频推流。

1. 下载并安装 VLC
   ![VLC-Main](/img/general-tutorial/rtsp/VLC-Main.webp)

2. 点击 媒体 - 打开网络串流 来输入 RTSP 推流地址

:::tip
启动 gst-rtsp-server 后会显示当前设备的 RTSP 链接，但仍需手动将 `127.0.0.1` 替换为可通讯的 IP 地址。
:::

![VLC-Open-RTSP](/img/general-tutorial/rtsp/VLC-Open-RTSP.webp)

3. 点击播放后即可查看 RTSP 远程推流内容
   ![VLC-View-RTSP](/img/general-tutorial/rtsp/VLC-View-RTSP.webp)
