import React from "react";
import { Link } from "react-router-dom";

function ShopList({ shopLists }) {
  const lists = shopLists.map((shop) => (
    <li key={shop.uuid}>
      <Link to={`/shops/${shop.uuid}`}>{shop.shopName}</Link>
    </li>
  ));
  return (
    <div>
      <h1>All Shops</h1>
      <ul>{lists}</ul>
    </div>
  );
}

export default ShopList;
