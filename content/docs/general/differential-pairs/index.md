+++
title = "Differential Pairs"
linktitle = "Differential Pairs"

date = 2020-06-18T15:02:00+02:00
publishdate = 2020-06-18T15:02:00+02:00

keywords = ["differential", "pairs", "layout", "high", "speed"]
description = "Documentation about differential pairs management in layout"

weight = 0
+++

To define :

- Serpentine spacing
- GND guard

### PCB

- If signal escape from BGA without a VIA, add a plane void under
- When using SMT connectors, add a plane void under
- Add plane void under serial capacitors
- Avoid as much as possible reference plane change
- If there is a reference plane change, add bypass capacitors
