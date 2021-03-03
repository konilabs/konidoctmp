+++
title = "Power"
linktitle = "Power"

date = 2020-06-19T02:13:00+02:00

keywords = ["power","general","information"]
description = "Power general informations"

weight = 0
+++

## Power filtering

- 1 x 100nF bypass capacitor per power pin
- 1 x 100nF bypass capacitor for two analog power pins ( if two pins are very close)
- Add a PI filter for analog power rails (Ferrite bead + 2 capacitors)
- For high power chips (CPU, Ethernet phy, etc...) add two spares 0603 capacitors per power rail
- Next to connectors, add one 0603 10uF capacitor and two 100 nF capacitors.
- For noisy devices like motor or HDD, add a ferrite bead
