import React, { useState, useContext, createContext } from "react";
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
import First from "./Context/First";
import UseReducerHook from "./Component/UseReducerHook";
import UsereducerHookForm from "./Component/UsereducerHookForm";

export const Pass = createContext();

// export const Theme = createContext();

export default function App() {
  const name = "Praveen kumar ";
  const [user, setUser] = useState(true);

  //usecontext eg 2

  const [mode, setMode] = useState("light");
  const data = { name: "praveen" };
  return (
    <div>
      <UsereducerHookForm/>
      <UseReducerHook />
      <nav className="border">
        App component
        <Pass.Provider value={{ mode, setMode, data }}>
          <First />
        </Pass.Provider>
      </nav>

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
