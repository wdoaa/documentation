---
title: "GPIO Tutorials"
description: "GPIO Tutorials"
sidebar_position: 10
slug: /x/x2l/hardware/x2l-gpio
---

# GPIO Tutorials

## GPIO Definition

<div className='gpio-pinout'>

| Function5 | Function4 | Function3 | Function2 | Function1 |               Pin#               |              Pin#               | Function1 | Function2 | Function3 | Function4 | Function5 |
| --------- | :-------: | :-------: | :-------: | :-------: | :------------------------------: | :-----------------------------: | :-------: | :-------: | :-------: | :-------: | --------- |
|           |           |           |           |   +3.3V   | <div className='yellow'>1</div>  |  <div className='red'>2</div>   |   +5.0V   |           |           |           |           |
| PWM6 A    | I2C0 SDA  | UART0 TX  |  SPI1 RX  |  GPIO28   |  <div className='green'>3</div>  |  <div className='red'>4</div>   |   +5.0V   |           |           |           |           |
| PWM6 B    | I2C0 SCL  | UART0 RX  | SPI1 CSn  |  GPIO29   |  <div className='green'>5</div>  | <div className='black'>6</div>  |    GND    |           |           |           |           |
| PWM2 A    | I2C0 SDA  | UART1 TX  |  SPI0 RX  |  GPIO04   |  <div className='green'>7</div>  | <div className='green'>8</div>  |  GPIO21   | SPI0 CSn  | UART1 RX  | I2C0 SCL  | PWM2 B    |
|           |           |           |           |    GND    |  <div className='black'>9</div>  | <div className='green'>10</div> |  GPIO20   |  SPI0 RX  | UART1 TX  | I2C0 SDA  | PWM2 A    |
| PWM2 B    | I2C0 SCL  | UART1 RX  | SPI0 Csn  |  GPIO05   | <div className='green'>11</div>  | <div className='green'>12</div> |  GPIO23   |  SPI0 TX  | UART1 RTS | I2C1 SCL  | PWM3 B    |
| PWM3 A    | I2C1 SDA  | UART1 CTS | SPI0 SCK  |  GPIO06   | <div className='green'>13</div>  | <div className='black'>14</div> |    GND    |           |           |           |           |
| PWM1 B    | I2C1 SCL  | UART0 RTS |  SPI0 TX  |  GPIO03   | <div className='green'>15</div>  | <div className='green'>16</div> |  GPIO22   | SPI0 SCK  | UART1 CTS | I2C1 SDA  | PWM3 A    |
|           |           |           |           |   +3.3V   | <div className='yellow'>17</div> | <div className='green'>18</div> |  GPIO27   |  SPI1 TX  | UART1 RTS | I2C1 SCL  | PWM5 B    |
| PWM5 B    | I2C1 SCL  | UART1 RTS |  SPI1 TX  |  GPIO11   | <div className='green'>19</div>  | <div className='black'>20</div> |    GND    |           |           |           |           |
| PWM4 A    | I2C0 SDA  | UART1 TX  |  SPI1 RX  |  GPIO08   | <div className='green'>21</div>  | <div className='green'>22</div> |  GPIO24   |  SPI1 RX  | UART1 TX  | I2C0 SDA  | PWM4 A    |
| PWM5 A    | I2C1 SDA  | UART1 CTS | SPI1 SCK  |  GPIO10   | <div className='green'>23</div>  | <div className='green'>24</div> |  GPIO09   | SPI1 CSn  | UART1 RX  | I2C0 SCL  | PWM4 B    |
|           |           |           |           |    GND    | <div className='black'>25</div>  | <div className='green'>26</div> |  GPIO18   | SPI0 SCK  | UART0 CTS | I2C1 SDA  | PWM1 A    |
| PWM0 A    | I2C0 SDA  | UART0 TX  |  SPI0 RX  |  GPIO16   |  <div className='blue'>27</div>  | <div className='blue'>28</div>  |  GPIO17   | SPI0 CSn  | UART0 RX  | I2C0 SCL  | PWM0 B    |
| PWM3 B    | I2C1 SCL  | UART1 RTS |  SPI0 TX  |  GPIO07   | <div className='green'>29</div>  | <div className='black'>30</div> |    GND    |           |           |           |           |
| PWM6 A    | I2C0 SDA  | UART0 TX  |  SPI1 RX  |  GPIO12   | <div className='green'>31</div>  | <div className='green'>32</div> |  GPIO19   |  SPI0 TX  | UART0 RTS | I2C1 SCL  | PWM1 B    |
| PWM6 B    | I2C0 SCL  | UART0 RX  | SPI1 CSn  |  GPIO13   | <div className='green'>33</div>  | <div className='black'>34</div> |    GND    |           |           |           |           |
| PWM7 B    | I2C1 SCL  | UART0 RTS |  SPI1 TX  |  GPIO15   | <div className='green'>35</div>  | <div className='green'>36</div> |  GPIO26   | SPI1 SCK  | UART1 CTS | I2C1 SDA  | PWM5 A    |
| PWM7 A    | I2C1 SDA  | UART0 CTS | SPI1 SCK  |  GPIO14   | <div className='green'>37</div>  | <div className='green'>38</div> |  GPIO02   | SPI0 SCK  | UART0 CTS | I2C1 SDA  | PWM1 A    |
|           |           |           |           |    GND    | <div className='black'>39</div>  | <div className='green'>40</div> |  GPIO25   | SPI1 CSn  | UART1 RX  | I2C0 SCL  | PWM4 B    |

