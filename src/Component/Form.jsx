import React, { useState } from "react";
import "./Form.css";

export default function Form() {
  const [name, setName] = useState("hi everyone");
  const [isChecked, setIschecked] = useState(false);
  return (
    <div className="form">
      <h2>Controlled inputs</h2>
      <nav>
        <label>name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </nav>
      <label>chexk box</label>
      <input
        type="checkbox"
        checked={isChecked}
        // onChange={() => setIschecked(!isChecked)}
        onChange={(e) => setIschecked(e.target.checked)}
      />
    </div>
  );
}
