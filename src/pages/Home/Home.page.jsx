import React, { createRef, useEffect, useState } from "react";
import { useScreenshot } from "use-react-screenshot";
import { Link } from "react-router-dom";
import {
  OverlayTrigger,
  Button,
  ButtonGroup,
  Tooltip,
  Modal,
} from "react-bootstrap";

import "./home.css";
import Map from "../../components/Map/Map";
import Babylon from "../../components/Babylon/Babylon";

const Home = () => {
  useEffect(() => {
    getImage();
  }, []);

  const ref = createRef(null);

  const [image, takeScreenshot] = useScreenshot();
  const [show, setShow] = useState(false);
  const [show3D, setShow3d] = useState(false);

  const getImage = () => {
    takeScreenshot(ref.current);
    console.log("getimage");
  };


  const [width, setWidth] = useState(600);

  return (
    <div className="home">
      <div id="map-container" ref={ref} className="home__map">
        <Map />
        <div className="home__control">
          <ButtonGroup vertical>
            <OverlayTrigger
              placement="left"
              overlay={<Tooltip id="tooltip-left">Take ScreenShot</Tooltip>}
            >
              <Button
                variant="light"
                onClick={() => {
                  getImage();
                  setShow(true);
                }}
                className="home__btn"
              >
                {" "}
                <i className="fas fa-camera"></i>{" "}
              </Button>
            </OverlayTrigger>

            {/* <OverlayTrigger
              placement="left"
              overlay={<Tooltip id="tooltip-left">View in 3D</Tooltip>}
            >
              <Button variant="light" className="home__btn" onClick={view3D}>
                {" "}
                <i className="fas fa-cube"></i>{" "}
              </Button>
            </OverlayTrigger> */}
          </ButtonGroup>
        </div>

        <div className="home__popup">
          <Modal
            show={show}
            onHide={() => {
              setShow(false);
              setShow3d(false);
            }}
            dialogClassName="modal-90w model-width"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                {show3D ? "3D view of the Map " : "Screenshot Of Current Map"}
              </Modal.Title>
            </Modal.Header>

            <Modal.Body>
              {show3D ? (
                <Babylon img3d={image} />
              ) : (
                <img width={width} src={image} className="home__sc" />
              )}
            </Modal.Body>

            <Modal.Footer closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                <Button
                  variant="info"
                  onClick={
                    show3D ? () => setShow(false) : () => setShow3d(true)
                  }
                >
                  {" "}
                  {show3D ? "Close" : "View in 3D"}{" "}
                </Button>
              </Modal.Title>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};
export default Home;
