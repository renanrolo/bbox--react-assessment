import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const PrivateRoutes: React.FC = () => {
  return <div>Olá</div>;
};

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={PrivateRoutes} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
