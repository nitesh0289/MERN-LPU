import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "../store/slices/CounterSlice";

function ReduxCounter() {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <main>
      <h1> Counter: {value}</h1>
      <button onClick={() => dispatch(increment())}>Increament</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </main>
  );
}

export default ReduxCounter;
