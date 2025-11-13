import React, { useState } from "react";

export default function UserForm() {
  const [formData, setFormData] = useState({
    name: "hari",
    email: "",
    age: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]:value,
    });
  };

  return (
    <div>
      <h2>Mutiple inputs example</h2>
      <input
        type="text"
        name="name"
        value={formData.name}
        placeholder="name"
        onChange={handleInput}
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        placeholder="Email"
        onChange={handleInput}
      />
      <input
        type="number"
        name="age"
        value={formData.age}
        placeholder="Age"
        onChange={handleInput}
      />
    </div>
  );
}
