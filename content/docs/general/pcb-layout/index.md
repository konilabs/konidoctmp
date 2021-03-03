+++
title = "PCB Layout"
linktitle = "PCB Layout"

date = 2020-06-18T16:09:00+02:00

keywords = ["pcb", "layout", "general", "rules"]
description = "PCB Layout general rules"

weight = 0
+++

## General

- 5 mm without chips on all PCB edges
- Decoupling capacitors vias are routed as follow
- Bulk capacitors : 22uF every square inch per power plane
- Decoupling capacitors : 1x100nF per power ball
- Power planes are as large as possible
- Analog power planes are as large as possible

## Silkscreen

- PCB revision shall be indicated
- PCB reference shall be indicated

## Connectors

- Silkscreen sign shall indicate connector Pin#1
- A text shall indicate connector function
- All connectors even debug shall be easy to access
- A line shows connector outline
- Check that location reference is indicated as on the schematics
