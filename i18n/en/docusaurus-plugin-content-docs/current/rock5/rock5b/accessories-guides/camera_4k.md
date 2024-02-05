---
sidebar_position: 4
---

# Using Camera 4K on ROCK 5B

![4K Camera Installation](/img/rock5b/rock5b-with-4k-camera-FPC.webp)  
![4K Camera Installation](/img/rock5b/rock5b-4k-camera-connected.webp)  
![4K Camera Installation](/img/rock5b/rock5b-4k-camera.webp)

- Prepare Radxa Camera 4K and connect to ROCK5B through FPC cable.

- Open the Kconsole terminal via the Application Launcher in the lower left corner and run the `rsetup` command:

```bash
radxa@rock-5b:~$ rsetup
```

- Enable Overlay of the Radxa camera 4K via [Device Tree Configuration](../os-config/rsetup#overlays).

:::caution [Caution]

1. Please enable the `[] Enable Radxa Camera 4K` item Overlay.
2. Quit and reboot after `[*] Enable Radxa Camera 4K` is successfully displayed for the configuration to take effect.  
   :::

## Test Radxa Camera 4K

You can open the camera preview using the terminal command.

```bash
gst-launch-1.0 v4l2src device=/dev/video11 io-mode=4 ! videoconvert ! video/x-raw,format=NV12,width=1920,height=1080 ! xvimagesink;
```

Take a picture using the following command.

```bash
gst-launch-1.0 v4l2src device=/dev/video11 io-mode=4 ! videoconvert ! video/x-raw,format=NV12,width=1920,height=1080 ! jpegenc ! multifilesink location=file.name.jpg;
```

Use the following command to take a video.

```bash
gst-launch-1.0 v4l2src num-buffers=512 device=/dev/video11 io-mode=4 ! videoconvert ! video/x-raw, format=NV12, width=1920, height=1080, framerate=30/1 ! tee name=t ! queue ! mpph264enc ! queue ! h264parse ! mpegtsmux ! filesink location=/home/radxa/file.name.mp4
```
