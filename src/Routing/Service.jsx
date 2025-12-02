import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Service() {
  return (
    <div>
      Service component
      <div>
        <Link to={""}>WebDevelopment</Link>
        <Link to={"AppDevelopment"}>AppDevelopment</Link>
        <Outlet />
      </div>
    </div>
  );
}
