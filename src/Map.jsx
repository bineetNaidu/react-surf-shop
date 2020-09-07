import React, { Component } from "react";
import mapboxgl from "mapbox-gl";
import "./Map.css";
import { MAPBOX_TOKEN } from "./config";

mapboxgl.accessToken = MAPBOX_TOKEN;

export class Map extends Component {
  static defaultProps = {
    lng: 5,
    lat: 34,
    zoom: 8,
  };

  componentDidMount() {
    new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [this.props.lng, this.props.lat],
      zoom: this.props.zoom,
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
