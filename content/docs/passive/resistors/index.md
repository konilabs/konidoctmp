+++
title = "Resistors"
linktitle = "Resistors"

date = 2020-06-19T14:17:00+02:00
publishdate = 2020-06-19T14:17:00+02:00

tags= []
aliases = []

audio = []
images = []

keywords = ["electronics", "passive", "resistor", "ohms", "smt"]
description = "Page about the most basic component, the resistor"

slug = ""
translationkey = ""

hide_toc = false
hide_from_menu = false
hide_title = false

weight = 0
+++

## Normalized values

**E3 (± 20 %)**  
100, 220, 470

**E6 (± 10 %)**  
100, 150, 220, 330, 470, 680

**E12 (± 10 %)**  
100, 120, 150, 180, 220, 270, 330, 390, 470, 560, 680, 820

**E24 (± 5 %)**  
100, 110, 120, 130, 150, 160, 180, 200, 220, 240, 270, 300, 330, 360, 390, 430, 470, 510, 560, 620, 680, 750, 820, 910

**E48**  
100, 105, 110, 115, 121, 127, 133, 140, 147, 154, 162, 169, 178, 187, 196  
205, 215, 226, 237, 249, 261, 274, 287  
301, 316, 332, 348, 365, 383  
402, 422, 442, 464, 487  
511, 536, 562, 590  
619, 649, 681  
715, 750, 787  
825, 866  
909, 953  

**E96 (± 1 %)**  
100, 102, 105, 107, 110, 113, 115, 118, 121, 124, 127, 130, 133, 137, 140, 143, 147, 150, 154, 158, 162, 165, 169, 174, 178, 182, 187, 191, 196  
200, 205, 210, 215, 221, 226, 232, 237, 243, 249, 255, 261, 267, 274, 280, 287, 294  
301, 309, 316, 324, 332, 340, 348, 357, 365, 374, 383, 392  
402, 412, 422, 432, 442, 453, 464, 475, 487, 499  
511, 523, 536, 549, 562, 576, 590  
604, 619, 634, 649, 665, 681, 698  
715, 732, 750, 768, 787  
806, 825, 845, 866, 887  
909, 931, 953, 976  

## Pulse loads

Resistors have a well known limit for mean power, but they have also a limit regarding power and voltage depending on duration. Here is data extracted from standard SMT resistors datasheet. This can be useful to choose package for resistors that are used to absorb transient loads or ESD.

### Single pulse

![Maximum single pulse power on a resistor](resistor-single-pulse.jpg "Maximum single pulse power on a resistor")
This curve is only valid when average power dissipated inside resistor is close to 0.

### Continuous pulse

![Maximum continuous pulse power on a resistor](resistor-continuous-pulse.jpg "Maximum continuous pulse power on a resistor")
This curve is valid when mean power dissipated inside resistor is not null but under allowed average limit but not null

### Voltage pulse

![Maximum voltage pulse on a resistor](resistor-voltage-pulse.jpg "Maximum voltage pulse on a resistor")
This curves gives an idea of maximum allowed voltage on a resistor during small amount of time.

## Shunts

Shunts resistors are not really 0 Ohms, typical value for shunts is 50 milliOhms. Theses components are made to be used as configuration straps. It is not recommended to use them on power rails.  
If a shunt is absolutely required on a high power trace, use a precision resistor with a known and precise value.
