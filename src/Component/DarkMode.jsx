import React, { useState } from "react";

export default function DarkMode() {
  const [dark, setDark] = useState(false);

  return (
    <div
      style={{
        backgroundColor: dark ? "#333" : "#fff",
        color: dark ? "#fff" : "#333",
        padding: "30px",
      }}
    >
      <button onClick={() => setDark(!dark)}>
        Switch to {dark ? "light" : "dark"} mode
      </button>
      <p>You are in {dark ? "dark" : "light"} light mode</p>
    </div>
  );
}
