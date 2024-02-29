---
sidebar_position: 10
---

# FAQ

## Hot Topic

### Question 2: My ROCK 5B doesn't boot, how to check if it's dead

To troubleshoot if ROCK 5B is defective in the following steps:

* Power off the ROCK 5B, remove eMMC module, SD card, NVMe SSD
* Press and hold the maskrom button[（label 32）](./hardware-design/hardware-interface)
* Plug the ROCK 5B USB C to PC with USB A to C cable, the Green LED should be solid on
Check if there is new USB device in the PC Device Manager, if yes, the ROCK 5B is live. If not, try other USB ports, we recommend to connect ROCK 5B to the back panel of the PC.

### Question 2: My ROCK 5B HDMI doesn't display anything

* you can manually add the HDMI resolution and framerate in the /boot/extlinux/extlinux.conf
* just add video=1920x1080@60 to the append line (just change the resolution and framerate to a resolution your monitor supports)

### Question 3: Radxa APT public key is not available

When I try to run apt update, i get following error:

```
root@rock-5b:~# apt update
Hit:1 http://security.debian.org/debian-security bullseye-security InRelease   
Hit:2 http://httpredir.debian.org/debian bullseye InRelease                    
Get:3 http://apt.radxa.com/bullseye-stable bullseye InRelease [2362 B]
Hit:4 http://httpredir.debian.org/debian bullseye-updates InRelease
Hit:5 http://httpredir.debian.org/debian bullseye-backports InRelease
Err:3 http://apt.radxa.com/bullseye-stable bullseye InRelease
  The following signatures couldn't be verified because the public key is not available: NO_PUBKEY 9B98116C9AA302C7
Reading package lists... Done
W: GPG error: http://apt.radxa.com/bullseye-stable bullseye InRelease: The following signatures couldn't be verified because the public key is not available: NO_PUBKEY 9B98116C9AA302C7
E: The repository 'http://apt.radxa.com/bullseye-stable bullseye InRelease' is not signed.
N: Updating from such a repository can't be done securely, and is therefore disabled by default.
N: See apt-secure(8) manpage for repository creation and user configuration details.
```

The reason is the public key has expired. You can execute the following command to get the new available.

```
sudo apt-get install -y wget
export DISTRO=bullseye-stable
wget -O - apt.radxa.com/$DISTRO/public.key | sudo apt-key add -
sudo apt-get update
```
