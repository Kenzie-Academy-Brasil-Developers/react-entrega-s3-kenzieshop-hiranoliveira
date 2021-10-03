import { Route, Switch } from "react-router";

import Home from "../Pages/Home";
import Produtos from "../Pages/Produtos";
import Carrinho from "../Pages/Carrinho";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/products">
        <Produtos />
      </Route>

      <Route exact path="/carrinho">
        <Carrinho />
      </Route>
    </Switch>
  );
};

export default Routes;
