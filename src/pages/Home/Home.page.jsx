import React, { createRef, useEffect, useState } from "react";
import { useScreenshot } from "use-react-screenshot";
import { Link } from "react-router-dom";
import { OverlayTrigger, Button, ButtonGroup, Tooltip } from "react-bootstrap";

import "./home.css";
import Map from "../../components/Map/Map";
import Map2 from "../../components/Map/Map2";

const Home = () => {
  useEffect(() => {}, []);

  const ref = createRef(null);

  const [count, setCount] = useState(5);
  const [image, takeScreenshot] = useScreenshot();

  const getImage = () => {
    takeScreenshot(ref.current);
    setCount(count + 1);
  };

  const view3D = () => {};

  const [width, setWidth] = useState(600);

  return (
    <div className="home">
      <div id="map-container" ref={ref} className="home__map">
        <Map2 />

        <div className="home__control">
          <ButtonGroup vertical>
            <OverlayTrigger
              placement="left"
              overlay={<Tooltip id="tooltip-left">Take ScreenShot</Tooltip>}
            >
              <Button variant="light" onClick={getImage} className="home__btn">
                {" "}
                <i className="fas fa-camera"></i>{" "}
              </Button>
            </OverlayTrigger>

            <OverlayTrigger
              placement="left"
              overlay={<Tooltip id="tooltip-left">See in 3D</Tooltip>}
            >
              <Button variant="light" className="home__btn">
                {" "}
                <i className="fas fa-cube"></i>{" "}
              </Button>
            </OverlayTrigger>
          </ButtonGroup>
        </div>

        {/* <div className="home__controls col-4">
          <button onClick={getImage} className="btn btn-info home__button">
            Take screenshot
          </button>

          <Link
            to={{
              pathname: "/baby",
              state: image,
            }}
            className="btn btn-success home__button"
          >
            Convert to 3D
          </Link>

          <img width={width} src={image} className="home__sc" />
        </div> */}

      </div>
    </div>
  );
};
export default Home;
