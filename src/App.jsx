import React, { useState } from "react";
import Greeting from "./Greeting";
import ConditionalRendering from "./Component/ConditionalRendering";
import ListRendering from "./Component/ListRendering";
import UseStateHook from "./Component/UseStateHook";
import UseStateEx2 from "./Component/UseStateEx2";
import DarkMode from "./Component/DarkMode";
import Form from "./Component/Form";
import UserForm from "./Component/UserForm";
import RegisterForm from "./Component/RegisterForm";
import UseEffect from "./Component/UseEffect";
import UseEffectTimer from "./Component/UseEffectTimer";
import UseEffectAIP from "./Component/UseEffectAIP";
import UserefHook from "./Component/UserefHook";

export default function App() {
  const name = "Praveen kumar uigfuwgu";
  const [user, setUser] = useState(true);
  return (
    <div>
      <UserefHook />
      <UseEffectAIP />
      <UseEffectTimer />
      <UseEffect />
      <RegisterForm />
      <UserForm />
      <Form />
      <DarkMode />
      <h3 className="Hello">Hello everyone...!</h3>
      <p>Hi..{name}</p>
      <UseStateEx2 />
      <Greeting firstName={name} />
      {user ? <ConditionalRendering /> : <ListRendering />}
      <button onClick={() => setUser(!user)}>user</button>

      <UseStateHook />
    </div>
  );
}
