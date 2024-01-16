---
sidebar_position: 4
---

# Hardware interface description

## Interface overview

- **ZERO**
  ![Radxa ZERO](/img/zero/zero/Zero_ports.webp)

## 40 PIN GPIO

#### GPIO interface

ZERO provides a 40-pin GPIO header, which is compatible with most SBC accessories on the market.

**Tips: Actual compatibility is based on usage **

<div className='gpio_style'>

:::caution
Depending on the hardware version, one of the pins 35 and 38 is connected to the power LED instead of the 40-pin header. If your design uses these pins, please check the hardware version before purchasing.  
GPIOAO_8 and GPIOAO_10 are available in hardware versions v1.51 and higher.  
GPIOA_14 and GPIOA_15 are connected to pull-up resistors and USB-C controllers and therefore cannot be used for general GPIOs.  
Pin 22 (GPIOC_7) and pin 36 (GPIOH_8) are open-drain pins. This means that they need to be connected to GND or VCC (floating state undefined) when used as inputs, and they need an external pull-up when used as inputs. In addition, GPIOH_8 utilizes a 5V logic level.
:::

| GPIO number |   Function4   |   Function3   |   Function2   | Function1  |               Pin#               |              Pin#               | Function1  |                  Function2                  |   Function3   |   Function4   | GPIO number |
| ----------- | :-----------: | :-----------: | :-----------: | :--------: | :------------------------------: | :-----------------------------: | :--------: | :-----------------------------------------: | :-----------: | :-----------: | ----------- |
|             |               |               |               |   +3.3V    | <div className='yellow'>1</div>  |  <div className='red'>2</div>   |   +5.0V    |                                             |               |               |             |
| 490         |               |               | I2C_EE_M3_SDA |  GPIOA_14  |  <div className='green'>3</div>  |  <div className='red'>4</div>   |   +5.0V    |                                             |               |               |             |
| 491         |               |               | I2C_EE_M3_SCL |  GPIOA_15  |  <div className='green'>5</div>  | <div className='black'>6</div>  |    GND     |                                             |               |               |             |
| 415         | I2C_AO_S0_SDA | UART_AO_B_RX  | I2C_AO_M0_SDA |  GPIOAO_3  |  <div className='green'>7</div>  | <div className='green'>8</div>  |  GPIOAO_0  | <div className='orange'>UART_AO_A_TXD</div> |               |               | 412         |
|             |               |               |               |    GND     |  <div className='black'>9</div>  | <div className='green'>10</div> |  GPIOAO_1  | <div className='orange'>UART_AO_A_RXD</div> |               |               | 413         |
| 414         | I2C_AO_S0_SCL | UART_AO_B_TX  | I2C_AO_M0_SCL |  GPIOAO_2  | <div className='green'>11</div>  | <div className='green'>12</div> |  GPIOX_9   |                 SPI_A_MISO                  |    TDMA_D0    |               | 501         |
| 503         |   TDMA_SCLK   | I2C_EE_M1_SCL |  SPI_A_SCLK   |  GPIOX_11  | <div className='green'>13</div>  | <div className='black'>14</div> |    GND     |                                             |               |               |             |
|             |               |               |               | SARADC_CH1 | <div className='green'>15</div>  | <div className='green'>16</div> |  GPIOX_10  |                  SPI_A_SS0                  | I2C_EE_M1_SDA |    TDMA_FS    | 502         |
|             |               |               |               |   +3.3V    | <div className='yellow'>17</div> | <div className='green'>18</div> |  GPIOX_8   |                 SPI_A_MOSI                  |     PWM_C     |    TDMA_D1    | 500         |
| 447         |               |  SPI_B_MOSI   | UART_EE_C_RTS |  GPIOH_4   | <div className='green'>19</div>  | <div className='black'>20</div> |    GND     |                                             |               |               |             |
| 448         |     PWM_F     |  SPI_B_MISO   | UART_EE_C_CTS |  GPIOH_5   | <div className='green'>21</div>  | <div className='green'>22</div> |  GPIOC_7   |                                             |               |               | 475         |
| 450         | I2C_EE_M1_SCL |  SPI_B_SCLK   | UART_EE_C_TX  |  GPIOH_7   | <div className='green'>23</div>  | <div className='green'>24</div> |  GPIOH_6   |                UART_EE_C_RX                 |   SPI_B_SS0   | I2C_EE_M1_SDA | 449         |
|             |               |               |               |    GND     | <div className='black'>25</div>  | <div className='green'>26</div> | SARADC_CH2 |                                             |               |               |             |
| 415         | I2C_AO_S0_SDA | UART_AO_B_RX  | I2C_AO_M0_SDA |  GPIOAO_3  |  <div className='blue'>27</div>  | <div className='blue'>28</div>  |  GPIOAO_2  |                I2C_AO_M0_SCL                | UART_AO_B_TX  | I2C_AO_S0_SCL | 414         |
|             |               |               |               |     NC     | <div className='green'>29</div>  | <div className='black'>30</div> |    GND     |                                             |               |               |             |
|             |               |               |               |     NC     | <div className='green'>31</div>  | <div className='green'>32</div> |  GPIOAO_4  |                   PWMAO_C                   |               |               | 416         |
|             |               |               |               |     NC     | <div className='green'>33</div>  | <div className='black'>34</div> |    GND     |                                             |               |               |             |
| 420         |               |               | UART_AO_B_TX  |  GPIOAO_8  | <div className='green'>35</div>  | <div className='green'>36</div> |  GPIOH_8   |                                             |               |               | 451         |
| 421         |               |               | UART_AO_B_RX  |  GPIOAO_9  | <div className='green'>37</div>  | <div className='green'>38</div> | GPIOAO_10  |                   PWMAO_D                   |               |               | 422         |
|             |               |               |               |    GND     | <div className='black'>39</div>  | <div className='green'>40</div> | GPIOAO_11  |                   PWMAO_A                   |               |               | 423         |

</div>
