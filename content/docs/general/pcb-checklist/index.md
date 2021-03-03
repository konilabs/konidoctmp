+++
title = "PCB Checklist"
linktitle = "PCB Checklist"

date = 2020-06-18T16:01:00+02:00
publishdate = 2020-06-18T16:01:00+02:00

keywords = ["printed", "circuit", "board", "general", "information"]
description = "Printed circuit board general checklist"

weight = 0
+++

| Document | Category          | Item                                                                              |
| -------- | ----------------- | --------------------------------------------------------------------------------- |
| Layout   | Connector         | Pin#1 is indicated on silkscreen for each connector                               |
| Layout   | Connector         | Connector name is written on silkscreen                                           |
| Layout   | General           | PCB revision shall be indicated on silkscreen                                     |
| Layout   | General           | PCB reference shall be indicated on silkscreen                                    |
| Layout   | General           | Component footprint pinout is correct versus manufacturer datasheet               |
| Layout   | General           | Component footprint size is correct versus manufacturer datasheet                 |
| Layout   | General           | There is no big split in Gnd plane (max 3 vias)                                   |
| Layout   | Power             | Decoupling capacitors are routed with short traces                                |
| Layout   | Power             | There is one decoupling capacitors per power pin/ball                             |
| Layout   | Power             | There is a 22uf capacitor every suare inch per power plane                        |
| Layout   | Power             | There is one bulk capacitor every square inch per power plane                     |
| Layout   | Power             | Power planes are as large as possible                                             |
| Layout   | Power             | Analog Power planes are as large as possible                                      |
| Layout   | Power             | There is enough vias for power to go trough plane                                 |
| Layout   | Power             | Regulators feedback loop are as short as possible                                 |
| Layout   | Power             | Traces with power are large enough                                                |
| Layout   | Power             | Regulator capacitor are as close as possible to the chip                          |
| Layout   | Power             | Switching converters have a local gnd plane connected to board plane at one point |
| Layout   | Clock             | Crystal are as close as possible to the device                                    |
| Layout   | Clock             | Crystal trace width is at least 12 mils                                           |
| Layout   | Clock             | There is a ground ring around crystals                                            |
| Layout   | Analog            | Check that calibration resistor is connected with short trace (<0.7inch)          |
| Layout   | Differential pair | There is a plane void under serial capacitors                                     |
| Layout   | Differential pair | If reference plane change, there are bypass capacitors                            |
| Layout   | Differential pair | Check pair length                                                                 |
| Layout   | Differential pair | Check pair skew                                                                   |
| Layout   | Differential pair | Check signal impedance                                                            |
| Layout   | Differential pair | Serial capacitors are placed at the end of TX line or close to connector          |
