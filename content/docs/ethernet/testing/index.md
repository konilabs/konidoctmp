+++
title = "Ethernet testing"
linktitle = "Testing"

date = 2020-06-17T15:33:00+02:00

keywords = ["ethernet","lan","testing"]
description = "Items to test on an ethernet testing"

weight = 0
+++

| Document   | Category  | Item                                                                                                  |
| ---------- | --------- | ----------------------------------------------------------------------------------------------------- |
| Functional | LAN       | System works with : 1Gbit Full & Half Duplex, 100 Mbit Full & Half Duplex, 10 Mbit Full & Half Duplex |
| Functional | LAN       | System can support 1000 Wake On Lan                                                                   |
| Functional | LAN       | Check LAN led color in 10M, 100M and Gigabit                                                          |
| Functional | LAN       | RX and TX raw performance in Gigabit (iperf)                                                          |
| Functional | LAN       | MAC address can be programmed                                                                         |
| Functional | LAN       | Link can be established in 10M/100M/1000M in half and full duplex in Uboot and OS                     |
| Functional | LAN       | Link can be established with different cable lengths (10m, 100m and 110m)                             |
| Functional | LAN       | LAN works with cross and straight cables                                                              |
| Functional | LAN       | Brightness of LED (activity / link speed) is the same                                                 |
| Functional | LAN       | Link activity led color is correct                                                                    |
| Functional | LAN       | Activity led blinks on network activity                                                               |
| Functional | LAN       | LAN stress in 100M during 24 hours                                                                    |
| Functional | LAN       | LAN stress in 1000M during 24 hours                                                                   |
| Functional | LAN       | LAN teaming is functional                                                                             |
| Functional | LAN       | LAN Jumbo frames is functional                                                                        |
| Functional | LAN       | LAN1 is on first CPU controller                                                                       |
| Functional | LAN       | LAN1 MDIO address is 0, LAN2 MDIO address is 1                                                        |
| Hardware   | LAN RGMII | Clock check                                                                                           |
| Hardware   | LAN MDIO  | Clock and data check                                                                                  |
| Hardware   | LAN 10M   | Link Pulse 100 Ohm without TPM                                                                        |
| Hardware   | LAN 10M   | Link Pulse load 1 without TPM                                                                         |
| Hardware   | LAN 10M   | Link Pulse load 2 without TPM                                                                         |
| Hardware   | LAN 10M   | Link Pulse 100 ohm with TPM                                                                           |
| Hardware   | LAN 10M   | Link Pulse Load 1 with TPM                                                                            |
| Hardware   | LAN 10M   | Link Pulse Load 2 with TPM                                                                            |
| Hardware   | LAN 10M   | MAU Ext                                                                                               |
| Hardware   | LAN 10M   | MAU Ext Inverted                                                                                      |
| Hardware   | LAN 10M   | MAU Int                                                                                               |
| Hardware   | LAN 10M   | MAU Int Inverted                                                                                      |
| Hardware   | LAN 10M   | TP_IDL 100 ohm without TPM                                                                            |
| Hardware   | LAN 10M   | TP_ID Load 1 without TPM                                                                              |
| Hardware   | LAN 10M   | TP_ID Load 2 without TPM                                                                              |
| Hardware   | LAN 10M   | TP_IDL 100 ohm with TPM                                                                               |
| Hardware   | LAN 10M   | TP_ID Load 1 with TPM                                                                                 |
| Hardware   | LAN 10M   | TP_ID Load 2 with TPM                                                                                 |
| Hardware   | LAN 10M   | Differential Voltage                                                                                  |
| Hardware   | LAN 10M   | Harmonic                                                                                              |
| Hardware   | LAN 100M  | AOI Template                                                                                          |
| Hardware   | LAN 100M  | Output Voltage (+Vout)                                                                                |
| Hardware   | LAN 100M  | Output Voltage (-Vout)                                                                                |
| Hardware   | LAN 100M  | Amplitude Symmetry                                                                                    |
| Hardware   | LAN 100M  | Rise Time(+ve)                                                                                        |
| Hardware   | LAN 100M  | Rise Time(-ve)                                                                                        |
| Hardware   | LAN 100M  | Fall Time(+ve)                                                                                        |
| Hardware   | LAN 100M  | Fall Time(-ve)                                                                                        |
| Hardware   | LAN 100M  | Rise/Fall Symmetry(+ve)                                                                               |
| Hardware   | LAN 100M  | Rise/Fall Symmetry(-ve)                                                                               |
| Hardware   | LAN 100M  | Overshoot(+ve)                                                                                        |
| Hardware   | LAN 100M  | Overshoot(-ve)                                                                                        |
| Hardware   | LAN 100M  | Transmit Jitter(+ve)                                                                                  |
| Hardware   | LAN 100M  | Transmit Jitter(-ve)                                                                                  |
| Hardware   | LAN 100M  | Distortion (Duty Cycle)                                                                               |
| Hardware   | LAN 1G    | Template Test Point A on each of the four signal pairs                                                |
| Hardware   | LAN 1G    | Template Test Point B on each of the four signal pairs                                                |
| Hardware   | LAN 1G    | Template Test Point C on each of the four signal pairs                                                |
| Hardware   | LAN 1G    | Template Test Point D on each of the four signal pairs                                                |
| Hardware   | LAN 1G    | Template Test Point F on each of the four signal pairs                                                |
| Hardware   | LAN 1G    | Template Test Point H on each of the four signal pairs                                                |
| Hardware   | LAN 1G    | Peak Volt Point A on each of the four signal pairs                                                    |
| Hardware   | LAN 1G    | Peak Volt Point B on each of the four signal pairs                                                    |
| Hardware   | LAN 1G    | %Diff A and B on each of the four signal pairs                                                        |
| Hardware   | LAN 1G    | Peak Volt % Diff C on each of the four signal pairs                                                   |
| Hardware   | LAN 1G    | Peak Volt % Diff D on each of the four signal pairs                                                   |
| Hardware   | LAN 1G    | Droop Point G on each of the four signal pairs                                                        |
| Hardware   | LAN 1G    | Droop Point J on each of the four signal pairs                                                        |
| Hardware   | LAN 1G    | Transmitter Distortion on each of the four signal pairs                                               |

## Testing tools

### Linux

- Set LAN Speed/Duplex : ethtool
- LAN Performance test : iperf, ttcp
- Set Ethernet Controller in test mode : sendpkt
