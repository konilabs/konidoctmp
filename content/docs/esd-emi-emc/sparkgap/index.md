+++
title = "Sparkgap"
linktitle = "Sparkgap"

date = 2020-06-16T22:45:00+02:00
publishdate = 2020-06-16T22:45:00+02:00

draft = false

tags= []
aliases = []

audio = []
images = []

keywords = ["esd", "protection", "pcb", "emi"]
description = "Discover the cheapest way to do an EMI protection"

slug = ""
translationkey = ""

hide_toc = false
hide_from_menu = false
hide_title = false

weight = 0
+++

Sparkgap is the cheapest way to do an ESD protection on a PCB without any component. It works very simple, it uses the fact that if voltage is too high it will produce a spark and short the two conductors together.

<!--more-->

Here are some examples of sparkgaps designed on PCB :

![Sparkgap example](sparkgap.png "Sparkgap example")
![Sparkgap example 2](sparkgap2.png "Sparkgap example 2")
![Sparkgap example 3](sparkgap3.png "Sparkgap example 3")

## Design tips

- Place the sparkgap as close as possible to connectors or where ESD can occur. ESD Wave has to be shorted to ground as soon as possible.
- Remove coating on the sparkgap. Only plating and copper should remain.
- 0.2mm space is a good basic spacing value

## Formula
{{< math >}}
V=\frac{3000 \times P \times D}{1000}+1350
{{< /math >}}

{{< math "V" />}} is voltage that will cause a spark in Volts  
{{< math "P" />}} is the atmospheric pressure in hectopascal (usually 1013 hPa)  
{{< math "D" />}} is distance in millimeters

As a rule of thumb : **0.2mm space gives you approximately 2kVolts** due to PCB tolerances and atmospheric pressure variation.

## External links

[EEVBlog Sparkgap video](https://www.youtube.com/watch?v=_EMAggN5H-w "EEVBlog Sparkgap video")
