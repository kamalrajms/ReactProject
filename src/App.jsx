import React from "react";
import Greeting from "./Greeting";
import ConditionalRendering from "./Component/ConditionalRendering";
import ListRendering from "./Component/ListRendering";
import UseStateHook from "./Component/UseStateHook";

export default function App() {
  const name = "Praveen kumar uigfuwgu";
  return (
    <div>
      <h3>Hello everyone...!</h3>
      <p>Hi..{name}</p>

      <Greeting firstName={name} />
      <ConditionalRendering />
      <ListRendering />
      <UseStateHook/>
    </div>
  );
}
