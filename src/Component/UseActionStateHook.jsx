import React, { useActionState } from "react";

export default function UseActionStateHook() {
  async function saverUser(prevValue, formData) {
    console.log(prevValue);

    try {
      const name = formData.get("name");

      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (!name) throw new Error("name is required");
      return { success: true, message: `saved ${name}` };
    } catch (err) {
      return { success: false, message: "error" };
    }
  }

  const [state, formAction, isPending] = useActionState(saverUser, {
    success: false,
    message: "",
  });
  return (
    <div>
      <form action={formAction}>
        <input type="text" name="name" placeholder="Enter your name" />
        <button>{isPending ? "saveing" : "save"}</button>
        {state.message && <p> {state.message}</p>}
      </form>
    </div>
  );
}
