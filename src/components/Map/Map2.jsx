import React, { useRef, useEffect, useState } from 'react';
import ReactMapGL, { NavigationControl} from "react-map-gl";
import './map.css'
import {REACT_APP_MAPBOX_TOKEN} from '../../private/keys';


const navControlStyle= {
  right: 10,
  top: 10,
};

const Map2 = () => {

  const [viewport, setViewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    width: "100%",
    height: "90vh",
    zoom: 10,
    preserveDrawingBuffer: true,
  });

  return (
    <div>
       <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
          <NavigationControl style={navControlStyle} />
      </ReactMapGL>
      
    </div>
  );
};

export default Map2;