import React from "react";

export default function ConditionalRendering() {
  const condition = true;
  return (
    <div>
      {/* ternary operator */}
      <h2>conditional rendering</h2>
      {condition ? (
        <p>if the condition true it execute</p>
      ) : (
        <p> or else this block is execute</p>
      )}

      {/* /logical operator */}
      {condition && <h2> logical operator is running</h2>}
    </div>
  );
}
