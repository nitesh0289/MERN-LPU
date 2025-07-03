import React from "react";

function Button(props) {
  const { btnText, handleClick } = props;
  console.log(`Button Component Rendered! - ${btnText}`);
  return <button onClick={handleClick}>{btnText}</button>;
}

export default React.memo(Button);
