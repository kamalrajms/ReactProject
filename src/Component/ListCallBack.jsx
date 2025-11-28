import React, { useState, useEffect } from "react";

export default function ListCallBack({ getItems }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems());
    console.log("update items");
  }, [getItems]);

  return (
    <div>
      {items.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
}
