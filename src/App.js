import React, { Component } from "react";
import Shop from "./Shop";
import { Route, Switch } from "react-router-dom";
import ShopList from "./ShopList";
import getApiData from "./helpers";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shops: [],
    };
    this.findShop = this.findShop.bind(this);
  }
  async componentDidMount() {
    const shopsData = await getApiData();
    if (shopsData.status === 200) {
      this.setState({
        shops: [...shopsData.shops],
      });
    }
  }
  findShop(uuid) {
    return this.state.shops.find((shop) => shop.uuid === uuid);
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <h1>Home</h1>} />
          <Route
            exact
            path="/shops"
            render={() => <ShopList shopLists={this.state.shops} />}
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
