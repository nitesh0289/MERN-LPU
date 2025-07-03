import React, { useState } from "react";
import Counter from "./Counter";
import Timer from "./Timer";
import Greet from "./Greet";

function Conditional(props) {
  const { handleParent } = props;
  const [isCounter, setIsCounter] = useState(false);
  //   if (isCounter) {
  //     return <Counter />;
  //   } else {
  //     return <Timer />;
  //   }

  const handleChange = () => {
    setIsCounter(true);
    handleParent(true);
  };

  return (
    <main>
      {/* {isCounter && <h1>Hello Lpu</h1>} */}
      {/* {isCounter ? <h1>Hello Lpu</h1> : <></>} */}
      {(() => {
        if (isCounter) return <Counter />;
        else return <Timer />;
      })()}

      <button onClick={handleChange}>Click here</button>
    </main>
  );
}

export default Conditional;
