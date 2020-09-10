import React, { Component } from "react";
import Shop from "./Shop";
import { Route, Switch } from "react-router-dom";
import ShopList from "./ShopList";
import getApiData from "./helpers";
import { Home } from "./Home";
import Navbar from "./Navbar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shops: [],
      currPage: 1,
      shopsPerPage: 10,
    };
    this.findShop = this.findShop.bind(this);
    this.paginate = this.paginate.bind(this);
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
  // Change page
  paginate(pageNumber) {
    this.setState({ currPage: pageNumber });
  }

  render() {
    const { shops, currPage, shopsPerPage } = this.state;
    // Get current posts
    const indexOfLastPost = currPage * shopsPerPage;
    const indexOfFirstPost = indexOfLastPost - shopsPerPage;
    const currShops = shops.slice(indexOfFirstPost, indexOfLastPost);

    return (
      <div className="App" style={{ height: "100vh" }}>
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Home shops={[...this.state.shops]} />}
          />
          <Route
            exact
            path="/shops"
            render={() => (
              <ShopList
                shopLists={currShops}
                shopsPerPage={shopsPerPage}
                totalPosts={shops.length}
                paginate={this.paginate}
              />
            )}
          />
          <Route
            exact
            path="/shops/:uuid"
            render={(routerProps) => (
              <Shop
                shop={this.findShop(routerProps.match.params.uuid)}
                {...routerProps}
              />
            )}
          />
          {/* <Route exact path="*" component={<h2>404 NOT FOUND</h2>} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
