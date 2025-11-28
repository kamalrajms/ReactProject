import React, { useId } from "react";

export default function UseIdHook() {
  const id = useId();
  const email = useId();
  console.log(id, email);

  return (
    <div>
      <label htmlFor={`${id}-name`}>Name</label>
      <input type="text" id={`${id}-name`} />
      <label htmlFor={`${id}-email`}>email</label>
      <input type="text" id={`${id}-email`} />
    </div>
  );
}
