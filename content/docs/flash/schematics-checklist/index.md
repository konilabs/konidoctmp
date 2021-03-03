+++
title = "Flash schematics checklist"
linktitle = "Schematics checklist"

date = 2020-06-17T17:16:00+02:00

keywords = ["flash", "nand", "schematics"]
description = "Items to verify on an flash schematics"

weight = 0
+++

| Document   | Category   | Item                                                          |
| ---------- | ---------- | ------------------------------------------------------------- |
| Schematics | Flash Nand | NAND pins are connected to CPU capable nand pins              |
| Schematics | Flash Nand | NAND WP pin is pulled correctly                               |
| Schematics | Flash Nand | NAND RDY signal has correct pull up                           |
| Schematics | Flash Nand | If NAND is a boot device, check that configuration is correct |
| Schematics | Flash SPI  | SPI pins are connected to CPU capable SPI pins                |
| Schematics | Flash SPI  | If SPI is a boot device, check that configuration is correct  |
| Schematics | Flash      | CPU is configured to boot on the flash                        |
| Schematics | Flash      | Flash size is correct                                         |
| Schematics | Flash      | Flash type is correct                                         |
