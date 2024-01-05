# UART 串口控制台

ROCK 5 ITX 有预留 UART 串口通信接口，以方便排查系统早期启动阶段的问题。

## 必要准备

- 个人电脑
- USB 转 TTL 串口线

![USB to TTL](/img/accessories/600px-Usb2ttl-cable-definition.webp)

:::tip

<Section compatible="aml" platform={props.platform}>

</Section>

<Section compatible="rk" platform={props.platform}>
基于 Rockchip 芯片的瑞莎产品，UART 默认配置为 1500000n8，无流量控制。

请检查您的 USB 转 TTL 串口线是否支持 1.5M 波特率：

- 基于 [CP210X](https://www.silabs.com/interface/usb-bridges) 和 [PL2303x](https://www.prolific.com.tw/US/index.aspx) 的部分产品有波特率限制。
- 基于 FT232RL 的部分产品有[电源问题](https://forum.radxa.com/t/u-boot-cant-boot-with-serial-console-attached/7684)。

</Section>

下文使用基于 [CH340](http://wch-ic.com/products/CH340.html) 的串口线进行描述。
:::

## 串口连接

如下所示连接 USB 转 TTL 串口线：

| DEBUG 串口      | 连接  | 串口线 |
| --------------- | ----- | ------ |
| **GND** (pin 1) | <---> | 黑色线 |
| **TX** (pin 2)  | <---> | 白色线 |
| **RX** (pin 3)  | <---> | 绿色线 |

![USB to TTL connected](/img/rock5itx/rock5itx-debug-console.webp)

<Serail platform="rk" />

## 主机串口连接主板

<Section compatible="rk" platform={props.platform}>
基于 Rockchip 芯片的瑞莎产品的串口默认配置如下：

```
baudrate: 1500000
data bit: 8
stop bit: 1
parity  : none
flow control: none
```

</Section>

### minicom

**_支持 Linux_**

1. 将串口 USB 端插入主机 PC 后，请先找到串口设备：

在终端输入 `dmesg | tail` 会得到类似下面的打印：

```bash
[10.654076] usb 1-6.4.3: new full-speed USB device number 103 using xhci_hcd
[10.755730] usb 1-6.4.3: New USB device found, idVendor=0403, idProduct=6001
[10.755732] usb 1-6.4.3: New USB device strings: Mfr=1, Product=2, SerialNumber=0
[10.755733] usb 1-6.4.3: Product: USB <-> Serial
[10.755734] usb 1-6.4.3: Manufacturer: FTDI
[10.756728] ftdi_sio 1-6.4.3:1.0: FTDI USB Serial Device converter detected
[10.756750] usb 1-6.4.3: Detected FT232BM
[10.757195] usb 1-6.4.3: FTDI USB Serial Device converter now attached to ttyUSB0
```

依照最后一行所示，**/dev/ttyUSB0** 即是新插入的串口设备。

:::tip
可能存在没有权限读写串口的情况。

**临时处理：通过 chmod 命令修改权限**

```bash
sudo chmod 777 /dev/ttyUSB0
```

**永久处理：通过将当前用户加入 dialout 组**

```bash
sudo usermod -aG dialout $USER
```

:::

2. 安装 minicom：

```bash
sudo apt-get update
sudo apt-get install minicom
```

3. 设置 minicom

首先将当前非 root 或者不使用 sudo 的用户加入 plugdev 组

```bash
sudo usermod -aG plugdev $USER
```

编辑 ~/.bashrc，添加以下参数，重新打开新的终端后即可生效。

```bash
alias minicom='minicom -w -t xterm -l -R UTF-8'
```

<Section compatible="rk" platform={props.platform}>
创建并且编辑文件 ~/.minirc.1500000-usb0，添加下列内容：

```
pu port             /dev/ttyUSB0
pu baudrate         1500000
pu bits             8
pu parity           N
pu stopbits         1
pu rtscts           No
```

4. 执行以下命令以连接设备，指定参数 usb0-1500000 来使用上面的配置。

```bash
minicom 1500000-usb0
```

</Section>

### Putty

**_支持 Windows_**

1. 将 USB 转 TTL 串口线的 USB 一端插入 Windows PC。 查看**设备管理器**，您可以找到 COM 编号。 这里是 COM3。

2. 在 Windows PC 上启动应用程序 Putty，并按如下方式进行设置：

   - 在左边栏目中选择Session，将串行线路设置为 COM3，波特率设置 1500000，连接类型为 Serial。
   - 在 Saved Sessions 列中写入 rockchip ，然后按 Save。

   ![Putty](/img/configuration/Putty-setting-session.webp)

3. 在左边栏目选择最底下的 Serial 并按照以下参数配置：

   ![Putty](/img/configuration/Putty-setting-serial.webp)

4. 设置完成后，点击 Open 打开串口，确保TTL端正确接入之后，接通主板的电源即可。

### Tabby

**_支持 Windows、Linux、MacOS_**

1. 打开 Tabby 后，点击图中红色方框：

   ![Tabby-Setting-01](/img/configuration/rock-5b-tabby-01.webp)

2. 下拉找到自动识别的串口设备，点击打开：

   ![Tabby-Setting-02](/img/configuration/rock-5b-tabby-02.webp)

3. 选择波特率 1500000：

   ![Tabby-Setting-03](/img/configuration/rock-5b-tabby-03.webp)

4. 显示串口打开即可。这里存在 Linux 无权限读取串口，请查看该页面下 minicom 的串口权限设置方法。

   ![Tabby-Setting-04](/img/configuration/rock-5b-tabby-04.webp)

### Picocom

**_支持 MacOS_**

1. 安装 picocom

```bash
% brew install --build-from-source radxa/picocom/picocom
```

2. 开启 picocom

```bash
% picocom -b 1500000 -d 8 /dev/tty.usbserial-2130
```

## FAQs

1. 使用调试控制台时，屏幕上有系统启动信息，但无法使用键盘输入文字？
   可能是默认开启了 Hardware Flow Control 。关闭 Hardware Flow Control后应能恢复正常。