---
sidebar_position: 15
---

# GPIO 使用

## GPIO 定义

<div className='gpio-pinout'>

| Function5 | Function4 | Function3 | Function2 | Function1 |              Pin#               |              Pin#               | Function1 | Function2 | Function3 | Function4 | Function5 |
| --------- | :-------: | :-------: | :-------: | :-------: | :-----------------------------: | :-----------------------------: | :-------: | :-------: | :-------: | :-------: | --------- |
|           |           |           |           |   +3.3V   | <div className='yellow'>1</div> |  <div className='red'>40</div>  |   +5.0V   |           |           |           |           |
| PWM6 A    | I2C0 SDA  | UART0 TX  |  SPI1 RX  |  GPIO28   | <div className='green'>2</div>  |  <div className='red'>39</div>  |   +5.0V   |           |           |           |           |
| PWM6 B    | I2C0 SCL  | UART0 RX  | SPI1 CSn  |  GPIO29   | <div className='green'>3</div>  | <div className='black'>38</div> |    GND    |           |           |           |           |
| PWM2 A    | I2C0 SDA  | UART1 TX  |  SPI0 RX  |  GPIO04   | <div className='green'>4</div>  | <div className='green'>37</div> |  GPIO20   |  SPI0 RX  | UART1 TX  | I2C0 SDA  | PWM2 A    |
|           |           |           |           |    GND    | <div className='black'>5</div>  | <div className='green'>36</div> |  GPIO21   | SPI0 CSn  | UART1 RX  | I2C0 SCL  | PWM2 B    |
| PWM2 B    | I2C0 SCL  | UART1 RX  | SPI0 Csn  |  GPIO05   | <div className='green'>6</div>  | <div className='green'>35</div> |  GPIO23   |  SPI0 TX  |           |           |           |
| PWM3 A    | I2C1 SDA  | UART1 CTS | SPI0 SCK  |  GPIO06   | <div className='green'>7</div>  | <div className='black'>34</div> |    GND    |           |           |           |           |
| PWM1 B    | I2C1 SCL  | UART0 RTS |  SPI0 TX  |  GPIO03   | <div className='green'>8</div>  | <div className='green'>33</div> |  GPIO22   | SPI0 SCK  | UART1 CTS | I2C1 SDA  | PWM3 A    |
|           |           |           |           |   +3.3V   | <div className='yellow'>9</div> | <div className='green'>32</div> |  GPIO27   |  SPI1 TX  | UART1 RTS | I2C1 SCL  | PWM5 B    |
| PWM5 B    | I2C1 SCL  | UART1 RTS |  SPI1 TX  |  GPIO11   | <div className='green'>10</div> | <div className='black'>31</div> |    GND    |           |           |           |           |
| PWM4 A    | I2C0 SDA  | UART1 TX  |  SPI1 RX  |  GPIO08   | <div className='green'>11</div> | <div className='green'>30</div> |  GPIO24   |  SPI1 RX  | UART1 TX  | I2C0 SDA  | PWM4 A    |
| PWM5 A    | I2C1 SDA  | UART1 CTS | SPI1 SCK  |  GPIO10   | <div className='green'>12</div> | <div className='green'>29</div> |  GPIO09   | SPI1 CSn  | UART1 RX  | I2C0 SCL  | PWM4 B    |
|           |           |           |           |    GND    | <div className='black'>13</div> | <div className='green'>28</div> |  GPIO18   | SPI0 SCK  | UART0 CTS | I2C1 SDA  | PWM1 A    |
| PWM0 A    | I2C0 SDA  | UART0 TX  |  SPI0 RX  |  GPIO16   | <div className='green'>14</div> | <div className='green'>27</div> |  GPIO17   | SPI0 CSn  | UART0 RX  | I2C0 SCL  | PWM0 B    |
| PWM3 B    | I2C1 SCL  | UART1 RTS |  SPI0 TX  |  GPIO07   | <div className='green'>15</div> | <div className='black'>26</div> |    GND    |           |           |           |           |
| PWM6 A    | I2C0 SDA  | UART0 TX  |  SPI1 RX  |  GPIO12   | <div className='green'>16</div> | <div className='green'>25</div> |  GPIO19   |  SPI0 TX  | UART0 RTS | I2C1 SCL  | PWM1 B    |
| PWM6 B    | I2C0 SCL  | UART0 RX  | SPI1 CSn  |  GPIO13   | <div className='green'>17</div> | <div className='black'>24</div> |    GND    |           |           |           |           |
| PWM7 B    | I2C1 SCL  | UART0 RTS |  SPI1 TX  |  GPIO15   | <div className='green'>18</div> | <div className='green'>23</div> |  GPIO26   | SPI1 SCK  | UART1 CTS | I2C1 SDA  | PWM5 A    |
| PWM7 A    | I2C1 SDA  | UART0 CTS | SPI1 SCK  |  GPIO14   | <div className='green'>19</div> | <div className='green'>22</div> |  GPIO02   | SPI0 SCK  | UART0 CTS | I2C1 SDA  | PWM1 A    |
|           |           |           |           |    GND    | <div className='black'>20</div> | <div className='green'>21</div> |  GPIO25   | SPI1 CSn  | UART1 RX  | I2C0 SCL  | PWM4 B    |

