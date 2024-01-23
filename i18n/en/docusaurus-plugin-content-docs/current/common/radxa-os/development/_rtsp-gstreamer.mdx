---
sidebar_position: 20
---

# RTSP Remote Streaming Guide (based on Gstreamer)

## Preparation

1. Compatible Cameras
2. If using the ROCK 5B, you can also use the HDMI RX as a video source

:::caution
When using HDMI RX, gst-mppenc does not support NV24(YCbCr444) and RBG inputs currently, you need to switch the colour format of HDMI input to NV12(YCbCr420) or NV16(YCbCr422), or use [FFmpeg](./rtsp-ffmpeg) for streaming.
:::

## Server Configuration

### Installation of compilation dependencies

```bash
sudo apt update
sudo apt install libgstreamer-plugins-base1.0-dev libgstreamer-plugins-bad1.0-dev build-essential meson libcgroup-dev gobject-introspection libgirepository1.0-dev
```

### Get gst-rtsp-server source code

```bash
wget https://gstreamer.freedesktop.org/src/gst-rtsp-server/gst-rtsp-server-1.18.6.tar.xz
tar -xvf gst-rtsp-server-1.18.6.tar.xz
```

### Build gst-rtsp-server

```bash
cd gst-rtsp-server-1.18.6/
meson build
cd build
ninja
```

### Run gst-rtsp-server

:::info
Here we assume that `/dev/video0` is the video source you want to use. If your camera is assigned to a different name, replace the corresponding device name in the following command line.
:::

```bash
cd examples/
./test-launch --gst-debug-level=3 "( v4l2src device=/dev/video0 ! queue ! mpph265enc bps=51200000 rc-mode=vbr !  rtph265pay name=pay0 pt=97 )"
```

## Client Configuration

The following is an example of how to watch RTSP video stream by running [VLC](https://www.videolan.org/vlc/) under Windows.

1. Download and install VLC
   ![VLC-Main](/img/general-tutorial/rtsp/VLC-Main-en.webp)

2. Click "Media - Open Network Streaming" to enter the RTSP stream address.

:::tip
Starting gst-rtsp-server displays the RTSP link for the current device, but you still need to manually replace `127.0.0.1` with a communicable IP address.
:::

![VLC-Open-RTSP](/img/general-tutorial/rtsp/VLC-Open-RTSP-en.webp)

3. Click `Play` to view the RTSP remote streaming content.
   ![VLC-View-RTSP](/img/general-tutorial/rtsp/VLC-View-RTSP-en.webp)
