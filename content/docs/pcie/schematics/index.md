+++
title = "PCIe Schematics"
linktitle = "Schematics"

date = 2020-06-19T15:06:00+02:00

keywords = ["pci", "pcie", "express", "serdes", "schematics"]
description = "PCI Express schematics help"

weight = 0
+++

## Schematics

- Add serial capacitor on  RX/TX line signal (100nF/0402)
- Add 50 Ohms pull down resistors on clock line

## PCB

- Place serial capacitors as follow

If design uses Connector : Place serial capacitors only on TX line close to the connector  
If design uses onboard link : Place serial capacitor near receiver device pin on TX and RX line  

- Place clock pull down resistors as close as possible to clock source (CPU)
- When using Onboard devices, test points shall be placed near receiver (RX) as follows :

![PCI Express testpoint](pcie-testpoint.jpg "PCI Express testpoint")
