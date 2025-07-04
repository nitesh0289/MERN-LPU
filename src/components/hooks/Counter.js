import React, { useState } from "react";

function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);

  const increamentCounter = () => setCount((prev) => prev + 1);
  const decreamentCounter = () => setCount((prev) => prev - 1);
  const resetCounter = () => setCount(initialValue);

  return { increamentCounter, decreamentCounter, resetCounter, count };
}

export default useCounter;
