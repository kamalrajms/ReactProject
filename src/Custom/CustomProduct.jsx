import React from "react";
import useFeatch from "./UseFetch";

export default function CustomProduct() {
  const {
    data: users,
    error,
    isLoading,
  } = useFeatch("https://jsonplaceholder.typicode.com/users");
  return (
    <div>
      <h4>Customer data</h4>
      {users.map((user) => (
        <div
          key={user.id}
          style={{ border: "1px  solid black", padding: "20px" }}
        >
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}
