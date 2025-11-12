import React from "react";

export default function Greeting({firstName}) {
  return (
    <div>
      {/* <h2>good morning {props.firstName}</h2> */}
      <h2>good morning {firstName}</h2>

    </div>
  );
}
