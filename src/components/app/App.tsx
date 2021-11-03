import "./reset.scss";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { RoutesWrapper } from "../routesWrapper/RoutesWrapper";

export const App = () => {
  return (
    <BrowserRouter>
      <RoutesWrapper />
    </BrowserRouter>
  );
};
