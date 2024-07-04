import Current from "../components/current/current";
import Day from "../components/day/day";
import History from "../components/history/history";
import Map from "../components/map/map";
import './home.css'
import React, { useState, useEffect } from 'react';

function Home(){


  const [zoomLevel, setZoomLevel] = useState(1);
  const [transformEnabled, setTransformEnabled] = useState(true);

  const handleWheel = (e) => {
    if (e.ctrlKey) {
      e.preventDefault();
      const zoomChange = e.deltaY > 0 ? -0.1 : 0.1;
      const newZoomLevel = Math.max(0.5, Math.min(zoomLevel + zoomChange, 2));
      setZoomLevel(newZoomLevel);
      setTransformEnabled(newZoomLevel <= 1.0); // Disable transform after zoom level 1.5
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, [zoomLevel]);




return(
    <div className="grid-container" style={transformEnabled ? { transform: `scale(${zoomLevel})` } : {}}>


        <div className="day-component">
            <Day/>
        </div>
           
        <div className="current-component">
            <Current/>
        </div>

        
        <div className="map-component">
            <Map/>
        </div>

        <div className="history-component">
        <History/>
        </div>
      
    </div>
)
}

export default Home;