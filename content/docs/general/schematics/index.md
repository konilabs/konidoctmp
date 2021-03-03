+++
title = "Schematics"
linktitle = "Schematics"

date = 2020-06-18T16:29:00+02:00

keywords = ["schematics","general","rules"]
description = "Schematics general basic rules"

weight = 0
+++

This page contains all basics rules that must be checked during schematics phase.

<!--more-->

## Power Supply

- Power  pins are connected to the right voltage
- Analog power pins are connected to a quiet power rail with a PI filter (Capacitor, Ferrite, Capacitor)
- One 100nF bypass capacitor per digital Power pin
- One 100nF bypass capacitor for two analog power pins if they are next to each other.
- Power sequence at power on and power off follow chip specification

## I/O Pins

- I/O pins are connected to a supported voltage level
- I/O pins might use sample at reset configuration. Check that the right configuration is applied, resistor has the right value and it is connected to supported voltage
- Pin direction is clearly identified on schematics
- Pin direction is supported by the chosen I/O pin
- Check that if a special hardware fonction is required, it is available (blink, SATA activity, ...)

## Clock

- Show clock frequencies on schematics
- Check that clock frequency is right
- In case of a crystal, check capacitor load value
- In case of a crystal, check resistive load value

## Differential pairs

- For each differential pair, polarity and impedance are indicated (single ended and common)

## IC

- All IC with a reset pin must reset at every power on or product wake up. If this is not possible, CPU shall be able to control reset using a GPIO.
- Chips ID shall be identified in Hardware specification document
- Chips address on bus shall be identified on Schematics and Hardware specification

## Power

- Bulk capacitors : 22uF every square inch per power plane
- Decoupling capacitors : 1x100nF per power ball
- DC/DC minimal efficiency shall be 85%

## Misc

- Chips ID or address shall be visible on schematics (I²C, JTAG, PCIE ...)
- Important nets must have a clear name (Differentials pairs, power rails, CPU signals, Memories)
- Double footprints shall have correct reference (R57, R57A, R57B, etc…)
- Run DRC tools to check if there are unconnected nets
- Generate a BOM and check that it is ok (footprints, component value, tolerance, voltage)
- Check that “NC” (not connected) parts are really not connected.
- Collect all datasheets, erratas and make sure you have the latest version
- Check for all available tools from chip manufacturer
