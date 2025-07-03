import React, { useMemo, useState } from "react";

function MemoComp() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  console.log("MemoComp rendered!");

  const handleResult = useMemo(() => {
    console.log("Function called..");
    let a = count;
    for (var i = 0; i < 2000000000; i++) {
      a++;
    }
    return a;
  }, [count]);

  return (
    <main>
      <h1>{handleResult}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Update Count</button>
      <button onClick={() => setCount2((prev) => prev + 2)}>Update Count2 {count2}</button>
    </main>
  );
}

export default React.memo(MemoComp);
