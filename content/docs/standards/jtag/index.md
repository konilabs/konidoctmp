+++
title = "JTAG"
linktitle = "JTAG"

date = 2020-06-22T17:30:00+02:00

keywords = ["joint","test","action","group","jtag","testing"]
description = "JTAG Standard documentation"

weight = 0
+++

JTAG (**J**oint **T**est **A**ction **G**roup) is a standard dedicated to electronics system automated testing.  
It allows to test all chips that have JTAG functionality with a single test connector. To allow this, all JTAG devices are daisy chained like on the picture below. In reality, there is often one JTAG connector per device because debug tools do not always support chain.

<!--more-->

![JTAG wiring diagramm](jtag.gif "JTAG wiring diagramm")

## Signals

Following signals are used for JTAG :

- TMS, (Test Mode Select) Signal to enable JTAG communication
- TCK, (Test ClocK) Clock signal
- TDI, (Test Data Input) Data Input
- TDO, (Test Data Output) Data Output
- TRST, (Test ReSeT) Optional, allows to reset JTAG Controller, Active low

Following signals are optional :

- RTCK, (Returned Test Clock) Optional signal, allows to adjust JTAG clock depending on the target
- NRST, ("Neutral Test Reset) Target reset, often connected to System reset

## Connectors

Multiple connectors versions exists depending on debug tools. Most commons are the following

### ARM 20 pins

| Signal | Pin# | Pin# | Signal  |
| ------ | ---- | ---- | ------- |
| VREF   | 1    | 2    | VSUPPLY |
| nTRST  | 3    | 4    | GND     |
| TDI    | 5    | 6    | GND     |
| TMS    | 7    | 8    | GND     |
| TCK    | 9    | 10   | GND     |
| RTCK   | 11   | 12   | GND     |
| TDO    | 13   | 14   | GND     |
| nSRST  | 15   | 16   | GND     |
| DBGRQ  | 17   | 18   | GND     |
| DGBACK | 19   | 20   | GND     |

### ARM 14 pins

| Signal | Pin# | Pin# | Signal |
| ------ | ---- | ---- | ------ |
| VREF   | 1    | 2    | GND    |
| nTRST  | 3    | 4    | GND    |
| TDI    | 5    | 6    | GND    |
| TMS    | 7    | 8    | GND    |
| TCK    | 9    | 10   | GND    |
| TDO    | 11   | 12   | nSRST  |
| VREF   | 13   | 14   | GND    |

### MIPS EJTAG

| Signal | Pin# | Pin# | Signal |
| ------ | ---- | ---- | ------ |
| nTRST  | 1    | 2    | GND    |
| TDI    | 3    | 4    | GND    |
| TDO    | 5    | 6    | GND    |
| TMS    | 7    | 8    | GND    |
| TCK    | 9    | 10   | GND    |
| nSRST  | 11   | 12   | NC     |
| DINT   | 13   | 14   | VREF   |

### Altera Byteblaster 10 pins

| Signal | Pin# | Pin# | Signal |
| ------ | ---- | ---- | ------ |
| TCK    | 1    | 2    | GND    |
| TDO    | 3    | 4    | VREF   |
| TMS    | 5    | 6    | NC     |
| NC     | 7    | 8    | NC     |
| TDI    | 9    | 10   | GND    |

### AVR 10 pins

| Signal | Pin# | Pin# | Signal |
| ------ | ---- | ---- | ------ |
| TCK    | 1    | 2    | GND    |
| TDO    | 3    | 4    | VREF   |
| TMS    | 5    | 6    | nSRST  |
| NC     | 7    | 8    | nTRST  |
| TDI    | 9    | 10   | GND    |
