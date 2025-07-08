import React, { useReducer } from "react";
import ComponentA from "./ComponentA";

const initialValue = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increament":
      return state + 1;
    case "decreament":
      return state - 1;
    case "reset":
      return 0;
    default:
      return state;
  }
};

export const counterContext = React.createContext(initialValue);

function Parent() {
  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <main>
      <h1>Parent</h1>
      <counterContext.Provider value={{ state, dispatch }}>
        <ComponentA />
      </counterContext.Provider>
    </main>
  );
}

export default Parent;
