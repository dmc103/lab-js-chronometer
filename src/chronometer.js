class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval (() => {
      this.currentTime += 1;
      if (printTimeCallback) {
        printTimeCallback ()
      }
    }, 1000);
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor (this.currentTime / 60);
  }

  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    return value.toString().padStart(2, '0');
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  split() {
    // ... your code goes here
    const minutes = this.getMinutes();
    const seconds = this.getSeconds();

    const formatMinutes = this.computeTwoDigitNumber(minutes);
    const formatSeconds = this.computeTwoDigitNumber(seconds);

    return `${formatMinutes}:${formatSeconds}`;
  }
}
