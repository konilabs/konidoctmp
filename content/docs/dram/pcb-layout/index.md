+++
title = "DRAM PCB Layout"
linktitle = "PCB Layout"

date = 2020-06-16T16:33:00+02:00

keywords = ["dram", "pcb", "layout"]
description = "DRAM PCB Layout help"

weight = 0
+++

## Footprint

### BGA

IPC-7351A for NSMD Pads

| Nominal Ball Diameter | Reduction | Land Pattern Density Level | Nominal Land Diameter | Land Variation |
| :-------------------: | :-------: | :------------------------: | :-------------------: | :------------: |
|         0.75          |    25%    |             A              |         0.55          |   0.60-0.50    |
|         0.65          |    25%    |             A              |         0.50          |   0.55-0.45    |
|          0.6          |    25%    |             A              |         0.45          |   0.50-0.40    |
|         0.55          |    25%    |             A              |         0.40          |   0.45-0.35    |
|          0.5          |    20%    |             B              |         0.40          |   0.45-0.35    |
|         0.45          |    20%    |             B              |         0.35          |   0.40-0.30    |
|          0.4          |    20%    |             B              |         0.30          |   0.35-0.25    |
|         0.35          |    20%    |             B              |         0.30          |   0.35-0.25    |
|          0.3          |    20%    |             B              |         0.25          |   0.25-0.20    |
|         0.25          |    20%    |             B              |         0.20          |   0.20-0.17    |
|          0.2          |    15%    |             C              |         0.17          |   0.20-0.14    |
|         0.17          |    15%    |             C              |         0.15          |   0.18-0.12    |
|         0.15          |    15%    |             C              |         0.13          |   0.15-0.10    |

### Placement

Place CPU and DDR chips on the same side of PCB to minimize the number of Vias. It is preferred to place CPU and DDR chips over ground plane.

### Routing

Route signals in this order :

- Data signals (DQ[0:xx], DM[ x ], DQS/DQSn pairs). Data signals must be routed without any via.
- Clock signals (CLK,CLKn). Clock signals must be routed without any via.
- Address control signals on top and bottom layers

To check skew between signals, internal delay from CPU or package must be taken in account.
During layout checking some signals can have minimal skews like Clock to DQS.
