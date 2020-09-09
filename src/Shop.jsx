import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import "./Shop.css";
import Map from "./Map";
import { GridList, GridListTile } from "@material-ui/core";
import ShopItems from "./ShopItems";

class Shop extends Component {
  render() {
    const {
      shopImgs,
      shopName,
      shopDesc,
      shopItemsList,
      location,
    } = this.props.shop;
    return (
      <div className="shop">
        <Container maxWidth="lg" className="shop__container">
          <Map lat={location.coordinates[1]} lng={location.coordinates[0]} />
          <div className="shop__detail">
            <h3 className="shop__detail__title">{shopName}</h3>
            <div className="shop__detail__imgs">
              <GridList className="shop__detail__imgs__gridlist" cols={2.5}>
                {shopImgs.map((tile) => (
                  <GridListTile key={tile.img}>
                    <img src={tile.img} alt={tile.title} />
                  </GridListTile>
                ))}
              </GridList>
            </div>
            <div className="shop__detail__desc">
              <h3>About</h3>
              <p>{shopDesc}</p>
            </div>
            <div className="shop__detail__storeItems">
              <h3>{shopName}'s Shop Items</h3>
              <ShopItems shopItemList={shopItemsList} />
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Shop;
