import React, { useEffect, useState } from "react";

function Stopwatch() {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  const handleFormat = (timer) => {
    const hours = parseInt(timer / 3600);
    const mins = parseInt((timer - hours * 3600) / 60);
    const secs = timer % 60;

    return `${hours <= 9 ? `0${hours}` : hours}:${mins <= 9 ? `0${mins}` : mins}:${
      secs <= 9 ? `0${secs}` : secs
    }`;
  };

  return (
    <main>
      <h1>Stopwatch</h1>
      <h3>{handleFormat(timer)}</h3>
    </main>
  );
}

export default Stopwatch;