</div>

## RP2040 Program compilation

### Download

```
    $ git clone https://github.com/raspberrypi/pico-sdk.git --branch master
    $ cd pico-sdk
    $ git submodule update --init    // USB functionality
    $ cd ..
    $ git clone https://github.com/raspberrypi/pico-examples.git --branch master
```

### Compiler

```
    cd pico-examples
    mkdir build
    cd build
    export PICO_SDK_PATH=../../pico-sdk
    $ cmake ..
    cd blink
    make -j4
```

### Usage

- For example: pico-examples/blink/blink.c

```
int main() {
#ifndef PICO_DEFAULT_LED_PIN
#warning blink example requires a board with a regular LED
#else
    //const uint LED_PIN = PICO_DEFAULT_LED_PIN;
    const uint LED_PIN = 28; //  Here we change it to 28 (i.e. pin 3).
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

- After modifying it, execute the following in the pico-examples/build/ directory

```
make
```

- The compiled program is in the pico-examples/build/blink/ directory, and we need files that end in .uf2.

### Flashing

- Create a new usb.sh file to open the rp2040 usb.

```
ps@ps-palmshell:~$ cat usb.sh
#! /bin/bash

sudo gpioset gpiochip1 60=1
sudo gpioset gpiochip1 61=1

sleep 1

sudo gpioset gpiochip1 60=0
sudo gpioset gpiochip1 61=0
```

- Execute the usb.sh program and the RP2040 will appear as a usb device.

- Drag the .uf2 file into the usb device, the usb device disappears and the program starts executing.

![Pico Example](/img/x/x2l/flash_program.webp)

## Install micro-python

- Download [Micro Python](https://micropython.org/download/RPI_PICO/)，Download RPI_PICO_W-20231027-v1.22.0-preview.61.g6cd99910c.uf2 Done!
- Open the rp2040 usb device (source usb.sh)
- Drag RPI_PICO_W-20231027-v1.22.0-preview.61.g6cd99910c.uf2 into the usb and wait for the usb device to disappear to take effect.

- Install Thonny ide

```
sudo apt-get install Thonny -y
```

- Open the Thonny ide and start writing the micro-python program. At this point, we have successfully set up the micro-python environment.

![Flash Micro Python](/img/x/x2l/flash_micro_python.webp)
