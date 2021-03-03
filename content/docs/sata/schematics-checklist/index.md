+++
title = "SATA Schematics checklist"
linktitle = "Schematics checklist"

date = 2020-06-21T22:50:00+02:00

keywords = ["sata","serial","ata","storage","serdes", "schematics", "checklist"]
description = "Schematics checklist for SATA"

weight = 0
+++

| Document   | Category | Item                                                                      |
| ---------- | -------- | ------------------------------------------------------------------------- |
| Schematics | SATA     | Check that SATA signals are connected to hardware capable Serdes port     |
| Schematics | SATA     | Check that there is a 10nF serial capacitor on each TX and RX SATA signal |
| Schematics | SATA     | Check that HDD SATA are connected from fastest to slowest                 |
| Schematics | SATA     | SATA Power P11 signal is grounded                                         |
| Schematics | SATA     | SATA Controller is set in AHCI mode                                       |
