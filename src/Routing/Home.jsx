import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import XOgame from "../Game/XOgame";
import CustomProduct from "../Custom/CustomProduct";

export default function Home() {
  const [count, setCount] = useState(0);
  const Page = useNavigate();

  useEffect(() => {
    if (count > 5) {
      Page("/Service");
    }
  }, [count]);
  return (
    <div>
      Home component
      <h2>Count :{count}</h2>
      <button onClick={() => setCount(count + 1)}>Move to Service</button>
      <XOgame />
      <CustomProduct />
    </div>
  );
}
