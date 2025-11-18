import React, { useContext } from "react";
import { Pass } from "../App";

export default function Third() {
  const passname = useContext(Pass);
  return <div className="border">Third component--{passname}</div>;
}
