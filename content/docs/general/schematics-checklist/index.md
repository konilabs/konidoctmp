+++
title = "Schematics checklist"
linktitle = "Schematics checklist"

date = 2020-06-18T16:47:00+02:00

keywords = ["schematics","general","checklist"]
description = "Schematics general checklist"

weight = 0
+++

| Document   | Category          | Item                                                                                               |
| ---------- | ----------------- | -------------------------------------------------------------------------------------------------- |
| Schematics | General           | Component symbol is correct versus manufacturer datasheet                                          |
| Schematics | General           | NC pins are correctly handled                                                                      |
| Schematics | Power             | Power supplies pins are connected to the right voltage                                             |
| Schematics | Power             | Quiet / Analog power rails have a PI filter (Capacitor, Ferrite, Capacitor)                        |
| Schematics | Power             | There is 1x 100nF capacitor per Power pin                                                          |
| Schematics | Power             | Power sequencing on Power Up is correct                                                            |
| Schematics | Power             | Power sequencing on Power down is correct                                                          |
| Schematics | Power             | Power sequencing when entering sleep mode is correct                                               |
| Schematics | Power             | Power sequencing when escaping sleep mode is correct                                               |
| Schematics | Power             | There is no shunt at regulator input or output                                                     |
| Schematics | Reset             | Check that there is a pull up resistor on reset signal                                             |
| Schematics | Reset             | Reset sequencing on Power Up is correct                                                            |
| Schematics | Reset             | Reset sequencing on Power down is correct                                                          |
| Schematics | Reset             | Reset sequencing when entering sleep mode is correct                                               |
| Schematics | Reset             | Reset sequencing when escaping sleep mode is correct                                               |
| Schematics | Reset             | All IC can be reset either at power On or using CPU GPIO                                           |
| Schematics | Configuration     | Configuration is written on schematics (DDR spec, CPU Frequency, Ratios, L2 cache ...)             |
| Schematics | Configuration     | Check that sample at reset resistors have the right value                                          |
| Schematics | Configuration     | Check that sample at reset resistors are at the right voltage                                      |
| Schematics | GPIO              | Check that GPIO pins are at the right voltage                                                      |
| Schematics | GPIO              | Check GPIO pins directions are correct on schematics                                               |
| Schematics | GPIO              | Check that each GPIO is capable of Input or Output                                                 |
| Schematics | GPIO              | Check that if a special hardware fonction is required, it is available (blink, SATA activity, ...) |
| Schematics | Connector         | Pin#1 is indicated on schematics                                                                   |
| Schematics | Connector         | Connector name is written on schematics                                                            |
| Schematics | Connector         | Check connectors pinout                                                                            |
| Schematics | PCB               | PCB revision is written inside schematics                                                          |
| Schematics | PCB               | PCB reference is written inside schematics                                                         |
| Schematics | Analog            | Check that calibration resistor value and tolerance is correct                                     |
| Schematics | Crystal           | Check that capacitor load value is correct                                                         |
| Schematics | Crystal           | Check that crystal frequency, tolerance and jitter are correct                                     |
| Schematics | Crystal           | Check if crystal needs some resistive load                                                         |
| Schematics | Differential pair | Signal polarity is correct                                                                         |
| Schematics | Differential pair | There is one pair of serial 0402 capacitor                                                         |
| Schematics | IC                | Check Chip address/ID is available on schematics                                                   |
| Schematics | Led               | All leds and buttons backlight can be controlled by software                                       |
| Schematics | Led               | Check that LED are connected to hardare capable pins (Blink, HDD Activity, ...)                    |
| Schematics | Led               | Check default state                                                                                |
| Schematics | Led               | Check Led colors                                                                                   |
| Schematics | Button            | Check button RC delay < 20ms                                                                       |
| Schematics | Button            | Check button can trigger an IRQ                                                                    |
| Schematics | Button            | Check hardware associated functions (wake up)                                                      |
| Schematics | GPIO              | Check hardware associated functions (wake up, shutdown)                                            |
| Schematics | GPIO              | Check GPIO PCBA identification                                                                     |
