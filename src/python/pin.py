import _wingpio as gpio

class PinController(object):
    def __init__(self, pin, name):
        self._pin = pin
        self._name = name
        gpio.setup(self._pin, gpio.OUT, gpio.PUD_OFF, gpio.HIGH)

    @property
    def value(self):
        return gpio.input(self._pin)

    @value.setter
    def value(self, value):
        gpio.output(self._pin, value)





