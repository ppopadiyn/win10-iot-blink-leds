var uwp = require('uwp');
uwp.projectNamespace("Windows");

class PinController {

    constructor(gpioNumber, name) {
        this.name_ = name;
        this.gpioNumber_ = gpioNumber;
        this.pin_ = Windows.Devices.Gpio.GpioController.getDefault().openPin(gpioNumber);
        this.value = Windows.Devices.Gpio.GpioPinValue.high;
        this.pin_.setDriveMode(Windows.Devices.Gpio.GpioPinDriveMode.output);
    }

    get name() { return this.name_; }

    get gpioNumber() { return this.gpioNumber_; }

    get value() { return this.pin_.read(); }

    set value(value) { this.pin_.write(value); }
}

class BoardController {

    constructor() {
        this.redPin_ = new PinController(6, "Red");
        this.yellowPin_ = new PinController(5, "Yellow");
        this.counter_ = 0;
    }

    start() {
        setInterval(() => {
            if (this.counter_++ % 2 === 0) {
                this.redPin_.value = this.redPin_.value === Windows.Devices.Gpio.GpioPinValue.high
                    ? Windows.Devices.Gpio.GpioPinValue.low
                    : Windows.Devices.Gpio.GpioPinValue.high;
            } else {
                this.yellowPin_.value = this.yellowPin_.value === Windows.Devices.Gpio.GpioPinValue.high
                    ? Windows.Devices.Gpio.GpioPinValue.low
                    : Windows.Devices.Gpio.GpioPinValue.high;
            }
        }, 1000);
    }
}

var board = new BoardController();
board.start();