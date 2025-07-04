import React, { useReducer } from "react";

const initialValue = 0;
const initialValue2 = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case "increament":
      return state + action.payload;
    case "decreament":
      return state - action.payload;
    case "reset":
      return 0;
    default:
      return state;
  }
};

function MultiRedCounter() {
  const [count, dispatch] = useReducer(reducer, initialValue);
  const [count2, dispatch2] = useReducer(reducer, initialValue2);
  return (
    <main>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: "increament", payload: 1 })}>Increament by 1</button>
      <button onClick={() => dispatch({ type: "decreament", payload: 1 })}>Decreament by 1</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
      <h1>{count2}</h1>
      <button onClick={() => dispatch2({ type: "increament", payload: 5 })}>Increament by 1</button>
      <button onClick={() => dispatch2({ type: "decreament", payload: 5 })}>Decreament by 1</button>
      <button onClick={() => dispatch2("reset")}>Reset</button>
    </main>
  );
}

export default MultiRedCounter;
