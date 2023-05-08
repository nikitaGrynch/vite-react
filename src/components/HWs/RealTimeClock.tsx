import React, { useEffect } from "react";
import { useState } from "react";

function RealTimeClock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
  }, []);
  return (
    <div>
      <h1 style={{ fontSize: "10em" }}>{time}</h1>
    </div>
  );
}

export default RealTimeClock;
