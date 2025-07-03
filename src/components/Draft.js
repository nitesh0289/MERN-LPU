import React, { useEffect, useState } from "react";

function Draft() {
  const [text, setText] = useState("");
  const [cleared, setCleared] = useState(false);

  //   useEffect(() => {
  //     const getDraftMessage = localStorage.getItem("draftMessage");
  //     if (text === "") setCleared(true);
  //     if (getDraftMessage !== "" && text === "" && !cleared) return;
  //     localStorage.setItem("draftMessage", text);
  //   }, [text]);

  useEffect(() => {
    const getDraftMessage = localStorage.getItem("draftMessage");
    if (getDraftMessage !== "" && text === "") setText(getDraftMessage);
  }, []);

  useEffect(() => {
    const id = setTimeout(() => {
      if (text !== "") {
        console.log("LOcalstorage change");
        localStorage.setItem("draftMessage", text);
      } else {
        setCleared(true);
      }
    }, 500);

    return () => {
      clearTimeout(id);
    };
  }, [text]);

  if (cleared) localStorage.setItem("draftMessage", "");

  return (
    <main>
      <h1>Save To Draft</h1>

      <input
        type="text"
        placeholder="Drafted  text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </main>
  );
}

export default Draft;
