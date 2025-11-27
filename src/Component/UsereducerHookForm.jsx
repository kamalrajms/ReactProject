import React, { useReducer } from "react";

export default function UsereducerHookForm() {
  const initialState = {
    name: "",
    email: "",
    password: "",
  };

  function formReducer(state, action) {
    return {
      ...state,
      [action.field]: action.value,
    };
  }
  const [state, dispatch] = useReducer(formReducer, initialState);

  function handleinput(e) {
    dispatch({
      field: e.target.name,
      value: e.target.value,
    });
  }

  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="entre name"
        onChange={handleinput}
        value={state.name}
      />
      <input
        type="email"
        name="email"
        placeholder="enter email"
        onChange={handleinput}
        value={state.email}
      />
      <input
        type="pasword"
        name="pasword"
        placeholder="enter passsword"
        onChange={handleinput}
        value={state.password}
      />
    </div>
  );
}
