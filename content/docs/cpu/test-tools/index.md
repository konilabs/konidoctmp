+++
title = "CPU Test tools"
linktitle = "Test tools"

date = 2020-06-16T15:20:00+02:00

keywords = ["cpu","testing", "toolbox"]
description = "Tools for CPU testing"

weight = 0
+++

## Test tools

### Windows

- CPU Performance test : SiSoft Sandra Lite (Dhrystone)
- CPU Performance test : SuperPI (single thread)
- CPU Performance test + Burn : Prime95
- CPU Performance test : Fritz chess

### Linux

- CPU Performance test : dhry21, dhry11
- CPU stress tool : cpuburn
- CPU Performance test + Burn : Prime95

#### Detect CPU Model

```bash
cat /proc/cpuinfo
```

#### CPU Burn - Linux x86

Installation

```bash
aptitude install cpuburn`
```

For optimal result, remove CPU frequency scalling by choosing performance governor.
Set this command on all cores.

```bash
  echo "ondemand" > /sys/devices/system/cpu/cpu0/cpufreq/scaling_governor
  echo "ondemand" > /sys/devices/system/cpu/cpu1/cpufreq/scaling_governor
```

Run burnP6 command on all cores

```bash
  burnP6&
  burnP6& ...
```

#### Check CPU frequency

Displays CPU package frequency :

```bash
cat /proc/cpuinfo | grep MHz
```

Displays real frequency :

```bash
cpufreq
```

Check that CPU is not idle

```bash
top
```
  
End benchmark

```bash
killall burnP6
```
