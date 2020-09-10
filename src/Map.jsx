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
  // componentDidUpdate() {
  //   let map = new mapboxgl.Map({
  //     container: this.mapContainer,
  //     style: "mapbox://styles/mapbox/light-v10",
  //     center: [this.props.lng || 0, this.props.lat || 0],
  //     zoom: this.props.zoom || 8,
  //   });
  //   if (this.props.markers) {
  //     // console.log(this.props.markers);
  //     for (let marker of this.props.markers) {
  //       new mapboxgl.Marker().setLngLat([marker[0], marker[1]]).addTo(map);
  //     }
  //   }
  // }
  render() {
    return (
      <div>
        <div ref={(el) => (this.mapContainer = el)} className="mapContainer" />
      </div>
    );
  }
}

export default Map;
