+++
title = "DRAM Testing"
linktitle = "Testing"

date = 2020-06-16T16:48:00+02:00

keywords = ["dram", "testing", "ram"]
description = "Tools for DRAM Testing"

weight = 0
+++

## Electrical

### DDR Side Power

#### VDDQ (DDR Power)

- Ripple (Min and Max voltage)
- Mean voltage

Criteria : Check DDR voltage

#### VRef_DQ

- Ripple (Min and Max voltage)
- Mean voltage

Criteria : Vmin = 0.49 _ VDDQ Mean / Vmax = 0.51_ VDDQ Mean

#### VRef_CA

- Ripple (Min and Max voltage)
- Mean voltage

Criteria : Vmin = 0.49 _ VDDQ Mean / Vmax = 0.51_ VDDQ Mean

#### VTT (Termination power)

- Ripple (Min and Max voltage)
- Mean voltage

### CPU Side Power

#### VDDQ (DDR Power)

- Ripple (Min and Max voltage)
- Mean voltage

Criteria : Check CPU Datasheet

#### VRef_DQ

- Ripple (Min and Max voltage)
- Mean voltage

Criteria : Vmin = 0.49 _ VDDQ Mean / Vmax = 0.51_ VDDQ Mean

#### VRef_CA

- Ripple (Min and Max voltage)
- Mean voltage

Criteria : Vmin = 0.49 _ VDDQ Mean / Vmax = 0.51_ VDDQ Mean

### Data signals

- For each Data group, check for longest and shortest DQ signal length.
  Check Setup and Hold time vs DQS signal.
  Check Overshoot and Undershoot, Vmin, Vmax Rise time, fall time
- For each Data group, check for longest and shortest DQ signal length.
  Check Setup and Hold time vs DQS signal.

### Command and address signals

- For following signals WE#, CAS#, RAS#, CS#, Longest address signal, Shortest address signal
  Check Setup and Hold time vs associated CLK for each CS# signal.
  Check Vmax, Vmin, T pulse, Rise time, fall time

### Datastrobe signals

- Check Tdss, Tdsh, TDQSS for each DQS signal vs CLK signal
- Do clock classic test for DQS signals

## Functional

For x86 platform :

- 24h Memtest x86+

For ARM platform :

- 24h Memtester under linux
- 24h mtest under Uboot

For All platforms :

- All RAM slots are functional with all DDR in the AVL list
- Detected memory size is correct in Bios and OS ( for linux use cat/proc/meminfo)
- Check memory bandwidth (Linux : steam)

## 2nd source

- All first source tests
- EMI
- SRT

## Testing tools

### Uboot

- Memory stress test : mtest

### Linux

- RAM Performance test : stream (http://www.cs.virginia.edu/stream/ref.html)
- Memory stress test : memtester

## Testing

| Document   | Category | Item                                                                                                                                                                                                         |
| ---------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Hardware   | RAM      | Power Vddq Min, Max, Mean voltages (ram side)                                                                                                                                                                |
| Hardware   | RAM      | Vrefdq Min, Max, Mean voltages (ram side)                                                                                                                                                                    |
| Hardware   | RAM      | Vreca Min, Max, Mean voltages (ram side)                                                                                                                                                                     |
| Hardware   | RAM      | Vtt Min, Max, Mean voltages (ram side)                                                                                                                                                                       |
| Hardware   | RAM      | Power Vddq Min, Max, Mean voltages (CPU side)                                                                                                                                                                |
| Hardware   | RAM      | Vrefdq Min, Max, Mean voltages (CPU side)                                                                                                                                                                    |
| Hardware   | RAM      | Vreca Min, Max, Mean voltages (CPU side)                                                                                                                                                                     |
| Hardware   | RAM      | Vtt Min, Max, Mean voltages (CPU side)                                                                                                                                                                       |
| Hardware   | RAM      | For each data group on longest and shortest DQ : Check Setup and Hold time vs DQS signal.                                                                                                                    |
| Hardware   | RAM      | For each data group on longest and shortest DQ : Check Overshoot and Undershoot, Vmin, Vmax Rise time, fall time                                                                                             |
| Hardware   | RAM      | For following signals WE#, CAS#, RAS#, CS#, Longest address signal, Shortest address signal Check Setup and Hold time vs associated CLK for each CS# signal. Check Vmax, Vmin, T pulse, Rise time, fall time |
| Hardware   | RAM      | Datastrobe : Check Tdss, Tdsh, TDQSS for each DQS signal vs CLK signal                                                                                                                                       |
| Hardware   | RAM      | Do clock classic test for DQS signals                                                                                                                                                                        |
| Functional | RAM      | 24h Memtester under linux                                                                                                                                                                                    |
| Functional | RAM      | 24h mtest under Uboot                                                                                                                                                                                        |
| Functional | RAM      | Detected memory size is correct in Bios and OS ( for linux use cat/proc/meminfo)                                                                                                                             |
| Functional | RAM      | Check memory bandwidth                                                                                                                                                                                       |
