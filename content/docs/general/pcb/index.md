+++
title = "PCB"
linktitle = "PCB"

date = 2020-06-18T15:48:00+02:00
publishdate = 2020-06-18T15:48:00+02:00

keywords = ["electronic", "pcb", "board"]
description = "Printed circuit board informations"

weight = 0
+++

## Stackup

PCB is composed by coper foils seperated with isolating materials. To build a PCB with more than two layers, PCB manufacturer assemble following items un PCB comportant plus de deux couches, le fabricant de PCB doit assembler plusieurs composants :

- Core : This is an epoxy plate with two coper foils.
- Copper foils or layers
- Prepreg : One or more glass fiber sheets mixed with epoxy to isolate two copper layers

### Copper

Copper layer thickness is often rated in ounces (oz). Higher number means that copper layer is thicker and also means that more current can flow through it.
1 oz coper foil is equal to 1 oz weight for a 1 inch² area (43.94 kg/m²).
Standard copper layer thickness are 0.5 oz, 1 oz et 2 oz.

| Weight | Thickness (mils) | Thickness (mm) |
| ------ | ---------------- | -------------- |
| 1/2 oz | 7 mils           | 0.18 mm        |
| 1 oz   | 14 mils          | 0.36 mm        |
| 2 oz   | 28 mils          | 0.72 mm        |

### Soldermask

Soldermask protects PCB traces, it also gives color to PCB (green, red, black).  
PCB Manufacturer adjusts soldermask clearance over chips pads.  
In CAD software, clearance shall be set to pad size.

### PCB Finishing

PCB finishing is the last process of PCB manufacturing. It will protect copper pads from oxydation.  
Here are the most common finishes :  

**Hot Air Solder Leveling (HASL)**  
This is the cheapest, it can be used on very simples PCBA.
Final result is not flat, it cannot be used when using BGA chips or on high density PCBA

**Organic Solderability Preservative (OSP)**  
Cost is higher than HASL but lower than ENIG.
It can be used on dense PCBs, main drawback is that PCB must but assembled right after unpacking due to OSP oxydation.  
Hand soldering is hard on OSP.  
OSP is suitable for production PCBs.

**Electroless Nickel Immersion Gold (ENIG)**  
This is the most expensive surface finishing.
It can be used on dense PCBs, there is no oxydation issue and hand soldering is easy.  
It is recommended for prototypes or low volumes PCBs.
