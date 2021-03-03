+++
title = "DC/DC Converters"
linktitle = "DC/DC"

date = 2020-06-19T02:13:00+02:00

keywords = ["dcdc","buck","boost","controller","shortcut"]
description = "DC/DC Buck and Boost converters designing guides"

weight = 0
+++

## Design

### Input and ouput current test

It is always useful to be able to measure input and output current. It is not recommended at all to use standard 0 Ohms shunts.  
My advice is to use 1206 or bigger footprint with a trace under. This gives following schematics:  
![Power shunt schematics](power_shunt_schem.jpg "Power shunt schematics")
In normal case, test shunt is not populated. When current measure is required, simply cut the PCB trace and use test shunt 1206 pads.  
![Power shunt uncut](power_shunt_uncut.png "Power shunt uncut")
![Power shunt cut](power_shunt_cut.png "Power shunt ut")

### Output L/C filter

Rule of thumb is to select a cut off frequency at 1/10 of the switching regulator frequency.

{{< math >}}
L=\frac {1} {(2 \times \pi \times f)^2 \times C}
{{< /math >}}

### Multiphase DC/DC

Number of phases : Consider 20A per phase, up to 30A max

## Testing

- Load/Line regulation : Dc Vin +/- 5% (12V), check regulator voltage value at min and max load. Max and min value are determined by chips on PCBA
- Check DC In power consumption during spinup phase and stress power consumption and in all sleep modes.
- Power consumption : Check that power consumption of each power rail is within power budget range
- Efficiency at 10%, 50% and 100% load (required >85% over 50% load)
- Ripple : Check that ripple is within other PCBA components range at regulator output under maximum and minimum load
- Dynamic load : Connect a dynamic load, change load from 30% to 100% at 1kHz frequency. Check that ripple stays in the good range
- OCP protection level : Measure OCP protection level. Do the following tests : Power ON -> Short, Short -> Power On. Re power UP. Criteria, converter shall have no damage
- Rise time (no spike)
- Falling time < 10ms (no spike)
- Overshoot and Undershoot : Turn On and Off each DC/DC converter. Check that over and undershoot is in other PCBA components range
- Output voltage on product temperature range : 0°C and 40°C with product burnin
- Check Power ON and power off sequence trough all product sleep modes / and power on
- Cold Start : DC/DC converters starts at 0°C
