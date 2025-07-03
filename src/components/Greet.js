import React from "react";

function Greet(props) {
  const { studentName, college, ...prop } = props;
  return (
    <h1>
      Hello {studentName}, {college}, {prop.branch}
    </h1>
  );
}

export function Greet1(props) {
  const { studentName, college, ...prop } = props;
  return (
    <h1>
      Hello {studentName}, {college}, {prop.branch}
    </h1>
  );
}

export default Greet;
