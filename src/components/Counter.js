import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }

  function decreaseCount() {
    setCount(count - 1);
  }

  return (
    <main>
      <h1> Likes: {count}</h1>
      <button onClick={increaseCount}>Like</button>
      <button onClick={decreaseCount}>Deslike</button>
    </main>
  );
}

export default Counter;
