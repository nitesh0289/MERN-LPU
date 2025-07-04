import React, { useContext } from "react";

import { counterContext } from "./Parent";

function Counter() {
  const { state, dispatch } = useContext(counterContext);
  return (
    <main>
      <h1>Counter: {state}</h1>
      <button onClick={() => dispatch("increament")}>Increament by 1</button>
      <button onClick={() => dispatch("decreament")}>Decreament by 1</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </main>
  );
}

export default Counter;
