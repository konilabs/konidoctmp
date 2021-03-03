+++
title = "USB Schematics"
linktitle = "Schematics"

date = 2020-06-23T16:56:00+02:00

keywords = ["USB" ,"schematics","checklist"]
description = "Help to design an USB schematic"

weight = 0
+++


## Schematics

### Power

USB power shall be OFF when product is OFF

### EMI/ESD Protections

![USB Reference schematic](usbport_refschematic.png "USB Reference schematic")

## Design verification

### Schematics verification

- Check calibration resistor value
- Check that there is a fuse on VBus
- Check that USB fault signal is correctly connected (optional)
- Check that there is an optional ESD/EMI protection circuit on USB_DP/DM signals
- Check that there is a 120 uF capacitor on VBus per port
