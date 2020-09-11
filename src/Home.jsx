import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { Container, Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export const Home = ({ shops }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [matches, setmatches] = useState([]);
  const handleChange = (e) => setQuery(e.target.value.replace(/ /g, "-"));

  const handleSubmit = async (e) => {
    e.preventDefault();
    let matches = shops.filter((shop) => {
      let regex = new RegExp(`^${query}`, "gi");
      return shop.shopName.match(regex);
    });
    handleOpen();
    if (matches) {
      setmatches(matches);
    }
  };
  const listOfMatches = matches.map((match) => (
    <li>
      <Link to={`/shops/${match.uuid}`} key={match.uuid}>
        {match.shopName}
      </Link>
    </li>
  ));

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <div className="home">
        <h1 className="home__title">Surf Shop</h1>
        <Link to="/shops">View Shops Lists</Link>
        <form className="home__form" onSubmit={handleSubmit}>
          <TextField
            id="outlined-basic"
            label="Search"
            variant="outlined"
            value={query}
            onChange={handleChange}
          />
          <Button variant="contained" color="secondary" type="submit">
            Search
          </Button>
        </form>

        {/* <Map zoom={1} markers={addMarkers()} /> */}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">
              {matches.length >= 0 && <ul>{listOfMatches}</ul>}
            </p>
          </div>
        </Fade>
      </Modal>
    </Container>
  );
};
