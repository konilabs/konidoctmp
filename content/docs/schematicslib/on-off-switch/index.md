+++
title = "On Off switch"
linktitle = "On Off switch"

date = 2020-06-22T16:45:00+02:00

keywords = ["on", "off", "mosfet", "switch"]
description = "Simple PMOS switch schematic"

weight = 0
+++

This page contains multiple types of On/off switches

## Separated On and Off

![On Off Switch](on_off_switch.png "On Off Switch")
This consumes 0 power when off.

## Same button for On and Off

![On Off Switch with latch](on_off_switch_latch.png "On Off Switch with latch")
The same switch does On and Off function.

## Same button for On and Off 2

![On Off Switch with latch 2](on_off_switch_latch2.png "On Off Switch with latch 2")
The same switch does On and Off function.

Q1 discharge C1 through R3 when is turned ON, so when you push switch, discharged capacitor pulls gate to 0V. When is not powered on, gate of Q1 is low, why? because it is not powered on and Q2 is also not powered on, and on output is 0V.
