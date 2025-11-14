import React, { useEffect, useState } from "react";

export default function UseEffect() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("component mounted");
  }, [count]);

  useEffect(() => {
    if (count < 5) {
      console.log(`count changed to : ${count}`);
    } else {
      console.log("it updates more time...");
    }
  }, [count]);
  return (
    <div>
      <h2>Hello useeffect</h2>
      <h2>count:{count}</h2>
      <button onClick={() => setCount(count + 1)}>increment</button>
    </div>
  );
}
