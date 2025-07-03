import React from "react";

function Title(props) {
  const { text } = props;
  console.log(`Title Component Rendered! ${text}`);
  return <h1>{text}</h1>;
}

export default React.memo(Title);
