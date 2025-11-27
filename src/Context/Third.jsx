import React, { useContext } from "react";
import { Pass } from "../App";

export default function Third() {
  // const passname = useContext(Pass);
  const { mode, setMode, data } = useContext(Pass);
  return (
    <div className={mode}>
      Third component--{mode} ,{data.name}
      <button onClick={() => setMode(mode === "light" ? "dark" : "light")}>
        switch
      </button>
    </div>
  );
}
