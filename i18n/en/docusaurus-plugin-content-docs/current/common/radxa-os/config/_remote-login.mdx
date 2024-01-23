---
sidebar_position: 60
---

# Remote login

## SSH

This is a tutorial on how to log in to ROCK 5A remotely using SSH from a Windows computer.

To connect to a Debian system via the SSH protocol, you need to make sure that an SSH server is installed on the Debian system. You can do this by following these steps:

1.  Make sure that an SSH server is installed on the Debian system. Run the following command in a terminal:

        sudo service ssh status

    If the SSH server is not installed, you can use the following command to install it:

        sudo apt-get update
        sudo apt-get install ssh

2.  Open the terminal program and enter the following command:

        ssh [username]@[hostname]
        or
        ssh [username]@[IP address]

    Example:

        ssh radxa@192.168.1.100

3.  You need to enter the user password to successfully connect to the Debian system.
    This is a basic SSH connection process. You can use other SSH options for more advanced connections.

## Remote Desktop - KDE Desktop

This is a tutorial on how to access your system remotely from a Windows computer using VNC.

### Installing VNC Server

1. Open the Terminal application and enter the following command to update the package list:

```bash
sudo apt-get update
```

2. Enter the following command to install TigerVNC Server:

```bash
sudo apt-get install tigervnc-standale-server
```

3. Install the dbus-x11 dependencies to ensure proper connection to your VNC server:

```bash
sudo apt-get install dbus-x11
```

4. After installation complete the initial configuration of the VNC server, use the vncserver command to set the security password and create the initial configuration file:

```bash
vncserver
```

:::note
Would you like to enter a view-only password (y/n)? n Prompt for view-only password, it is recommended to select no and enter n, so that the remote can operate, not just watch, please according to their actual situation
:::

### Configure the VNC server

Once TigerVNC starts, it will create a VNC session with the IP address and port number of the VNC server (usually 5901), because to change the way the VNC server is configured, first stop the VNC server instance running on port 5901 with the following command:

```bash
vncserver -kill :1
```

2. Run the vncserver command to generate an xstartup in the ~/.vnc directory, if not, please create it manually and give it executable privileges:

```bash
touch ~/.vnc/xstartup
chmod +x ~/.vnc/xstartup
```

Edit the xstartup configuration file as follows:

```bash
radxa@rock-5b:~$ cat ~/.vnc/xstartup
#! /bin/sh
unset SESSION_MANAGER
unset DBUS_SESSION_BUS_ADDRESS
unset XDG_RUNTIME_DIR
/etc/X11/xinit/xinitrc
[ -x /etc/vnc/xstartup ] && exec /etc/vnc/xstartup
[ -r $HOME/.Xresources ] && xrdb $HOME/.Xresources
xsetroot -solid grey
#vncconfig -iconic &
startkde &
```

3. After the configuration is edited, restart the VNC server:

```shell
vncserver -localhost no
```

4. View the VNC server:

```shell
vncserver -list

TigerVNC server sessions.
X DISPLAY # RFB PORT # PROCESS ID SERVER
:1 5901 2160 Xtigervnc
:2 5902 2872 Xtigervnc
```

5. Test the connection on the VNC viewer: On your Windows PC, open the VNC viewer, enter the IP address and port number of your product, and then authenticate using the user name and password of the VNC server.

### Installing the VNC viewer on your Windows PC

1. Go to the VNC Viewer download page on your web browser, e.g. https://www.realvnc.com/en/connect/download/viewer/
2. Download and install the VNC viewer.

### Connection setup

1. On the VNC viewer, enter the IP address and port number of the product.
2. Use the user name and password of the VNC server to authenticate.
3. After successful connection, you can control remotely.
