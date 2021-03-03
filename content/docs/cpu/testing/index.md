+++
title = "CPU Testing"
linktitle = "Testing"

date = 2020-06-16T15:56:00+02:00

keywords = ["cpu", "testing", "verification"]
description = "Items to test when designing a CPU pcb"

weight = 0
+++

| Type       | Category | Item                                                                            |
| ---------- | -------- | ------------------------------------------------------------------------------- |
| Functional | CPU      | Check that nominal frequency can be obtained                                    |
| Functional | CPU      | Check that minimal frequency can be obtained                                    |
| Functional | CPU      | Check that maximal frequency can be obtained                                    |
| Functional | CPU      | Check that correct number of core is detected                                   |
| Functional | CPU      | Check that correct number of thread is detected                                 |
| Functional | CPU      | Check that correct L2 cache quantity is detected                                |
| Functional | CPU      | Check that cache frequency is correct                                           |
| Functional | CPU      | Check that frequency scales depending on CPU load                               |
| Functional | CPU      | Check that Dhrystone performance can be obtained                                |
| Functional | CPU      | Check that UART debug port is functional                                        |
| Hardware   | CPU      | Check UART signal integrity (Vhigh,Vlow,Trise,Tfall)                            |
| Hardware   | CPU      | Check JTAG signal integrity (Vhigh,Vlow,Trise,Tfall)                            |
| Hardware   | CPU      | Check reset sequence                                                            |
| Functional | CPU      | Check that SPI signals on UART debug port are functional                        |
| Functional | CPU      | Check that JTAG debug port is functional                                        |
| Functional | CPU      | Check that Configuration GPIO value can be read inside software                 |
| Functional | CPU      | Check that CPU model is correctly identified by software (BIOS, Bootloader, OS) |
| Functional | CPU      | CPU support CPU stress during 24h                                               |
