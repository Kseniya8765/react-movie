import React from "react";
import { Route, Switch } from "react-router-dom";
import { NotFound } from "../common/Notfound/NotFound";
import { Main } from "../common/Main/Main";
import { MovieDetail } from "../common/Main/Movies/MovieDetail";

export const RoutesWrapper = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/movie/:id" component={MovieDetail} />
    <Route component={NotFound} />
  </Switch>
);
