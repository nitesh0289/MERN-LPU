import React, { useReducer } from "react";

const initialValue = {
  counterOne: 0,
  counterTwo: 0
};

const reducer = (state, action) => {
  // action: {type}
  //state : {counterOne, counterTwo}
  switch (action.type) {
    case "increament_counter_1":
      return { ...state, counterOne: state.counterOne + 1 };
    case "decreament_counter_1":
      return { ...state, counterOne: state.counterOne - 1 };
    case "increament_counter_2":
      return { ...state, counterTwo: state.counterTwo + 1 };
    case "decreament_counter_2":
      return { ...state, counterTwo: state.counterTwo - 1 };
    case "reset":
      return initialValue;
    default:
      return state;
  }
};

function RedMultiCounter() {
  const [count, dispatch] = useReducer(reducer, initialValue);
  return (
    <main>
      <h1>{count.counterOne}</h1>
      <button onClick={() => dispatch({ type: "increament_counter_1" })}>Increament by 1</button>
      <button onClick={() => dispatch({ type: "decreament_counter_1" })}>Decreament by 1</button>
      <h1>{count.counterTwo}</h1>
      <button onClick={() => dispatch({ type: "increament_counter_2" })}>Increament by 1</button>
      <button onClick={() => dispatch({ type: "decreament_counter_2" })}>Decreament by 1</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </main>
  );
}

export default RedMultiCounter;
