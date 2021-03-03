+++
title = "Serial ATA"
linktitle = "SATA"

date = 2020-06-18T17:22:00+02:00

keywords = ["serial", "ata", "serdes", "sata"]
description = "Serial Ata storage protocol informations"

weight = 0
+++

![Serial ATA Port](sata_port.jpg "Serial ATA Port")

Serial ATA (SATA) is a standard that allows to link storage units like Hard Drives, SSD, or optical drives. Serial ATA is the successor of Parallel ATA (PATA). It is a serial link which is composed by two differential pairs, one to send data (TX) and the other one to receive data (RX).  
Channel coding is 8/10 type, this means that to transmit 8 bits of real data, 10 bits are really transmitted on the chanel.  
Serial ATA standard speed has been enhanced over time, at this time there are three speeds available. (backward compatible)

- SATA I - 1.5 Gbps - Maximum speed : 150 MB/s
- SATA II - 3 Gbps - Maximum speed : 300 MB/s
- SATA III - 6 Gbps - Maximum speed : 600 MB/s

Serial ATA is a point to point link, but it is possible to multiply ports using "port multiplier" devices

## Channel

- Differential impedance : 100 Ohms
- Single ended impedance : 50-55 Ohms

### Pinout

#### Host side (motherboard)

![Serial ATA Port](sata_int.gif "Serial ATA Port")

| Pin# | Name | Notes      |
| ---- | ---- | ---------- |
| 1    | GND  | Ground     |
| 2    | A+   | Transmit + |
| 3    | A-   | Transmit - |
| 4    | GND  | Ground     |
| 5    | B-   | Receive -  |
| 6    | B+   | Receive +  |
| 7    | GND  | Ground     |

#### Device side (HDD, SSD)

![Serial ATA Port](sata_int.gif "Serial ATA Port")

| Pin# | Name | Notes      |
| ---- | ---- | ---------- |
| 1    | GND  | Ground     |
| 2    | A+   | Receive +  |
| 3    | A-   | Receive -  |
| 4    | GND  | Ground     |
| 5    | B-   | Transmit - |
| 6    | B+   | Transmit + |
| 7    | GND  | Ground     |

## Testing tools

### Linux

- HDD parameters set : hdparm
- Smart monitoring : smartctl
- I/O Measure : iozone
- HDD paritionning : parted
- Raid Management : mdadm
- Set SATA Phy in test mode : devmem
