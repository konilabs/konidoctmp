+++
title = "Serial Ata Power"
linktitle = "SATA Power"

date = 2020-06-18T17:22:00+02:00

keywords = ["sata", "serial", "ata", "power", "supply"]
description = "Serial Ata power connector informations"

weight = 0
+++

## Connector pinout

![Serial ATA Connector](serial-ata-connector.gif "Serial ATA Connector")

| Pin | Signal                     |
| --- | -------------------------- |
| 1   | +3.3V (obsolete)           |
| 2   | +3.3V (obsolete)           |
| 3   | +3.3V precharge (obsolete) |
| 4   | GND                        |
| 5   | GND                        |
| 6   | GND                        |
| 7   | +5V precharge              |
| 8   | +5V                        |
| 9   | +5V                        |
| 10  | GND                        |
| 11  | Optional                   |
| 12  | GND                        |
| 13  | +12V precharge             |
| 14  | +12V                       |
| 15  | +12V                       |

## Precharge

SATA power connector is designed to support hotplug and reduce inrush current when connecting a HDD.  
This is done by using different pin length on connector to ensure that connecting sequence occurs as follow :

- Ground
- 1x contact on each power rail named as "precharge" contact
- Other contacts

![HDD Precharge](hdd-precharge.png "HDD Precharge")

Recommended precharge resistance value is between 10 and 20 Ohms.
