import React from "react";
import { Link } from "react-router-dom";
import Paginations from "./Paginations";

function ShopList({ shopLists, shopsPerPage, totalPosts, paginate }) {
  const lists = shopLists.map((shop) => (
    <li key={shop.uuid}>
      <Link to={`/shops/${shop.uuid}`}>{shop.shopName}</Link>
    </li>
  ));
  return (
    <div>
      <h1>All Shops</h1>
      <Paginations
        shopsPerPage={shopsPerPage}
        totalPosts={totalPosts}
        paginate={paginate}
      />
      <ul>{lists}</ul>
    </div>
  );
}

export default ShopList;
