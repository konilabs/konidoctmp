+++
title = "Acoustics toolbox"
linktitle = "Acoustics"

date = 2020-04-14T13:28:00Z
publishdate = ""
expirydate = ""

draft = false

description = "Acoustics toolbox and useful formulas to help product development"
tags= []
aliases = []

audio = []
images = []

keywords = ["acoustic", "noise", "decibel", "sound", "loudness"]
slug = ""
translationkey = ""

hide_toc = false
hide_from_menu = false
hide_title = false

+++

This page provides useful information on acoustic domain. Goal is to help to plan sound level and describe how to measure.

<!--more-->

## Reference documents

**ISO 11201:2010** : Acoustics - Noise emitted by machinery and equipment  
Determination of emission sound pressure levels at a work station and at other specified positions in an essentially free field over a reflecting plane with negligible environmental corrections  

**ISO 7779:2010** : Acoustics -- Measurement of airborne noise emitted by information technology and telecommunications equipment

## Useful formulas

### Convert sound power to sound pressure

{{< math >}}
L_p=L_w-|{10.log_{10}(\frac{Q}{4 \pi r^2})}|
{{< /math >}}
{{< math "L_p" />}} is the sound Pressure in {{< math "dB_A" />}}  
{{< math "L_w" />}} is the sound Power in {{< math "dB_A" />}}  
{{< math "Q" />}} is Directivity factor (1 = full sphere, 2 = half sphere, 4 = quarter of sphere)  
{{< math "r" />}} is the distance in meter

### Compute background noise correction factor

{{< math "K_{1a}" />}} is a correction factor for acoustic measure depending on background noise value delta. It shall be substracted from measured sound pressure or power  
{{< math >}}
K_{1a}=-10.log(1-10^{0.1\Delta_L})
{{< /math >}}
{{< math "\Delta_L=" />}}A-weighted measure - A-weighted background noise  
If {{< math "\Delta_L > 15 \medspace dB_A" />}} then {{< math "K_{1a} = 0" />}}

#### Measure deviation

If {{< math " \Delta_L > 10 \medspace dB_A " />}} then measure is Grade 1. Deviation is {{< math " \pm 0.5 \medspace dB_A " />}}  
If {{< math " 6 \medspace dB_A \leq \Delta_L \leq 10 \medspace dB_A " />}} then measure is Grade 2. Deviation is {{< math " \pm 1.5 \medspace dB_A " />}}  
If {{< math "6 \medspace dB_A < \Delta_L " />}} then measure is not compliant with ISO standard. Result is an estimated upper value

## Sound Pressure differences

* Every {{< math " 3 \medspace dB_A " />}}, sound pressure level doubles
* Every {{< math " 10 \medspace dB_A " />}}, human feels the noise double
