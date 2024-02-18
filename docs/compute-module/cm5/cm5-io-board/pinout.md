---
sidebar_label: "Radxa CM5 IO GPIO 定义"
sidebar_position: 50
---

# Radxa CM5 IO GPIO 定义

## GPIO 电压

| GPIO       | 电压 | 最高  |
| ---------- | ---- | ----- |
| 所有的GPIO | 3.3V | 3.63V |
| SARADC_IN4 | 3.3V | 1.98V |

## GPIO 接口

Radxa CM5 IO 提供一个 40 pin GPIO 扩展座，兼容市场上大多数传感器应用。

**_提示:_ 实际兼容情况以使用为准。**

- Radxa CM5 IO 有一个40针扩展接头。每个引脚都用颜色区分。

<div className='gpio_style'>

| GPIO number |  Function6   | Function5  |   Function4   |  Function3   |  Function2  |  Function1  |               Pin#               |              Pin#               | Function1 |  Function2  |  Function3   |                 Function4                 |  Function5  |  Function6   | GPIO number |
| :---------: | :----------: | :--------: | :-----------: | :----------: | :---------: | :---------: | :------------------------------: | :-----------------------------: | :-------: | :---------: | :----------: | :---------------------------------------: | :---------: | :----------: | :---------: |
|             |              |            |               |              |             |    +3.3V    | <div className='yellow'>1</div>  |  <div className='red'>2</div>   |   +5.0V   |             |              |                                           |             |              |             |
|     123     |              |            | UART9_CTSN_M2 | SPI0_CLK_M3  | I2C7_SDA_M2 |  GPIO3_D3   |  <div className='green'>3</div>  |  <div className='red'>4</div>   |   +5.0V   |             |              |                                           |             |              |             |
|     122     |              |            | UART9_RTSN_M2 | SPI0_MOSI_M3 | I2C7_SCL_M2 |  GPIO3_D2   |  <div className='green'>5</div>  | <div className='black'>6</div>  |    GND    |             |              |                                           |             |              |             |
|     135     | I2S1_SDI2_M0 |            |               |              | I2C5_SDA_M2 |  GPIO4_A7   |  <div className='green'>7</div>  | <div className='green'>8</div>  | GPIO0_B5  | I2C1_SCL_M0 |              | <div className='orange'>UART2_TX_M0</div> |             | I2S1_MCLK_M1 |     13      |
|             |              |            |               |              |             |     GND     |  <div className='black'>9</div>  | <div className='green'>10</div> | GPIO0_B6  | I2C1_SDA_M0 |              | <div className='orange'>UART2_RX_M0</div> |             | I2S1_SCLK_M1 |     14      |
|     134     | I2S1_SDI1_M0 |            |  UART3_RX_M2  |              | I2C5_SCL_M2 |  GPIO4_A6   | <div className='green'>11</div>  | <div className='green'>12</div> | GPIO0_C2  |             |              |                                           |             |              |     18      |
|     133     | I2S1_SDI0_M0 |            |  UART3_TX_M2  |              | I2C3_SDA_M2 |  GPIO4_A5   | <div className='green'>13</div>  | <div className='black'>14</div> |    GND    |             |              |                                           |             |              |             |
|     134     |              |            |  UART0_RX_M2  |              | I2C3_SCL_M2 |  GPIO4_A4   | <div className='green'>15</div>  | <div className='green'>16</div> | GPIO1_C4  | I2C2_SDA_M3 | SPI4_CS1_M0  |                                           | PWM11_IR_M2 |              |     52      |
|             |              |            |               |              |             |    +3.3V    | <div className='yellow'>17</div> | <div className='green'>18</div> | GPIO1_D5  |             | SPI1_CS1_M2  |                                           |             |              |     61      |
|     129     | I2S1_SCLK_M0 |            | UART9_CTSN_M1 | SPI0_MOSI_M1 |             |  GPIO4_A1   | <div className='green'>19</div>  | <div className='black'>20</div> |    GND    |             |              |                                           |             |              |             |
|     128     | I2S1_MCLK_M0 |            | UART9_RTSN_M1 | SPI0_MISO_M1 |             |  GPIO4_A0   | <div className='green'>21</div>  | <div className='green'>22</div> | GPIO1_B1  |             | SPI0_MISO_M2 |                                           |             |              |     41      |
|     130     | I2S1_LRCK_M0 |            |               | SPI0_CLK_M1  |             |  GPIO4_A2   | <div className='green'>23</div>  | <div className='green'>24</div> | GPIO4_B2  | I2C7_SCL_M3 | SPI0_CS0_M1  |               UART8_RTSN_M0               |  PWM14_M1   | I2S1_SDO1_M0 |     138     |
|             |              |            |               |              |             |     GND     | <div className='black'>25</div>  | <div className='green'>26</div> | GPIO3_B7  | I2C3_SCL_M1 | SPI1_MOSI_M1 |                                           |             |              |     111     |
|             |              |            |               |              |             |    +3.3V    |  <div className='blue'>27</div>  | <div className='blue'>28</div>  |   +3.3V   |             |              |                                           |             |              |             |
|     24      | I2S1_SDI3_M1 | PWM7_IR_M0 | UART1_CTSN_M2 | SPI3_MISO_M2 | I2C6_SCL_M0 |  GPIO0_D0   | <div className='green'>29</div>  | <div className='black'>30</div> |    GND    |             |              |                                           |             |              |             |
|     23      | I2S1_SDI2_M1 |  PWM6_M0   | UART1_RTSN_M2 | SPI0_MISO_M0 | I2C6_SDA_M0 |  GPIO0_C7   | <div className='green'>31</div>  | <div className='green'>32</div> | GPIO1_B7  | I2C5_SDA_M3 |              |                                           |  PWM13_M2   | SPDIF1_TX_M0 |     47      |
|     49      |              |            |  UART3_TX_M0  | SPI4_MOSI_M0 | I2C3_SCL_M0 |  GPIO1_C1   | <div className='green'>33</div>  | <div className='black'>34</div> |    GND    |             |              |                                           |             |              |             |
|     112     |              |            |  UART7_TX_M1  | SPI1_MISO_M1 | I2C3_SDA_M1 |  GPIO3_C0   | <div className='green'>35</div>  | <div className='green'>36</div> | GPIO1_C6  | I2C4_SDA_M4 |              |                                           | PWM15_IR_M2 |              |     54      |
|             |              |            |               |              |             | SARADC_VIN4 | <div className='green'>37</div>  | <div className='green'>38</div> | GPIO1_D2  | I2C1_SCL_M4 |  I2S0_SDI2   |                UART4_TX_M0                |   PWM0_M1   |  I2S0_SDO3   |     58      |
|             |              |            |               |              |             |     GND     | <div className='black'>39</div>  | <div className='green'>40</div> | GPIO0_D3  |             | SPI3_CLK_M2  |                                           |             |              |     59      |

</div>
