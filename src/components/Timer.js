import React, { useState } from "react";

function Timer() {
  const [time, setTime] = useState(0);
  //   let interval = null;
  const [interval, setInter] = useState(null);

  function startTimer() {
    // setInterval(() => {
    //     setTime(time+1)
    // }, 1000)
    if (interval === null) {
      const i = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
      // interval = i;
      setInter(i);
    } else console.log("Timer already started!");
  }
  function stopTimer() {
    clearInterval(interval);
    // interval = null;
    setInter(null);
  }
  function resetTimer() {
    setTime(0);
  }

  return (
    <main style={{ textAlign: "center" }}>
      <h1>Timer: {time}</h1>
      <div>
        <button onClick={startTimer}>Start</button>
        &nbsp; &nbsp;
        <button onClick={stopTimer}>Stop </button>
        &nbsp; &nbsp;
        <button onClick={resetTimer}>Reset </button>
      </div>
    </main>
  );
}

export default Timer;
