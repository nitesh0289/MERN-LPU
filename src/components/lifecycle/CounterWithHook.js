import React, { useEffect, useState } from "react";

function CounterWithHook() {
  const [update, setUpdate] = useState(false);
  const [update2, setUpdate2] = useState(false);

  console.log("Counter With Hook Rendered!");

  useEffect(() => {
    console.log("Compononent Mounted");
  }, [update]);

  return (
    <main>
      <h1>Counter</h1>
      <p>Hello Lpu</p>
      <button onClick={() => setUpdate((prev) => !prev)}>Render Component</button>
      <button onClick={() => setUpdate2((prev) => !prev)}>Not Render Component</button>
    </main>
  );
}

export default CounterWithHook;
