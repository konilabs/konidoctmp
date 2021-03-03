+++
title = "Video"
linktitle = "Video"

date = 2020-06-24T17:00:00+02:00

keywords = ["video", "resolution", "display"]
description = "Information about video and resolutions"

weight = 0
+++

## Resolution

| Name             | Resolution  |
| ---------------- | ----------- |
| HD 720p          | 1280 x 720  |
| Full HD 1080p    | 1920 x 1080 |
| Cinema 2K        | 2048 x 1080 |
| WQHD QHD 1440p   | 2560 x 1440 |
| QHD+ WQXGA+      | 3200 x 1800 |
| 4K UHD Ultra HD  | 3840 x 2160 |
| DCI 4K Cinema 4K | 4096 x 2160 |
| 5K UHD+          | 5120 x 2880 |
| 8K UHD           | 7680 x 4320 |

## Standards

### DP

| Version | Max Bandwidth (Gbit/s) | Max Resolution                   |
| ------- | ---------------------- | -------------------------------- |
| 1.1     | 8.64                   | 2560x1600 60Hz                   |
| 1.2a    | 17.28                  | 3840x2160 60Hz                   |
| 1.3     | 32.4                   | 5120x2880 60Hz - 7680x4320 30Hz  |
| 1.4     | 32.4                   | 3840x2160 120Hz - 7680×4320 60Hz |

### HDMI

| Version | Max Bandwidth (Gbit/s) | Max Resolution                  |
| ------- | ---------------------- | ------------------------------- |
| 1.0     | 3.96                   | 1920x1200 60Hz                  |
| 1.3     | 10.2                   | 2560x1600 60Hz                  |
| 1.4     | 10.2                   | 2560x1600 60Hz - 4096x2160 24Hz |
| 2.0     | 18                     | 4096x2160 60Hz                  |

### DVI

| Version       | Max Bandwidth (Gbit/s) | Max Resolution                  |
| ------------- | ---------------------- | ------------------------------- |
| D-Single Link | 3.96                   | 1440x900 60Hz                   |
| D-Dual Link   | 7.92                   | 2560x1600 60Hz - 3840x2400 33Hz |
| Analog        |                        | 2048x1536 85Hz                  |

### VGA

2048x1536 85Hz

## DisplayPort

DisplayPort is a serial link which uses 1x, 2x or 4x lanes.

| DP Version | Max Speed per lane                                         |
| ---------- | ---------------------------------------------------------- |
| 1.1        | HBR = 2.16 Gbit/s                                          |
| 1.2        | HBR = 2.16 Gbit/s\\ HBR2 = 4.32 Gbit/s                     |
| 1.3 / 1.4  | HBR = 2.16 Gbit/s\\ HBR2 = 4.32 Gbit/s\\ HBR3 = 8.1 Gbit/s |

Dual Mode Displayport (DP++) allow to convert Displayport video signal to HDMI/DVI by using a passive adapter. It requires an active converter on host side. DP++ only supports DVI D-Single Link

### Bandwidth vs Resolution

| Resolution × color depth @ frame rate | CVT  | CVT-R | CVT-R2 | CEA-861-F |
| ------------------------------------- | ---- | ----- | ------ | --------- |
| 1280 × 720 × 24 bpp @ 60 Hz           | 1.79 | 1.54  | 1.45   | 1.78      |
| 1920 × 1080 × 24 bpp @ 60 Hz          | 4.15 | 3.33  | 3.20   | 3.56      |
| 1920 × 1200 × 30 bpp @ 60 Hz          | 5.81 | 4.62  | 4.45   | -         |
| 2560 × 1440 × 24 bpp @ 60 Hz          |      | 5.80  | 5.63   | -         |
| 2560 × 1600 × 30 bpp @ 60 Hz          |      | 8.06  | 7.82   | -         |
| 3840 × 2160 × 24 bpp @ 30 Hz          |      |       | 6.18   | 7.13      |
| 3840 × 2160 × 24 bpp @ 60 Hz          |      |       | 12.54  | 14.26     |
| 4096 × 2304 × 30 bpp @ 60 Hz          |      |       | 17.81  | -         |
| 5120 × 2880 × 24 bpp @ 60 Hz          |      |       | 22.18  | -         |
| 7680 × 4320 × 24 bpp @ 30 Hz          |      |       | 24.82  | 28.51     |
| 7680 × 4320 × 24 bpp @ 60 Hz          |      |       | 49.65  | 57.02     |

### Display Port alternative connectors

#### USB Type C alternate mode

USB Type C allow to use Type C as Displayport 1.3 connector.  
Type C connector has 4 high speed lanes available which can be shared between video and USB3.1 data.

| DP Version | 4 Lanes DP (bandwidth & Max resolution)  | 2 Lanes DP (2 Lanes USB 3.1) (bandwidth & Max resolution) |
| ---------- | ---------------------------------------- | --------------------------------------------------------- |
| 1.1        | 8.64 - 2560x1600 60Hz                    | 4.32 - 1920x1280 60Hz                                     |
| 1.2a       | 17.28 - 3840x2160 60Hz                   | 8.64 - 2560x1600 60Hz or 3840x2160 30Hz                   |
| 1.3        | 32.4 - 5120x2880 60Hz or 7680x4320 30Hz  | 16.2 - 3840×2160 60Hz                                     |
| 1.4        | 32.4 - 3840x2160 120Hz or 7680×4320 60Hz | 16.2 - ?                                                  |

#### USB Type C Thunderbolt 3

Thunderbolt 3 supports 2x Displayport 1.2 video signal (2x [4x Lanes HBR2] => 4 x 4.32 Gbit/s ) = 17.28 GBit/s).  
This allow to use two 4K screens (3840x2160@60Hz) or 5K screen (5120 × 2880 @ 60 Hz) or 8k screen 30Hz (7680 × 4320 @30Hz)

## HDMI

HDMI is compatible with DVI with passive adapter
