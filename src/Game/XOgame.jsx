import React, { useState } from "react";
import Button from "./Button";

export default function XOgame() {
  const [Xnext, setXnext] = useState(true);
  const [square, setSquare] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (square[i]) {
      return;
    }
    const nextSquare = square.slice();
    if (Xnext) {
      nextSquare[i] = "x";
    } else {
      nextSquare[i] = "o";
    }
    setSquare(nextSquare);
    setXnext(!Xnext);
  }
  return (
    <div>
      <div>
        <Button value={square[0]} onSquareClick={() => handleClick(0)} />
        <Button value={square[1]} onSquareClick={() => handleClick(1)} />
        <Button value={square[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div>
        <Button value={square[3]} onSquareClick={() => handleClick(3)} />
        <Button value={square[4]} onSquareClick={() => handleClick(4)} />
        <Button value={square[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div>
        <Button value={square[6]} onSquareClick={() => handleClick(6)} />
        <Button value={square[7]} onSquareClick={() => handleClick(7)} />
        <Button value={square[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div>
  );
}
