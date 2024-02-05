---
sidebar_position: 15
---

# SSD Compatibility List

<div className='gpio_style'>

| Brand           | Model                   | Capacity   | Rated Voltage and Current | Test Environment | Compatibility    | Read and Write Rates             | Remarks                                                                                                        |
| --------------- | ----------------------- | ---------- | ------------------------- | ---------------- | ---------------- | -------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| Samsung         | 980 EVO                 | 512GB      | 3.3V/1.9A                 | RadxaOS          | Compatible       | Read:1.0GB/s<br/>Write:991MB/s   |                                                                                                                |
| Samsung         | M9A1<br/>(MZVL2256HCHQ) | 256GB      | 3.3V/2.8A                 | Armbian          | Compatible       | Read:14.8MB/s<br/>Write:9.72MB/s |                                                                                                                |
| Samsung         | 970 EVO Plus            | 1TB        | 3.3V/1.9A                 | RadxaOS          | Compatible       |                                  |                                                                                                                |
| Samsung         | PM983A                  | 1TB        | 3.3V/3.9A                 |                  | **Incompatible** |                                  |                                                                                                                |
| Kingston        | OM8PDP3256B-A01         | 256GB      | 3.3V/1A                   | RadxaOS          | Compatible       |                                  |                                                                                                                |
| Kingston        | A2000 (SA2000M8/1000G)  | 1TB        | 3.3V/3A                   | RadxaOS/Armbian  | Compatible       | Read:980MB/s<br/>Write:888MB/s   |                                                                                                                |
| Intel           | Optane Memory M10       | 32GB       | 3.3V/1.2A                 | RadxaOS          | Compatible       |                                  |                                                                                                                |
| Intel           | Optane Memory M10       | 16GB       | 3.3V/1.2A                 | RadxaOS          | Compatible       |                                  |                                                                                                                |
| Intel           | Optane Memory H10       | 16GB+256GB | 3.3V/2.5A                 | RadxaOS          | Compatible       | Read:910MB/s<br/>Write:170MB/s   | Just 16G Recognized bases on default configuration, After PCIE Separated, The whole Capacity can be Recognized |
| Galaxy          | 黑将Pro                 | 250GB      | 3.3V/1.8A                 | RadxaOS          | Compatible       | Read:2.1GB/s<br/>Write:680MB/s   |                                                                                                                |
| Western Digital | SN730                   | 512GB      | 3.3v/2.8A                 | RadxaOS          | Compatible       | Read:1.4GB/s<br/>Write:670MB/s   |                                                                                                                |
| ZhiTai          | TiPlus5000              | 512GB      | 3.3V/2.5A                 | RadxaOS          | Compatible       |                                  |                                                                                                                |
| ZhiTai          | TiPlus5000              | 2TB        | 3.3V/2.5A                 | RadxaOS/Armbian  | Compatible       | Read:1.3GB/s<br/>Write:745MB/s   |                                                                                                                |
| ZhiTai          | TiPlus7100              | 1TB        | 3.3V/2.5A                 | RadxaOS          | Compatible       | Read:2.9GB/s<br/>Write:2.2GB/s   |                                                                                                                |
| Acer            | VT500M                  | 256GB      |                           | Armbian          | **Incompatible** |                                  |                                                                                                                |
| FORESEE         | XP1000                  | 1TB        |                           |                  | Compatible       | Read:2.0GB/s<br/>Write:2.0GB/s   |                                                                                                                |

</div>
