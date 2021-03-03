+++
title = "How to make a PCB"
linktitle = "How to make a PCB"

date = 2020-06-18T15:06:00+02:00
publishdate = 2020-06-18T15:06:00+02:00

keywords = ["pcb", "core", "prepreg"]
description = "Explanations on how a PCB is made"

weight = 0
+++

When number of layer is greater than two Printed Circuit Boards (PCB) are made by stacking multiples cores and prepreg sheets.
Internal layers are manufactured first then outer layers are done at the end.

<!--more-->

## Process

### Step 1 : Core

![PCB Core](1_core.png "PCB Core")
"Core" sheets are composed by an epoxy resin with a copper sheet on each side. Usually PCB manufacturer receive it already assembled with a photosensitive resin applied on each copper side.

### Step 2 : Photomask

![PCB Core light coating](2_core_lightcoating.png "PCB Core light coating")
UV light with photo film are used to print traces and pads on photosensitive resin. Photosensitive resin gets hard when it receives UV light. This process protects copper areas where traces are located.

### Step 3 : Traces printing

![PCB traces printing](3_dev.png "PCB traces printing")
Non protected copper is dissolved by a chemical bath. Then another bath removes remaining resins.

### Step 4 : Repeat for each core

![PCB etching](4_etching.png "PCB etching")
Step one, two and three are repeated to prepare each core. Two times for a six layers PCB, Three times for eight layers PCB, etc..

### Step 5 : Core stacking

![PCB Core stacking](5_stacking.png "PCB Core stacking")
All cores are stacked with a prepreg isolating sheet between each. The "Prepreg" sheet is made of multiple fiberglass layers glued with resin. The two external layers are created by assembling a copper sheet on top of "prepreg".

### Step 6 : Glue all layers

![PCB Glueing](6_pressage.png "PCB glueing")
All assembled layers are compressed together at high temperature. This allows to harden resin and to glue all layers.

### Step 7 : Drill vias

![PCB via drilling](7_percage.png "PCB via drilling")
Vias are drilled using a laser beam or a drilling machine depending on hole size.

### Step 8 : Vias plating

![PCB via plating](8_plating1.png "PCB via plating")
![PCB via plating](8_plating2.png "PCB via plating")
To allow via to conduct between all layers, copper is added inside via holes using electrolysis process. During this step, external layers copper thickness increase also.

### Step 9 : External layers lightmask

![PCB external layers lightmask](9_external_dev.png "PCB external layers lightmask")
External layers are now printed using UV lighting. This is the same process as for internal layers

### Step 10 : Print external layers

![PCB external layers lightmask 2](10_external_dev2.png "PCB external layers lightmask 2")
Chemical bath dissolves non protected coper

### Step 11 : Apply soldermask

![PCB soldermask](11_soldermask.png "PCB soldermask")
Soldermask is applied on PCB external layers. This gives PCB final color, it is usually green.

### Step 12 : Harden soldermask

![PCB soldermask hardening](12_soldermask_uv.png "PCB soldermask hardening")
A light mask and a UV light are used to harden solder mask on all PCB except where chips will be welded.

### Step 13 : Clean soldermask

![PCB soldermask cleaning](13_soldermask_finished.png "PCB soldermask cleaning")
Remaining non hardened soldermask is removed using a chemical bath.

### Step 14 : Apply silkscreen

![PCB silkcreen](14_serigraphy.png "PCB silkcreen")
Silkscreen is applied on external layers

### Step 15 : Specific treatments

![PCB Gold plating 1/2](15_gold_plating1.png "PCB Gold plating 1/2")
![PCB Gold plating 2/2](15_gold_plating1.png "PCB Gold plating 2/2")
At this step, it is possible to add some specific treatment like gold plating on part of PCB.

### Step 16 : PCB panel cutting

![PCB Panel cutting](16_decoupe.png "PCB Panel cutting")
![Finished PCB](16_final.png "Finished PCB")

Finally, PCB panel is cut and divided into individual PCB.
