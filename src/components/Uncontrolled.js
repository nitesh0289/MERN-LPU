import React, { useRef } from "react";

function Uncontrolled() {
  const nameRef = useRef("");
  const handleSubmit = () => {
    console.log("Typed...", nameRef.current.value);
  };
  console.log("Uncontrolled component rendered!");
  return (
    <main>
      <h1>Student Form</h1>
      <input ref={nameRef} placeholder="Name" />
      <button onClick={handleSubmit}>Submit</button>
    </main>
  );
}

export default Uncontrolled;
