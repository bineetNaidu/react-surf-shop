import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import "./Shop.css";
import Map from "./Map";

class Shop extends Component {
  render() {
    return (
      <div className="shop">
        <Container maxWidth="lg" className="shop__container">
          <Map />
        </Container>
      </div>
    );
  }
}

export default Shop;
