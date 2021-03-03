+++
title = "MDIO"
linktitle = "MDIO"

date = 2020-06-17T16:08:00+02:00

keywords = ["mdi","mdc","mdio","ethernet","configuration"]
description = "Ethernet configuration interface information"

weight = 0
+++

MDIO bus is a sideband bus that allow to check network link status and configure ethernet PHY.

<!--more-->

## Schematics

- MDC signal shall have a termination resistor near each receiver
- MDIO needs a pull up resistor between 1.5k and 10k
