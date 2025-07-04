import React from "react";
import useCounter from "./Counter";

function Parent() {
  const { count, increamentCounter, decreamentCounter, resetCounter } = useCounter(0);
  return (
    <main>
      <h1>Parent Components</h1>
      <h2> {count}</h2>
      <button onClick={increamentCounter}>Increase By 1</button>
      <button onClick={decreamentCounter}>Decrease By 1</button>
      <button onClick={resetCounter}>Reset</button>
    </main>
  );
}

export default Parent;
