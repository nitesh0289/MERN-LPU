import React from "react";

import { nameContext, collegeContext } from "./ContextComp";

function ComponentG() {
  return (
    <main>
      <nameContext.Consumer>
        {(name) => {
          return (
            <collegeContext.Consumer>
              {(college) => {
                return (
                  <h1>
                    Hello {name} from {college}
                  </h1>
                );
              }}
            </collegeContext.Consumer>
          );
        }}
      </nameContext.Consumer>
    </main>
  );
}

export default ComponentG;
