import React from "react";
import Shop from "./Shop";
import { Route, Switch } from "react-router-dom";
import ShopList from "./ShopList";
import data from "./dataLists";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <h1>Home</h1>} />
        <Route
          exact
          path="/shops"
          render={() => <ShopList shopLists={[...data]} />}
        />
        <Route exact path="/shops/:id" render={(routerProps) => <Shop />} />
        {/* <Route exact path="*" component={<h2>404 NOT FOUND</h2>} /> */}
      </Switch>
    </div>
  );
}

export default App;
