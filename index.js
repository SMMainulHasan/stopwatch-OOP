console.log("Stopwatch-OOP");

//Object-orented Programming
function Stopwatch() {
  let startTime,
    endTime,
    running = false,
    duration = 0;

  this.start = () => {
    if (running) throw new Error("Stop watch is alrady running");
    startTime = new Date();
    running = true;
  };
  this.stop = () => {
    if (!running) throw new Error("Stop watch is alrady stoped");
    endTime = new Date();
    running = false;
    const timeDiff = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += timeDiff;
  };
  this.reset = () => {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };
  Object.defineProperty(this, "duration", {
    get: () => duration,
  });
}
