---
sidebar_position: 20
---

# RTSP Remote Streaming Guide (based on FFmpeg)

## Preparation

1. Compatible Cameras
2. If using the ROCK 5B, you can also use the HDMI RX as a video source

:::caution
Input sources with lower than 720P resolution may cause encoding failure when using HDMI RX.
:::

## Server Configuration

### Installation of compilation dependencies

```bash
sudo apt update
sudo apt install librockchip-mpp-dev librockchip-vpu0 librga-dev libyuv-dev libdrm-dev pkg-config libx264-dev build-essential git
```

### Compile and install the latest MPP

```bash
git clone https://github.com/rockchip-linux/mpp
pushd mpp
cmake -DRKPLATFORM=ON -DHAVE_DRM=ON && make -j$(nproc)
sudo make install
sudo cp ./mpp/librockchip_mpp.so* /lib/aarch64-linux-gnu
sudo cp ./mpp/legacy/librockchip_vpu.so* /lib/aarch64-linux-gnu
popd
```

### Compile and install FFmpeg

```bash
git clone https://github.com/hbiyik/FFmpeg.git
pushd FFmpeg/
./configure --enable-rkmpp --enable-version3 --enable-libdrm --enable-libx264 --enable-gpl
make -j$(nproc)
sudo make install
popd
```

### Running mediamtx and FFmpeg

:::info
Here we assume that `/dev/video0` is the video source you want to use. If your camera is assigned to a different name, replace the corresponding device name in the following command line.
:::

```bash
wget https://github.com/bluenviron/mediamtx/releases/download/v1.0.0/mediamtx_v1.0.0_linux_arm64v8.tar.gz
tar -xzvf mediamtx_v1.0.0_linux_arm64v8.tar.gz
nohup ./mediamtx &
sudo ffmpeg -re -f v4l2 -i /dev/video0 -c:v hevc -rc_mode 0 -level 30 -f rtsp rtsp://0.0.0.0:8554/stream
```

## Client Configuration

The following is an example of how to watch RTSP video stream by running [VLC](https://www.videolan.org/vlc/) under Windows.

1. Download and install VLC
   ![VLC-Main](/img/general-tutorial/rtsp/VLC-Main-en.webp)

1. Click "Media - Open Network Streaming" to enter the RTSP stream address.

:::tip
A communicable IP address is necessary.
:::

![VLC-Open-RTSP](/img/general-tutorial/rtsp/VLC-Open-RTSP-en.webp)

3. Click `Play` to view the RTSP remote streaming content.
   ![VLC-View-RTSP](/img/general-tutorial/rtsp/VLC-View-RTSP-en.webp)
