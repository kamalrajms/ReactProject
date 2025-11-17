import React, { useState, useEffect } from "react";

export default function UseEffectTimer() {
  const [sec, setSec] = useState(0);
  const [isRunning, SetIsRunning] = useState(false);

  useEffect(() => {
    let interValId;
    if (isRunning) {
      interValId = setInterval(() => {
        setSec((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interValId);
  }, [isRunning]);

  const handleStart = () => {
    SetIsRunning(true);
  };
  const handleStop = () => {
    SetIsRunning(false);
  };
  const handleReset = () => {
    setSec(0);
    SetIsRunning(false);
  };
  return (
    <div>
      <h1>Timer :{sec}</h1>
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>stop</button>
        <button onClick={handleReset}>reset</button>
      </div>
    </div>
  );
}
