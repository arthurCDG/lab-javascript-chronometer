class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    this.milliSecondCurrentTime = 0;
    this.milliSecondIntervalId = null;
    this.milliSecondsCounter = 0;
  }

  start(callback) {

    // Initialize a setInterval asyn func and assign it to the intervalid variable defined above
    this.intervalId = setInterval(() => {
      // Increment the currentTime variable by 1 at each iteration
      this.currentTime ++;
      // If the start method is provided a callback argument, execute it
      if (typeof callback === 'function') callback();
     }, 1000);

    // Initialize a second setInterval asyn func and assign it to the milliSecondIntervalId variable defined above
    this.milliSecondIntervalId = setInterval(() => {
      if (typeof callback === 'function') callback();
      this.milliSecondCurrentTime ++; 
      if (this.milliSecondCurrentTime === 100) this.milliSecondCurrentTime = 0;
    }, 10)

    // Another way of doing it is having one setInterval, with a delay of 10, and when the millisecondcounter reaches 1000; increment the second counter
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
    // Florian's trick ----> return this.currentTime / 60 | 0 ----> return the floored result of the division
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  getMilliSeconds() {
    return this.milliSecondCurrentTime;
  }

  computeTwoDigitNumber(value) {
    // If the number has only one digit (0 < number < 10), return its value as string appeneded with a 0, else return the unchanged value as a string
    return value < 10 ? `0${value}` : `${value}`;
    // Another way of doing it ---> return String(value).length === 2 ? String(value) : "0" + value;
  }

  stop() {
    // Stop the setInterval asyn function that increments our currentTime variable every second
    clearInterval(this.intervalId);
    clearInterval(this.milliSecondIntervalId);
  }

  reset() {
    // Set the currentTime variable's value to 0
    this.currentTime = 0;
    this.milliSecondCurrentTime = 0;
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}:${this.computeTwoDigitNumber(this.getMilliSeconds())}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
