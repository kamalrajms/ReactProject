import React from "react";
import Style from "./List.module.css";

export default function ListRendering() {
  const fruits = ["apple", "banana", "mango", "cherry", "orange"];

  const users = [
    { id: 1, name: "hari" },
    { id: 2, name: "hari kumar" },
    { id: 3, name: "hari haran" },
  ];
  return (
    <div>
      <h3>List rendering</h3>
      <ul className={Style.list}>
        {fruits.map((name, ind) => (
          <li key={ind}>{name}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.id}.{user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
