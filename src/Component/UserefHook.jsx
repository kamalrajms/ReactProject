import React, { useRef, useState, useEffect } from "react";

export default function UserefHook() {
  //eg1
  const inputRef = useRef();
  const focusInput = () => {
    inputRef.current.focus();
  };
  //eg2
  const [sec, setSec] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSec((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div>
      {/* eg1 */}
      <nav>
        <input type="text" placeholder="Enter name" ref={inputRef} />
        <button onClick={focusInput}>Focus input</button>
      </nav>
      {/* eg2 */}
      <nav>
        <p>Timer : {sec}</p>
        <button onClick={() => clearInterval(intervalRef.current)}>stop</button>
      </nav>
    </div>
  );
}
