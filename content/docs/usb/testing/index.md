+++
title = "USB Testing"
linktitle = "Testing"

date = 2020-06-23T16:56:00+02:00

keywords = ["usb", "tests", "testing"]
description = "Items to verify on a USB design"

weight = 0
+++

| Document   | Category | Item                                                                                                                |
| ---------- | -------- | ------------------------------------------------------------------------------------------------------------------- |
| Functional | USB      | Check that each USB port can detect a keyboard or mouse in USB1                                                     |
| Functional | USB      | Check that each USB port can detect a mass storage in USB2                                                          |
| Functional | USB      | Check that each USB port can detect a mass storage in USB3                                                          |
| Functional | USB      | Check that each USB port can switch between all different USB speeds                                                |
| Functional | USB      | Check USB2 performance using mass storage                                                                           |
| Functional | USB      | Check USB3 performance using mass storage                                                                           |
| Functional | USB      | If USB fault signal exists, it is functional                                                                        |
| Power      | USB      | Check that USB port can support a 1A current using a resistive load                                                 |
| Power      | USB      | Check USB OCP level trigger using a variable resistive load                                                         |
| Power      | USB      | Check that USB port shortcut does not trigger any other OCP on board and that port recovers its functionality after |
| Power      | USB      | Check USB voltage value without load at connector (Vmin=4.75V, Vmax=5.25V)                                          |
| Power      | USB      | Check USB voltage value with 1A load at connector (Vmin=4.75V, Vmax=5.25V)                                          |
| Power      | USB      | Check that difference with and without load is <0.35V                                                               |
| Power      | USB      | Do USB DROOP test, check that Vbus is always greater than 4.4V                                                      |
| Hardware   | USB      | USB 1.1 Low speed test signal integrity                                                                             |
| Hardware   | USB      | USB 1.1 Full Speed Test signal integrity                                                                            |
| Hardware   | USB      | USB 2.0 High Speed Test signal integrity                                                                            |
| Hardware   | USB      | USB Chirp signal integrity                                                                                          |
| Hardware   | USB      | USB 3.0 TX                                                                                                          |
| Hardware   | USB      | USB 3.0 RX                                                                                                          |
| Hardware   | USB      | USB 3.0 IF compatibility                                                                                            |