</div>

## RP2040 程序编译

### 下载

```
    $ git clone https://github.com/raspberrypi/pico-sdk.git --branch master
    $ cd pico-sdk
    $ git submodule update --init    // USB functionality
    $ cd ..
    $ git clone https://github.com/raspberrypi/pico-examples.git --branch master
```

### 编译

```
    cd pico-examples
    mkdir build
    cd build
    export PICO_SDK_PATH=../../pico-sdk
    $ cmake ..
    cd blink
    make -j4
```

### 使用方法

- 例如： pico-examples/blink/blink.c

```
int main() {
#ifndef PICO_DEFAULT_LED_PIN
#warning blink example requires a board with a regular LED
#else
    //const uint LED_PIN = PICO_DEFAULT_LED_PIN;
    const uint LED_PIN = 28; // 这里我们改成 28 (也就是 pin 3)
    gpio_init(LED_PIN);
    gpio_set_dir(LED_PIN, GPIO_OUT);
    while (true) {
        gpio_put(LED_PIN, 1);
        sleep_ms(250);
        gpio_put(LED_PIN, 0);
        sleep_ms(250);
    }
#endif
}
```

- 修改好之后，在 pico-examples/build/ 目录下执行

```
make
```

- 编译好的程序在 pico-examples/build/blink/ 目录下， 我们需要的是 .uf2 结尾的文件

### 烧录

- 新建一个 usb.sh 文件， 用于打开 rp2040 usb

```
ps@ps-palmshell:~$ cat usb.sh
#! /bin/bash

sudo gpioset gpiochip1 60=1
sudo gpioset gpiochip1 61=1

sleep 1

sudo gpioset gpiochip1 60=0
sudo gpioset gpiochip1 61=0
```

- 执行一下 usb.sh 程序， RP2040 将以 usb 设备形式出现

- 将 .uf2 文件拖入到该 usb 设备中， usb 设备消失后，程序就开始执行

![Pico Example](/img/x/x2l/flash_program.webp)

## 安装 micro-python

- 下载[Micro Python](https://micropython.org/download/RPI_PICO/)，下载 RPI_PICO_W-20231027-v1.22.0-preview.61.g6cd99910c.uf2 完成
- 打开 rp2040 usb 设备（source usb.sh）
- 将 RPI_PICO_W-20231027-v1.22.0-preview.61.g6cd99910c.uf2 拖入 usb 中，等 usb 设备消失后即生效

- 安装 Thonny ide

```
sudo apt-get install Thonny -y
```

- 打开 Thonny ide 开始写 micro-python 程序，至此，我们已经成功搭建 micro-python 环境

![Flash Micro Python](/img/x/x2l/flash_micro_python.webp)
