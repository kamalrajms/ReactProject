import React, { useState, useCallback } from "react";
import ListCallBack from "./ListCallBack";

export default function Usecallback() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const theme = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333",
    padding: "30px",
  };
  //   const getItems = () => {
  //     return [number, number + 1, number + 2, number + 3];
  //   };

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2, number + 3];
  }, [number]);
  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        placeholder="enter number"
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark(!dark)}>Toggle theme</button>
      <ListCallBack getItems={getItems} />
    </div>
  );
}
