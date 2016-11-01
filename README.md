# Blinking two leds from a headless app on Raspberry PI 2 with Windows 10 IoT Core

Basic application, which runs as a background service on Raspberry PI 2 and blinks two leds at 500 ms interval.
Demos on:
- C# and UWP
- Python
- Node.js

## Raspberry Setup
- Pin 1 cathode to GPIO 5
- Pin 2 cathode to GPIO 6
- Pin 1 and 2 anode to a 330 ohm resistor
- The other end of the resistor to a 3.3V pin
