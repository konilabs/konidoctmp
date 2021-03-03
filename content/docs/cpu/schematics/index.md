+++
title = "CPU Schematics"
linktitle = "Schematics"

date = 2020-06-16T14:17:00+02:00

keywords = ["cpu", "schematics", "verification"]
description = "Items to verify on a CPU schematic"

weight = 0
+++

## Configuration

- CPU configuration is written on schematics (DDR speed, CPU frequency, Ratios, L2 cache...)
- If there are free GPIO, plan to use them as configuration or board identification inputs using pull up or pull down.

## JTAG

- Check JTAG signals are correctly connected to CPU
- Check JTAG SReset signal is correctly connected to system reset
- Check if JTAG SRST and TRST needs pull up resistors
- If multiples TMS signals are available on CPU, use shunt resistor to be able to change easily

## NAND

- NAND pins are connected to CPU capable nand pins
- NAND WP pin is pulled correctly
- NAND RDY signal has correct pull up
- If NAND is a boot device, check that configuration is correct

## SPI

- SPI pins are connected to CPU capable nand pins
- If SPI is a boot device, check that configuration is correct

## PCI Express

- Check calibration resistors value
- Check if CLKREQ is correctly connected
- Check that there is a serial capacitor on each RX/TX line signal (100nF/0402)
- Check that there is a 50 Ohm pulldown resistor on each Clock signal
- Check that clock frequency is 100MHz

## Ethernet

- Check that ethernet signals are connected to hardware capable pins
- Check signal voltage level
- Check that GE_MDIO has a 2kOhm pullup resistor

### RGMII

- In RGMII, check if there is a need of delay function

### SGMII

- In SGMII, check that there is a 10nF serial capacitor on TX and RX signals
- Check that SGMII signals are connected to the right Serdes port

## SATA

- Check SATA calibration resistor value
- Check that SATA signals are connected to hardware capable pins
- Check that there is a 10nF serial capacitor on each TX and RX SATA signal

## I²C

- Check that there is a 4.7KOhms pull up resistor on Clock and DATA signals
- List all used bus address and check that here is on conflict
- Check voltage levels

## Reset

- Check that there is a pull up resistor on reset signal
- Check that reset meets timing requirement
