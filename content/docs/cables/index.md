+++
title = "Cables"
linktitle = "Cables"

date = 2020-04-16T23:27:00Z
publishdate = ""
expirydate = ""

draft = false

description = "information about cables and wire and how to size it"
tags= []
aliases = []

audio = []
images = []

keywords = ["cable", "wire", "gauge", "copper", "resistivity"]
slug = ""
translationkey = ""

hide_toc = false
hide_from_menu = false
hide_title = false
+++

This page group information about wires and cables to help to choose correct diameter

<!--more-->

When choosing power supply cables, most important parameter is wire diameter or section. It allows to know the maximum rated current and also to estimate voltage loss depending on wire length.  
The gauge is a number between AWG0000 and AWG36.  
Lower number means higher wire diameter (0000 is the thickest).  
There are 39 standards gauges.

{{< math >}}
d = 0.127 \times 92 ^ {\frac{36-n}{39}}
{{< /math >}}

with :

- {{< math " d " />}} wire diameter in mm
- {{< math " n " />}} Cable AWG gauge

## Gauges table

| AWG  | Diameter (mm) | Section (mm²) | Resistivity at 20°C (Ohm/km) | Resistivity at 60°C (Ohm/km) | Free air maximum current (A) | Casing maximum current (A) |
| :--: | :-----------: | :-----------: | :--------------------------: | :--------------------------: | :--------------------------: | :------------------------: |
|  32  |      0.2      |     0.031     |            538.4             |            654.6             |             0.53             |            0.32            |
|  30  |     0.25      |     0.049     |            338.6             |            411.7             |             0.86             |            0.52            |
|  28  |     0.32      |     0.080     |            212.9             |            258.9             |             1.4              |            0.83            |
|  26  |     0.40      |     0.126     |            133.9             |            162.8             |             2.2              |            1.3             |
|  24  |     0.51      |     0.204     |            84.22             |            102.4             |             3.5              |            2.1             |
|  22  |     0.64      |     0.322     |            52.95             |            64.40             |             7.0              |            5.0             |
|  20  |     0.81      |     0.515     |            33.30             |            40.50             |             11.0             |            7.5             |
|  18  |     1.02      |     0.817     |            20.95             |            25.47             |              16              |             10             |
|  16  |     1.29      |     1.306     |            13.18             |            16.02             |              22              |             13             |
|  14  |     1.63      |     2.086     |            8.284             |            10.08             |              32              |             17             |
|  12  |     2.05      |     3.299     |            5.210             |            6.336             |              41              |             23             |
|  10  |     2.59      |     5.266     |            3.985             |            4.845             |              55              |             33             |
|  8   |     3.26      |     8.343     |            3.274             |            3.981             |              73              |             46             |
|  6   |     4.12      |    13.325     |            1.296             |            1.576             |             101              |             60             |
|  4   |     5.19      |    21.145     |            0.8136            |            0.991             |             135              |             80             |
|  2   |     6.54      |    33.576     |            0.5118            |            0.623             |             181              |            100             |
|  1   |     7.35      |    42.408     |            0.4035            |            0.494             |             211              |            125             |
|  0   |     8.25      |    53.429     |            0.3225            |            0.392             |             245              |            150             |
|  00  |     9.27      |    67.457     |            0.2556            |            0.311             |             283              |            175             |
| 000  |     10.40     |    84.906     |            0.2028            |            0.247             |             328              |            200             |
| 0000 |     11.68     |    107.092    |            0.1608            |            0.196             |             380              |            225             |
