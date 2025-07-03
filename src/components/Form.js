import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  console.log("Form Component Rendered!");
  const handleChange = (e) => {
    const lastChar = e.target.value.charAt(e.target.value.length - 1);
    if (Number(lastChar) >= 0 && Number(lastChar) <= 9) {
      alert("Number is an invalid input!");
      return;
    }
    // console.log(e.target.value);
    setName(e.target.value);
  };
  return (
    <main>
      <h1>Student Form</h1>
      <label htmlFor="Name">Name:</label>
      <input value={name} placeholder="Name" type="text" onChange={handleChange} />
    </main>
  );
}

export default Form;
