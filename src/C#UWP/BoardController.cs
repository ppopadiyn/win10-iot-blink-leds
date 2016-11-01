using System;
using Windows.Devices.Gpio;
using Windows.System.Threading;

namespace BlinkLeds
{
    public sealed class BoardController
    {
        private PinController redPin_;
        private PinController yellowPin_;
        private int counter_;

        public void Start()
        {
            redPin_ = new PinController(6, "Red");
            yellowPin_ = new PinController(5, "Yellow");
            ThreadPoolTimer.CreatePeriodicTimer(Timer_Tick, TimeSpan.FromMilliseconds(500));
        }

        private void Timer_Tick(ThreadPoolTimer timer)
        {
            if (counter_++ % 2 == 0)
            {
                redPin_.Value = redPin_.Value == GpioPinValue.High ? GpioPinValue.Low : GpioPinValue.High;
            }
            else
            {
                yellowPin_.Value = yellowPin_.Value == GpioPinValue.High ? GpioPinValue.Low : GpioPinValue.High;
            }
        }
    }
}