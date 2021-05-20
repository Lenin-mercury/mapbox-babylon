import React, {createRef, useState} from 'react';
import { useScreenshot} from 'use-react-screenshot';
import { Link } from "react-router-dom";
import './home.css'
import Map from '../components/Map';

const Home = () => {

    const ref = createRef(null)

    const[count, setCount]= useState(5) ;
    const [image, takeScreenshot] = useScreenshot();

    const getImage = () => {
        takeScreenshot(ref.current);
        setCount(count + 1);
    };

      const [width, setWidth] = useState(600);  

    return (
        <div className="home row">
            <div id="map-container" ref={ref}    
            className="home__map col-8"
            >
                <Map />
            </div>

            <div className="home__controls col-4">     
                <button onClick={getImage} className="btn btn-info home__button">
                Take screenshot
                </button>

                <Link to = {{
                    pathname:"/baby",
                    state:image
                }}
                className="btn btn-success home__button"
                >
                    Convert to 3D
                </Link>

                <img width={width} src={image} 
                className="home__sc"
                />
            </div>
            
        </div>
    );
};
export default Home;