---
sidebar_position: 20
---

# RTSP 远程推流教程(基于 FFmpeg)

## 需求

1. 兼容摄像头
2. 如使用 ROCK 5B，也可使用 HDMI RX 作为视频源

:::caution
使用 HDMI RX 时，低于 720P 分辨率的输入源可能会导致编码失败
:::

## 服务端配置

### 安装编译依赖

```bash
sudo apt update
sudo apt install librockchip-mpp-dev librockchip-vpu0 librga-dev libyuv-dev libdrm-dev pkg-config libx264-dev build-essential git cmake
```

### 编译并安装最新 MPP

```bash
git clone https://github.com/rockchip-linux/mpp
pushd mpp
cmake -DRKPLATFORM=ON -DHAVE_DRM=ON && make -j$(nproc)
sudo make install
sudo cp ./mpp/librockchip_mpp.so* /lib/aarch64-linux-gnu
sudo cp ./mpp/legacy/librockchip_vpu.so* /lib/aarch64-linux-gnu
popd
```

### 编译并安装 FFmpeg

```bash
git clone https://github.com/hbiyik/FFmpeg.git
pushd FFmpeg/
./configure --enable-rkmpp --enable-version3 --enable-libdrm --enable-libx264 --enable-gpl
make -j$(nproc)
sudo make install
popd
```

### 运行 mediamtx 与 FFmpeg

:::info
此处我们假定 `/dev/video0` 是你想要使用的视频源。如果你的摄像头被分配到了其他的名称下，请替换以下命令行中对应的文件名。
:::

```bash
wget https://github.com/bluenviron/mediamtx/releases/download/v1.0.0/mediamtx_v1.0.0_linux_arm64v8.tar.gz
tar -xzvf mediamtx_v1.0.0_linux_arm64v8.tar.gz
nohup ./mediamtx &
sudo ffmpeg -re -f v4l2 -i /dev/video0 -c:v hevc -rc_mode 0 -level 30 -f rtsp rtsp://0.0.0.0:8554/stream
```

## 客户端配置

以下以 Windows 下运行 [VLC](https://www.videolan.org/vlc/) 为例，介绍如何收看 RTSP 视频推流。

1. 下载并安装 VLC
   ![VLC-Main](/img/general-tutorial/rtsp/VLC-Main.webp)

2. 点击 媒体 - 打开网络串流 来输入 RTSP 推流地址

:::tip
需使用可通讯的 IP 地址。
:::

![VLC-Open-RTSP](/img/general-tutorial/rtsp/VLC-Open-RTSP.webp)

1. 点击播放后即可查看 RTSP 远程推流内容
   ![VLC-View-RTSP](/img/general-tutorial/rtsp/VLC-View-RTSP.webp)
