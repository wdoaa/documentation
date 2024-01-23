---
sidebar_position: 60
---

# 远程登录

## SSH

这是一个教程，介绍如何从 Windows 计算机使用 SSH 远程登录 ROCK 5A。

通过SSH协议连接到Debian系统，需要确保Debian系统上已经安装了SSH服务器。 您可以按照以下步骤操作：

1.  确保 Debian 系统上已经安装了 SSH 服务器。 在终端中运行以下命令：

        sudo service ssh status

    如果没有安装 SSH 服务器，可以使用以下命令安装：

        sudo apt-get update
        sudo apt-get install ssh

2.  打开终端程序并输入以下命令：

        ssh [username]@[hostname]
        or
        ssh [username]@[IP address]

    例如：

        ssh radxa@192.168.1.100

3.  需要输入用户密码才能成功连接到Debian系统。
    这是一个基本的 SSH 连接过程。 您可以使用其他 SSH 选项进行更高级的连接。

## 远程桌面-KDE桌面

这是一个教程，介绍如何从 Windows 计算机使用 VNC 远程访问系统。

### 安装 VNC 服务器

1. 打开终端应用程序并输入以下命令以更新包列表:

```
sudo apt-get update
```

2. 输入以下命令安装TigerVNC Server:

```
sudo apt-get install tigervnc-standalone-server
```

3. 安装dbus-x11依赖项以确保与你的VNC服务器的正确连接：

```
sudo apt-get install dbus-x11
```

4. 安装后完成VNC服务器的初始配置，请使用vncserver命令来设置安全密码并创建初始配置文件：

```
vncserver
```

:::note
Would you like to enter a view-only password (y/n)? n 提示是否只是观看，建议选择no，输入n，这样远程就可以操作，而不是仅仅观看，请根据自身实际情况
:::

### 配置 VNC 服务器

1. 一旦 TigerVNC 启动，它将创建一个 VNC 会话，其中包含 VNC 服务器的 IP 地址和端口号（通常为 5901）,因与要改变VNC服务器的配置方式，首先用以下命令停止运行在5901端口的VNC服务器实例：

```
vncserver -kill :1
```

2. 运行vncserver命令时会在~/.vnc目录下生成一个xstartup，没有生成请手动创建并赋予可执行权限：

```
touch ~/.vnc/xstartup
chmod +x ~/.vnc/xstartup
```

编辑xstartup配置文件如下：

```
radxa@rock-5b:~$ cat ~/.vnc/xstartup
#!/bin/sh
unset SESSION_MANAGER
unset DBUS_SESSION_BUS_ADDRESS
unset XDG_RUNTIME_DIR
/etc/X11/xinit/xinitrc
[ -x /etc/vnc/xstartup  ] && exec /etc/vnc/xstartup
[ -r $HOME/.Xresources ] && xrdb $HOME/.Xresources
xsetroot -solid grey
#vncconfig -iconic &
startkde &
```

3. 配置编辑好后，重新启动VNC服务器：

```
vncserver -localhost no
```

4. 查看VNC服务器：

```
vncserver -list
TigerVNC server sessions:
X DISPLAY #	RFB PORT #	PROCESS ID	SERVER
:1         	5901      	2160      	Xtigervnc
:2         	5902      	2872      	Xtigervnc
```

5. 在 VNC 查看器上测试连接：在您的 Windows PC 上，打开 VNC 查看器，输入您产品的 IP 地址和端口号，然后使用 VNC 服务器的用户名和密码进行身份验证。

### 在 Windows PC 上安装 VNC 查看器

1. 转到 Web 浏览器上的 VNC 查看器下载页面, e.g. https://www.realvnc.com/en/connect/download/viewer/
2. 下载并安装 VNC 查看器。

### 连接设置

1. 在 VNC 查看器上，输入产品的 IP 地址和端口号。
2. 使用 VNC 服务器的用户名和密码进行身份验证。
3. 连接成功后，即可远程控制。
