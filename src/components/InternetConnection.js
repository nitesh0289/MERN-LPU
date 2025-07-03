import React, { useEffect, useState } from "react";

function InternetConnection() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const handleOnline = () => {
    setIsOnline(true);
  };

  const handleOffline = () => {
    setIsOnline(false);
  };

  useEffect(() => {
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <main>
      <h1>Internet Connection</h1>

      <h3>{isOnline ? "User has good internet connection" : "No Internet Connection"}</h3>
    </main>
  );
}

export default InternetConnection;
