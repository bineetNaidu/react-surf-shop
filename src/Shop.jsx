import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import "./Shop.css";
import Map from "./Map";
import { GridList, GridListTile } from "@material-ui/core";

const tileData = [
  {
    img:
      "https://images.unsplash.com/photo-1599179497966-7934c0fe82d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    title: "adventure",
  },
  {
    img:
      "https://images.unsplash.com/photo-1597011652835-f97c992e8dba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    title: "sea",
  },
  {
    img:
      "https://images.unsplash.com/photo-1599027619757-d2a6c129e388?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    title: "surf boats",
  },
];

class Shop extends Component {
  static defaultProps = {
    shopImgs: [...tileData],
    shopName: "Surf Shop",
    shopDesc:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobissed alias ex similique! Cumque praesentium ipsam excepturi evenietasperiores! Eveniet sunt accusantium nostrum facilis? Doloribusqui a corrupti tenetur eum quod voluptatem nam fuga nihil.",
  };
  render() {
    const { shopImgs, shopName, shopDesc } = this.props;
    return (
      <div className="shop">
        <Container maxWidth="lg" className="shop__container">
          <Map />
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
              {/* ShopItems */}
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Shop;
