import React, { useState, useEffect } from "react";

export default function AIPintegration() {
  const [user, setUser] = useState([]);
  const [Loading, SetLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        SetLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typode.com/users"
        );
        if (!response.ok) {
          throw new Error("Failed to featch users");
        }
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        SetLoading(false);
      }
    }
    fetchUser();
  }, []);
  if (Loading) return <p>loading....</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  return (
    <div>
      <h2>user data</h2>
      {user.map((user) => (
        <div
          style={{
            border: "1px solid black",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "8px",
          }}
        >
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}
