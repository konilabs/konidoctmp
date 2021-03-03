+++
title = "PCIe Schematics checklist"
linktitle = "Schematics checklist"

date = 2020-06-19T15:06:00+02:00

keywords = ["pci", "pcie", "express", "serdes"]
description = "PCI Express schematics checklist"

weight = 0
+++

| Document   | Category | Item                                                                          |
| ---------- | -------- | ----------------------------------------------------------------------------- |
| Schematics | PCIe     | Check if CLKREQ is correctly connected                                        |
| Schematics | PCIe     | Check that there is a serial capacitor on each RX/TX line signal (100nF/0402) |
| Schematics | PCIe     | Check that there is a 50 Ohm pulldown resistor on each Clock signal           |
| Schematics | PCIe     | Check that clock frequency is 100MHz                                          |
