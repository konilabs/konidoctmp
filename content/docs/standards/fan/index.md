+++
title = "FAN"
linktitle = "FAN"

date = 2020-06-22T17:30:00+02:00

keywords = ["fan", "cooling", "intel", "pwm"]
description = "Fan standards"

weight = 0
+++

There are two types of fans connectors with 3 or 4 pins. The three pins models allows to power then fan and to get a speed signal. The four pins models adds a signal which allows to control fan speed using a PWM signal.

## Signals

### Power

Fans are usually powered with +12V voltage, but it is possible to lower supply voltage to lower fan speed. If voltage is too low, fan will not restart if it is blocked. Fan speed signal can also be wrong.  
As a rule of thumb it is recommended to always keep supply voltage over 5V for a 12V fan.

### Fan speed signal (tachometer)

This signal allows to check fan rotational speed. It is a square shaped signal. Fan usually produces 2 or 4 edges per rotation. Signal is often open collector type. A 12V pull up resistor is necessary.  
Fan speed can be obtained by measuring time between fan speed signal edges.

### PWM

This signals allows to modify fan speed without changing power supply voltage. Speed depends on Ton(5V)/Toff(0V) ration. Range is usually between 30% and 70%. Signal needs to have a fixed frequency (25 kHz recommanded) with a 5V amplitude. If this signal is not connected, fan runs at his maximum speed.

5V = Maximum speed  
0V = Minimum speed

## Pinout

### 3 pins connector

![34 pins fan connector](connector_mb_fan_3pin.jpg "3 pins fan connector")

| Pin# | Name  | Notes            |
| ---- | ----- | ---------------- |
| 1    | GND   | Ground           |
| 2    | +12V  | Power            |
| 3    | Tachy | Fan speed signal |

### 4 pins connector (PWM)

![4 pins fan connector](connector_mb_4pin_header.png "4 pins fan connector")

| Pin# | Name  | Notes             |
| ---- | ----- | ----------------- |
| 1    | GND   | Ground            |
| 2    | +12V  | Power             |
| 3    | Tachy | Fan speed signal  |
| 4    | Pwm   | Fan speed setting |

Part number : Molex 22-04-1041 ( KK type )

## Standards

[Intel PWM 4 wires standard v1.2](intel_4wire_pwm_fans_specs_rev1_2.pdf "Intel PWM 4 wires standard v1.2")
