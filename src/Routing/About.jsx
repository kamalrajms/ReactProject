import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UseActionStateHook from "../Component/UseActionStateHook";

export default function About() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  return (
    <div>
      About Component
      <ul>
        {user.map((user) => (
          <li key={user.id}>
            <Link to={`/Blog/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
      <UseActionStateHook />
    </div>
  );
}
