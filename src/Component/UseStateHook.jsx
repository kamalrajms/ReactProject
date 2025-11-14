import React, { useState } from "react";

export default function UseStateHook() {
  const [count, setCount] = useState(0);

  const theme = {
    backgroundColor: "red",
    color: "blue",
  };
  return (
    <div>
      <h2 style={theme}>Count :{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
