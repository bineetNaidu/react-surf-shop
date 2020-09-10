import React from "react";
import Paginations from "./Paginations";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ShopListItem from "./ShopListItem";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    justifyContent: "space-evenly",
    flex: 1,
    flexWrap: "wrap",
  },
  main: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    marginTop: "2rem",
  },
}));

function ShopList({ shopLists, shopsPerPage, totalPosts, paginate }) {
  const classes = useStyles();
  const lists = shopLists.map((shop) => (
    <ShopListItem
      key={shop.uuid}
      img={shop.shopImgs[0].img}
      desc={shop.shopDesc}
      name={shop.shopName}
      uuid={shop.uuid}
    />
  ));
  return (
    <div className={classes.main}>
      <h1 className={classes.title}>Shop Lists</h1>
      <Paginations
        shopsPerPage={shopsPerPage}
        totalPosts={totalPosts}
        paginate={paginate}
      />
      <List
        component="nav"
        className={classes.root}
        aria-label="mailbox folders"
      >
        {lists}
      </List>
    </div>
  );
}

export default ShopList;
