+++
title = "DRAM Schematics checklist"
linktitle = "Schematics checklist"

date = 2020-06-16T02:13:00Z

keywords = ["dram", "schematics", "checklist"]
description = "Stuff to check on DRAM schematics"

hide_toc = false
hide_from_menu = false
hide_title = false

weight = 0
+++

| Document   | Category | Item                                                                                                                            |
| ---------- | -------- | ------------------------------------------------------------------------------------------------------------------------------- |
| Schematics | RAM      | Check that chips connection starts from CS0                                                                                     |
| Schematics | RAM      | Check that VREF voltage dividers use 100 Ohms/1% resistors and 100nF capacitor                                                  |
| Schematics | RAM      | Check that signals have termination resistors (M_Wen, M_RASn, M_CASn, M_CSn[3:0], M_ODT[3:0], M_A[15:0], M_BA[2:0], M_CKE[1:0]) |
| Schematics | RAM      | Check if designs use 1.5V (DDR3) or 1.35V (DDR3L)                                                                               |
| Schematics | RAM      | Check if Vref value is OK according to RAM voltage                                                                              |
| Schematics | RAM      | Check DDR3 reset signal is connected to CPU if a special reset pin is available or on system reset                              |
| Schematics | RAM      | Check that each ODT signal is connected to the right CS signal                                                                  |
| Schematics | RAM      | Check that DQS/DQSn and DM signals are connected to right Data group (DQ)                                                       |
| Schematics | RAM      | RAM topology is correct                                                                                                         |
| Schematics | RAM      | RAM frequency grade is correct                                                                                                  |
| Layout     | RAM      | Check length of all signals                                                                                                     |
| Layout     | RAM      | Check signals impedances                                                                                                        |
| Layout     | RAM      | Clock are routed as differential pairs                                                                                          |
| Layout     | RAM      | DQS signals are routed as differential pairs                                                                                    |
| Layout     | RAM      | There is no reference plane change on the same layer                                                                            |
| Layout     | RAM      | When there is a reference plane change, add bypass capacitors                                                                   |
