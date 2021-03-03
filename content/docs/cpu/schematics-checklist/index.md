+++
title = "CPU Schematics checklist"
linktitle = "Schematics checklist"

date = 2020-06-16T15:17:00+02:00

keywords = ["cpu", "schematics", "checklist"]
description = "Items to check on a CPU schematics"

weight = 0
+++

## Schematics Checklist

| Document   | Category | Item                                                                             |
| ---------- | -------- | -------------------------------------------------------------------------------- |
| Schematics | CPU      | Check that CPU hardware configuration is correct (frequency, cache, threads,...) |
| Schematics | CPU      | UART debug connector is connected to first CPU Uart port                         |
| Schematics | CPU      | UART connector reference is correct                                              |
| Schematics | CPU      | UART pinout is correct                                                           |
| Schematics | CPU      | UART TX/RX signals have the right level                                          |
| Schematics | CPU      | UART TX/RX signals direction is correct                                          |
| Schematics | CPU      | UART connector reference is correct                                              |
| Schematics | CPU      | UART text is placed near connector                                               |
| Layout     | CPU      | UART text is placed near connector                                               |
| 3D Files   | CPU      | UART connector is easy to access                                                 |
| Schematics | CPU      | JTAG pinout is correct                                                           |
| Schematics | CPU      | JTAG connector reference is correct                                              |
| Schematics | CPU      | Check JTAG signals are correctly connected to CPU                                |
| Schematics | CPU      | Check JTAG reset signal is correctly connected to system reset                   |
| Schematics | CPU      | Check that JTAG TMS is connected on TMS_CPU (not TMS_CORE)                       |
| Layout     | CPU      | JTAG text is placed near connector                                               |
| Schematics | CPU      | JTAG text is placed near connector                                               |
