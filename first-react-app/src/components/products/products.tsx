import React from "react";
import { Route, Switch } from "react-router-dom";

import ListProducts from "./list";
import DetailProduct from "./detail";

const Products = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/products/">
          <ListProducts />
        </Route>

        <Route exact path="/products/:id">
          <DetailProduct />
        </Route>
      </Switch>
    </div>
  );
};

export default Products;
