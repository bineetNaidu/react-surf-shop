import React, { Component } from "react";
import Shop from "./Shop";
import { Route, Switch } from "react-router-dom";
import ShopList from "./ShopList";
import data from "./dataLists";

class App extends Component {
  static defaultProps = {
    shops: [...data],
  };
  constructor(props) {
    super(props);
    this.findShop = this.findShop.bind(this);
  }
  findShop(uuid) {
    return this.props.shops.find((shop) => shop.uuid === uuid);
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <h1>Home</h1>} />
          <Route
            exact
            path="/shops"
            render={() => <ShopList shopLists={this.props.shops} />}
          />
          <Route
            exact
            path="/shops/:uuid"
            render={(routerProps) => (
              <Shop shop={this.findShop(routerProps.match.params.uuid)} />
            )}
          />
          {/* <Route exact path="*" component={<h2>404 NOT FOUND</h2>} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
