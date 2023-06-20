const dateTimePicker = document.querySelector(`#datetime-picker`);
const buttonStart = document.querySelector(`button[data-start]`);
const daysValue = document.querySelector(`[data-days]`);
const hoursValue = document.querySelector(`[data-hours]`);
const minutesValue = document.querySelector(`[data-minutes]`);
const secondsValue = document.querySelector(`[data-seconds]`);

class Timer {
    constructor({onTick}) {
        this.intervalId = null;
        this.isActive = false;
        this.onTick = onTick;
        this.init();
    }

    init() {
        const time = this.convertMs(0);
        this.onTick(time);
    }

     start() {
        if (this.isActive) {
            return;
        }
        this.isActive = true;
        const startTime = Date.now();
        this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = currentTime - startTime;
            const time = this.convertMs(deltaTime);
            this.onTick(time);
            // upDateClock(time);
            // console.log(`${days}:${hours}:${minutes}:${seconds}`);
        }, 1000);
    };

    stop() { 
        clearInterval(this.intervalId);
        this.isActive = false;
        const time = this.convertMs(0);
        this.onTick(time);
    };

    convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = this.addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = this.addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = this.addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = this.addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
    };

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
addLeadingZero(value) { 
    return String(value).padStart(2, `0`);
};
}

function upDateClock({ days, hours, minutes, seconds }) {
    daysValue.textContent = `${days}:`;
    hoursValue.textContent = `${hours}:`;
    minutesValue.textContent = `${minutes}:`;
    secondsValue.textContent = `${seconds}`;
}

const timer = new Timer({
    onTick: upDateClock,
});

buttonStart.addEventListener(`click`, timer.start.bind(timer));

dateTimePicker.addEventListener(`click`, timer.stop.bind(timer));







