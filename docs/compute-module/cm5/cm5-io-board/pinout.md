---
sidebar_position: 50
---

# 引脚定义

## 电压范围

| Type | Voltage | Tolerance |
| ---- | ------- | --------- |
| GPIO | 3.3V    | 3.63V     |
| ADC  | 1.8V    | 1.98V     |

## GPIO 接口

Radxa CM5 IO 提供一个 40 pin GPIO 扩展座，兼容市场上大多数传感器应用。

:::caution
提示：实际兼容性以实际使用情况为准。
:::

<Tabs queryString="revision">
<TabItem value="x2_1" label="x2.1">

<div className='gpio_style'>

| GPIO number |  Function5   |  Function4  |  Function3   |  Function2  |  Function1  |               Pin#               |              Pin#               | Function1 |                 Function2                 |  Function3   |  Function4   |  Function5  | GPIO number |
| ----------- | :----------: | :---------: | :----------: | :---------: | :---------: | :------------------------------: | :-----------------------------: | :-------: | :---------------------------------------: | :----------: | :----------: | :---------: | ----------- |
|             |              |             |              |             |    +3.3V    | <div className='yellow'>1</div>  |  <div className='red'>2</div>   |   +5.0V   |                                           |              |              |             |             |
| 123         |              |  PWM10_M2   |              | I2C7_SDA_M2 |  GPIO3_D3   |  <div className='green'>3</div>  |  <div className='red'>4</div>   |   +5.0V   |                                           |              |              |             |             |
| 122         |              |             |              | I2C7_SCL_M2 |  GPIO3_D2   |  <div className='green'>5</div>  | <div className='black'>6</div>  |    GND    |                                           |              |              |             |             |
| 135         | I2S1_SDI2_M0 |             | SPI2_CS0_M1  | I2C5_SDA_M2 |  GPIO4_A7   |  <div className='green'>7</div>  | <div className='green'>8</div>  | GPIO0_B5  | <div className='orange'>UART2_TX_M0</div> |              |              |             | 13          |
|             |              |             |              |             |     GND     |  <div className='black'>9</div>  | <div className='green'>10</div> | GPIO0_B6  | <div className='orange'>UART2_RX_M0</div> |              |              |             | 14          |
| 134         | I2S1_SDI1_M0 | UART3_RX_M2 | SPI2_CLK_M1  | I2C5_SCL_M2 |  GPIO4_A6   | <div className='green'>11</div>  | <div className='green'>12</div> | GPIO0_C2  |                                           |              |              |             | 18          |
| 133         | I2S1_SDI0_M0 | UART3_TX_M2 | SPI2_MOSI_M1 | I2C3_SDA_M2 |  GPIO4_A5   | <div className='green'>13</div>  | <div className='black'>14</div> |    GND    |                                           |              |              |             |             |
| 132         |              |             | SPI2_MISO_M1 | I2C3_SCL_M2 |  GPIO4_A4   | <div className='green'>15</div>  | <div className='green'>16</div> | GPIO1_C4  |                                           | SPI4_CS1_M0  |              | PWM11_IR_M2 | 51          |
|             |              |             |              |             |    +3.3V    | <div className='yellow'>17</div> | <div className='green'>18</div> | GPIO1_D5  |                                           | SPI1_CS1_M2  |              |             | 61          |
| 129         | I2S1_SCLK_M0 |             | SPI0_MOSI_M1 |             |  GPIO4_A1   | <div className='green'>19</div>  | <div className='black'>20</div> |    GND    |                                           |              |              |             |             |
| 128         | I2S1_MCLK_M0 |             | SPI0_MISO_M1 |             |  GPIO4_A0   | <div className='green'>21</div>  | <div className='green'>22</div> | GPIO1_B1  |                                           |              |              |             | 41          |
| 130         | I2S1_LRCK_M0 |             | SPI0_CLK_M1  |             |  GPIO4_A2   | <div className='green'>23</div>  | <div className='green'>24</div> | GPIO4_B2  |                                           | SPI0_CS0_M1  | I2S1_SDO1_M0 |  PWM14_M1   | 134         |
|             |              |             |              |             |     GND     | <div className='black'>25</div>  | <div className='green'>26</div> | GPIO3_B7  |                I2C3_SCL_M1                | SPI1_MOSI_M1 |              |             | 111         |
| 63          |              |             |              | I2C8_SDA_M2 |  GPIO1_D7   |  <div className='blue'>27</div>  | <div className='blue'>28</div>  | GPIO1_D6  |                I2C8_SCL_M                 |              |              |  PWM14_M2   | 62          |
| 24          | I2S1_SDI3_M1 | PWM7_IR_M0  |              | I2C6_SAL_M0 |  GPIO0_D0   | <div className='green'>29</div>  | <div className='black'>30</div> |    GND    |                                           |              |              |             |             |
| 23          | I2S1_SDI2_M1 |   PWM6_M0   |              | I2C6_SDA_M0 |  GPIO0_C7   | <div className='green'>31</div>  | <div className='green'>32</div> | GPIO1_B7  |                                           |              |              |  PWM13_M2   | 63          |
| 49          |              |             |              |             |  GPIO1_C1   | <div className='green'>33</div>  | <div className='black'>34</div> |    GND    |                                           |              |              |             |             |
| 112         |              |             |              | I2C3_SDA_M1 |  GPIO3_C0   | <div className='green'>35</div>  | <div className='green'>36</div> | GPIO1_C6  |                                           |              |              | PWM15_IR_M2 | 54          |
|             |              |             |              |             | SARADC_VIN4 | <div className='green'>37</div>  | <div className='green'>38</div> | GPIO1_D2  |                                           | SPI1_CLK_M2  |  I2S0_SDI2   |  I2S0_SDO3  | 58          |
|             |              |             |              |             |     GND     | <div className='black'>39</div>  | <div className='green'>40</div> | GPIO0_D3  |                                           | SPI3_CLK_M2  |              |             | 59          |

</div>

### 关于 X2.1 硬件版本的 40-pin 扩展座的补充

- 标有橙色的引脚用于 debug console。
- PWM: x7, PWM6 / PWM7 / PWM10 / PWM11 / PWM13 / PWM14 / PWM15
- SPI: x2, SPI0 / SPI2
- I2C: x5, I2C3 / I2C5 / I2C6 / I2C7 / I2C8
- UART: x2, UART2 / UART3
- ADC: x1, SARADC_VIN4

</TabItem>
</Tabs>

请参阅 [`libgpiod`](/radxa-os/development/libgpiod.md) 来了解该如何控制 GPIO。
