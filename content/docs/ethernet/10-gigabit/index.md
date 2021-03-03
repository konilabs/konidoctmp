+++
title = "10 Gigabit ethernet"
linktitle = "10 Gigabit"

date = 2020-06-17T16:16:00+02:00

keywords = ["network", "lan", "ethernet", "gigabit","10-gigabit"]
description = "10 Gigabit interfaces informations"

weight = 0
+++

Standards connectors are XFP, SFP+ and RJ45.

## SFP+

SFP+ is a cage which receives an optical transceiver or a direct attach copper cable.
SFP+ uses SFI signal interface. This is a 1x lane TX + 1x lane RX differential pair interface

|        | SFP+                  |
| ------ | --------------------- |
| Height | 8.5 mm (0.33 inches)  |
| Width  | 13.4 mm (0.53 inches) |
| Depth  | 56.5 mm (2.22 inches) |

## XFP

XFP uses XFI signal interface.
This is a 1x lane TX + 1x lane RX differential pair interface at 10.31 Gigabaud
The primary difference between SFP+ and the slightly older XFP standard is that SFP+ moves the chip for clock and data recovery into a line card on the host device. This makes an SFP+ smaller than an XFP, enabling greater port density.

|        | XFP                    |
| ------ | ---------------------- |
| Height | 8.5 mm (0.33 inches)   |
| Width  | 18.35 mm (0.72 inches) |
| Depth  | 78.0 mm (3.10 inches)  |

## PHY and transceivers

10G PHY usually interfaces with XAUI, RXAUI or XFI interface.

### XAUI

This interface can be called also IEEE 802.3ae XGXS interface.  
It is composed by four SERDES lines running a 3.125 GHz in each direction using 8/10 bits coding channel

### RXAUI

RXAUI means Reduced XAUI.  
It is composed by two SERDES lines running a 6.25 GHz in each direction.

### RJ45

10G Ethernet can be available on standard copper cables.  
It requires Cat6a connectors, with integrated magnetics
