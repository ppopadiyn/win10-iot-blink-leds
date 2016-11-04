import _wingpio as gpio
import time
from pin import PinController

class BoardController(object):

    def __init__(self):
        self._yellowPin = PinController(5, 'yellow')
        self._redPin = PinController(6, 'red')
        self._counter = 0

    def start(self):
        while True:
            self._counter = self._counter + 1
            if(self._counter % 2 == 0):
                if(self._redPin.value == gpio.HIGH):
                    self._redPin.value = gpio.LOW
                else:
                    self._redPin.value = gpio.HIGH
            else:
                if self._yellowPin.value == gpio.HIGH:
                    self._yellowPin.value = gpio.LOW
                else:
                    self._yellowPin.value = gpio.HIGH

            time.sleep(0.5)