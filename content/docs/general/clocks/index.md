+++
title = "Clocks"
linktitle = "Clocks"

date = 2020-06-18T14:44:00+02:00

keywords = ["clocks", "oscillators", "jitter", "frequency", "phase"]
description = "Informations about clocks and oscillators"

weight = 0
+++

## Requirements

### Layout

- Crystal are as close as possible to the device
- Crystal trace width is at least 12 mils
- There is a ground ring around crystals

## Design

### Compute Crystal capacitors

![Crystal schematics](oscillator.jpg "Crystal schematics")

The following formula may be used to calculate a parallel resonant crystal's external load capacitors:  
{{< math >}}
C_L = \frac{C_{X1} \times C_{X2}}{C_{X1} + C_{X2}} + C_{stray}
{{< /math >}}

where :  
{{< math " C_L = " />}} the crystal load capacitance  
{{< math "C_{stray} = " />}} the stray capacitance in the oscillator circuit, which will normally be in the 2pF to 5pF range.

Assuming that {{< math "C_{X1} = C_{X2}" />}} then the equation becomes:  
{{< math >}}
C_{X1} = 2 \times ( C_L - C_{stray} )
{{< /math >}}

It is difficult to know exactly what the stray capacitance is, but if you find the oscillation frequency is too high, the load capacitor values can be increased.
If the frequency is too low, the load capacitors can be decreased.  
The device data sheet may also define a maximum crystal series resistance {{< math " R_s " />}}.
