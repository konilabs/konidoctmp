+++
title = "USB Schematic Checklist"
linktitle = "Schematic Checklist"

date = 2020-06-23T16:56:00+02:00

keywords = ["USB", "schematics", "verification"]
description = "List of items to verify on a USB schematic"


weight = 0
+++

| Document   | Category | Item                                                                            |
| ---------- | -------- | ------------------------------------------------------------------------------- |
| Schematics | USB      | Each USB port has current protection (at least one fuse for two ports)          |
| Schematics | USB      | Check that USB fault signal is correctly connected (optional)                   |
| Schematics | USB      | Check that there is an optional ESD/EMI protection circuit on USB_DP/DM signals |
| Schematics | USB      | Check that there is a 120 uF capacitor on VBus per port                         |
| Schematics | USB      | USB fault signal is connected                                                   |
| Schematics | USB      | USB protection can recover its functionality                                    |
| Schematics | USB      | USB protection maximum peak does not trigger any other protection               |
| Schematics | USB      | USB protection is UL and IEC 60950-1 certified                                  |
| Schematics | USB      | USB voltage tolerance is OK (4.75V / 5.25V)                                     |
