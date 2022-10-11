import React from "react";
import { Outlet } from "react-router-dom";
import Nab from "../components/Nab/Nab";

const Main = () => {
  return (
    <div>
      <Nab></Nab>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
