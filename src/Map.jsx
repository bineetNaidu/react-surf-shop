import React, { Component } from "react";
import mapboxgl from "mapbox-gl";
import "./Map.css";
import { MAPBOX_TOKEN } from "./config";

mapboxgl.accessToken = MAPBOX_TOKEN;

export class Map extends Component {
  componentDidMount() {
    new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [this.props.lng, this.props.lat],
      zoom: this.props.zoom || 8,
    });
  }
  render() {
    return (
      <div>
        <div ref={(el) => (this.mapContainer = el)} className="mapContainer" />
      </div>
    );
  }
}

export default Map;
