import React, { useState } from "react";
import ComponentD from "./ComponentD";

export const collegeContext = React.createContext("");
export const nameContext = React.createContext("");

function ContextComp() {
  const [name, setName] = useState("Puneet");

  return (
    <>
      <nameContext.Provider value={name}>
        <collegeContext.Provider value={"LPU"}>
          <ComponentD />
        </collegeContext.Provider>
      </nameContext.Provider>
    </>
  );
}

export default ContextComp;
