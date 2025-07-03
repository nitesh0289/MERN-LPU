import React, { useEffect, useState } from "react";

function Cheating() {
  const [status, setStatus] = useState(false);

  const handleResize = () => {
    setStatus(true);
  };

  const handleNormal = () => {
    setStatus(false);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleNormal);
    };
  }, []);

  return (
    <main>
      <h1>{!status ? "No Cheating Detected" : "Cheating Detected"}</h1>
    </main>
  );
}

export default Cheating;
