+++
title = "Ethernet PCB Checklist"
linktitle = "PCB Checklist"

date = 2020-06-17T16:05:00+02:00

keywords = ["ethernet","lan","pcb","checklist"]
description = "Items to verify on PCB when designing ethernet"

weight = 0
+++

| Document | Category        | Item                                                          |
| -------- | --------------- | ------------------------------------------------------------- |
| Layout   | LAN - RGMII     | Check that maximum signal length is lower than 6 inches       |
| Layout   | LAN - RGMII     | Check signal impedance                                        |
| Layout   | LAN - RGMII     | Check if delay is needed                                      |
| Layout   | LAN - RGMII     | Maximum skew for any signal group is +/- 0.1 inch (TX or RX)  |
| Layout   | LAN - RGMII     | Avoid as possible reference plane change                      |
| Layout   | LAN - RGMII     | When there is a reference plane change, add bypass capacitors |
| Layout   | LAN - SGMII     | SGMII signals are routed like differential pairs              |
| Layout   | LAN - SGMII     | Maximum trace length is 16 inches                             |
| Layout   | LAN - Connector | Maximum trace length between PHY and connector is 5 inches    |
