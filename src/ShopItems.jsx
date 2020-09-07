import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  main: {
    margin: "0.5rem auto",
    width: "100%",
    maxWidth: 360,
    border: "1px solid black",
    backgroundColor: theme.palette.background.paper,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  section1: {
    margin: theme.spacing(3, 2),
  },
  section2: {
    margin: theme.spacing(2),
  },
  section3: {
    margin: theme.spacing(3, 1, 1),
  },
}));

export default function ShopItems({ shopItemList }) {
  const classes = useStyles();
  const data = shopItemList.map((shop) => (
    <React.Fragment key={shop.ItemName}>
      <div className={classes.main}>
        <div className={classes.section1}>
          <Grid container>
            <Grid item xs>
              <Typography gutterBottom variant="h4">
                {shop.ItemName}
              </Typography>
            </Grid>
            <Grid item>
              <Typography gutterBottom variant="h6">
                {shop.price}
              </Typography>
            </Grid>
          </Grid>
          <Typography color="textSecondary" variant="body2">
            {shop.ItemDesc}
          </Typography>
        </div>
        <Divider variant="middle" />
        <div className={classes.section2}>
          <Typography gutterBottom variant="body1">
            Select type
          </Typography>
          <div>
            {shop.ItemSizes.map((size) => (
              <Chip className={classes.chip} label={size} key={size} />
            ))}
          </div>
        </div>
        <div className={classes.section3}>
          <Button color="primary">Add to cart</Button>
        </div>
      </div>
    </React.Fragment>
  ));
  return <div className={classes.root}>{data}</div>;
}
