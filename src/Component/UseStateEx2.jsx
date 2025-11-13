import React, { useState } from "react";

export default function UseStateEx2() {
  const [show, setShow] = useState(true);
  return (
    <div>
      {show ? <h2>Welcome back..!</h2> : <h2>Please login</h2>}

      <button onClick={() => setShow(!show)}>sign {show ? "out" : "in"}</button>
      {show && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          dignissimos culpa cupiditate vitae optio, temporibus quos ipsum aut
          provident libero? Repudiandae, officiis aperiam di stinctio mollitia
          magni aspernatur minima! Quibusdam, nisi.
        </p>
      )}
    </div>
  );
}
