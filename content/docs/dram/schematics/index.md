+++
title = "DRAM Schematics"
linktitle = "Schematics"

date = 2020-06-16T16:42:00+02:00

keywords = ["dram","ram","schematics"]
description = "DRAM schematics help"

weight = 0
+++

## Schematics

- DRAM interface use chip select signals in right order (CS0, then CS1, ...)
- DRAM interface calibration have right value / tolerance
- DRAM reset signal is connected to RAM chips
- DRAM voltage interface is compatible (1.35V / 1.5V)
- VREF voltage dividers are using 100 Ohms/1% resistors and 100nF capacitor
- VREF value is OK (usually half DRAM voltage)
- Check that DQS/DQSn and DM signals are connected to corresponding Data DQ
- Check that each ODT signal is connected to the right CS signal
- Check that signals have termination resistors (M_Wen, M_RASn, M_CASn, M_CSn, M_ODT, M_A, M_BA, M_CKE[1:0])

Test points shall be added on following signals :

- Shortest and longest DQ trace of each DQ group
- Each DQS_P/DQS_N signal
- WE#, CAS#, RAS#, CS# signals
- Each CLK_P/CLK_N signal