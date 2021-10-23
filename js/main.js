refs = {
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  minutes: document.querySelector('[data-value="mins"]'),
  seconds: document.querySelector('[data-value="secs"]'),
};


class countdownTimer {
  constructor({ selector, targetDate, onTick }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.onTick = onTick;
  }

  intervalId = setInterval(() => {
    let currentTime = Date.now();
    let differentTime = Math.floor((this.targetDate - currentTime) / 1000);
    let time = this.timeComponents(differentTime);

    this.onTick(time);
  }, 1000);

  timeComponents(value) {
    this.timeSec = value % 60;
    this.timeMin = Math.floor((value % (60 * 60)) / 60);
    this.timeHour = Math.floor((value % (60 * 60 * 24)) / (60 * 60));
    this.countDay = Math.floor(value / (60 * 60 * 24));
  }
}

const timer = new countdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 31, 2021'),
  onTick: renderingTime,
});

function renderingTime() {
  refs.seconds.textContent = this.timeSec < 10 ? `0${this.timeSec}` : this.timeSec;

  refs.minutes.textContent = this.timeMin < 10 ? `0${this.timeMin}` : this.timeMin;
 
  refs.hours.textContent = this.timeHour < 10 ? `0${this.timeHour}` : this.timeHour;
  
  refs.days.textContent = this.countDay < 10 ? `0${this.countDay}` : this.countDay;
}
