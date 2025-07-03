import React, { useContext } from "react";
import { collegeContext, nameContext } from "./ContextComp";

function ComponentE() {
  const name = useContext(nameContext);
  const college = useContext(collegeContext);
  return (
    <main>
      <h1>
        Hello {name} from {college}
      </h1>
    </main>
  );
}

export default ComponentE;
