import React, { useRef, useEffect, useState } from 'react';
import './map.css'
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoibGVuaW5rIiwiYSI6ImNrb3YzZjB6NTAxYzEycHRtN2RzZHJoaDEifQ.US40UNIRpkeHWK2cnz11dw';

function Map() {

//map states  
const mapContainer = useRef(null);
const map = useRef(null);
const [lng, setLng] = useState(-70.9);
const [lat, setLat] = useState(42.35);
const [zoom, setZoom] = useState(9);

useEffect(() => {
  if (map.current) return; // initialize map only once
  map.current = new mapboxgl.Map({
  container: mapContainer.current,
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [lng, lat],
  zoom: zoom,
  preserveDrawingBuffer: true,
  controls:true
  });
  

  }, [zoom]);

  console.log(zoom);

  return (
    <div className="map">
        <div ref={mapContainer} className="map-container" />

        <div className="map-controllers">
          <i className="fa fa-plus-square map-icon" aria-hidden="true" 
          onClick={() => setZoom(zoom + 1)}
          ></i>
          <i className="fa fa-minus-square map-icon" aria-hidden="true"
           onClick={() => setZoom(zoom - 1)}
          ></i>
        </div>
    </div>
  );
}

export default Map;
