+++
title = "Power inductors"
linktitle = "Inductors"

date = 2020-06-19T02:13:00+02:00

keywords = ["power", "inductors"]
description = "Power inductors documentation"

weight = 0
+++

## Core material

Recommended core material depends on switching frequency

- < 100 kHz : Iron powder, ferrite, Superflux
- between 100 kHz and 1 MHz : Ferrite, Superflux
- \> 1 MHz : Ferrite

## Inductance value

- Higher inductance value = smaller ripple current
- Lower inductance = higher ripple current

## Rule of thumb formula

### Step down converter

{{< math >}}
L=\frac {(U_{inmax}-U_{out})*(U_{out})} {U_{inmax} \times 0.3 \times I_{out} \times f}
{{< /math >}}

### Step up converter

{{< math >}}
L=\frac {(U_{out}-U_{inmin}) \times {U_{in}}^2} {2 \times 0.2 \times I_{out} \times {U_{out}}^2}
{{< /math >}}


## Inductance current rating

Maximum current can be replaced by saturation current.

### Step down converter inductor

Nominal current :
{{< math >}}
I_n=I_{out}
{{< /math >}}

Maximum current :
{{< math >}}
I_{max}=1.5 \times I_n
{{< /math >}}

### Step up converter inductor

Nominal current :
{{< math >}}
I_n=\frac {U_{out}} {U_{in}} \times I_{out}
{{< /math >}}

Maximum current :
{{< math >}}
I_{max}=2 \times I_n
{{< /math >}}

## Inductor DC resistance

For a same inductor package size :

- Higher inductance means higher DC resistance
- Lower inductance means lower DC resistance
- Shielded inductors have a lower DC resistance at same size

## EMC

To reduce EMC, use magnetically shielded power inductors.  
Do not route any conductor tracks under the inductor.  
Inductors packages can be changed from shielded to unshielded while maintaining solder pad compatibility.
