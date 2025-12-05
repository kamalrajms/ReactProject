import React from "react";

export default function Button({value,onSquareClick}) {
  return (
    <button style={{ padding: "16px" }} onClick={onSquareClick}>
      {value}
    </button>
  );
}
