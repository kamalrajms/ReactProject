import React, { useState } from "react";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    username: "",
    eamil: "",
    password: "",
    terms: false,
  });
  const [error, setError] = useState("");

  //   const handleInput2 = (e) => {
  //     const { name, type, value, checked } = e.target;
  //     setFormData({
  //       ...formData,
  //       [name]: checked,
  //     });
  //   };

  const handleInput = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div>
      <h2>Register form</h2>
      {error && <p>{error}</p>}
      <input
        type="text"
        placeholder="name"
        name="username"
        value={formData.username}
        onChange={handleInput}
      />
      <input
        type="email"
        name="eamil"
        placeholder="emaikl"
        value={formData.eamil}
        onChange={handleInput}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleInput}
      />
      <input
        type="checkbox"
        name="terms"
        checked={formData.terms}
        onChange={handleInput}
      />
    </div>
  );
}
