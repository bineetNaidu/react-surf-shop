import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import "./Shop.css";
import Map from "./Map";
import PinDropIcon from "@material-ui/icons/PinDrop";
import ShopItems from "./ShopItems";

class Shop extends Component {
  render() {
    const {
      shopImgs,
      shopName,
      shopDesc,
      shopItemsList,
      placeName,
      location,
    } = this.props.shop;
    return (
      <div className="shop">
        <Container maxWidth="lg" className="shop__container">
          <Map lat={location.coordinates[1]} lng={location.coordinates[0]} />
          <div className="shop__detail">
            <div className="shop__infos">
              <h3 className="shop__detail__title">{shopName}</h3>
              <span>
                <PinDropIcon /> {placeName}
              </span>
            </div>
            <div className="shop__detail__imgs">
              {shopImgs.map((tile) => (
                <div item xs key={tile.img}>
                  <img src={tile.img} alt={tile.title} />
                </div>
              ))}
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
