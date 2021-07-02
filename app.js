function Timer() {
  let startTime;
  let endTime;
  let isRunning = false;
  let duration = 0;

  this.start = function () {
    if (isRunning) {
      throw new Error("Timer has already started");
    }

    startTime = new Date();
    isRunning = true;
  };

  this.stop = function () {
    if (!isRunning) {
      throw new Error("Timer is not started");
    }

    isRunning = false;
    endTime = new Date();

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  };

  this.reset = function () {
    startTime = null;
    endTime = null;
    isRunning = false;
    duration = 0;
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}

const timer = new Timer();
