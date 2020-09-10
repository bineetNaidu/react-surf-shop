import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { Container, Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

export const Home = ({ shops }) => {
  const [query, setQuery] = useState("");
  const handleChange = (e) => setQuery(e.target.value);
  return (
    <Container>
      <div className="home">
        <h1 className="home__title">Surf Shop</h1>
        <Link to="/shops">View Shops Lists</Link>
        <form className="home__form">
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
    </Container>
  );
};
