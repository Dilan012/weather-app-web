import { APIProvider , Map} from "@vis.gl/react-google-maps";
import './map.css'
import { useEffect, useState } from "react";

const apiKeymap = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;


function MapView({geolocation, handle}) {
  const [center, setCenter] = useState({ lat: geolocation.latitude, lng: geolocation.longitude });

  useEffect(() => {
    setCenter({ lat: geolocation.latitude, lng: geolocation.longitude });
  }, [geolocation]);
  return (
    <div className="map-container">
      <APIProvider apiKey= {apiKeymap} >
        <Map
        id="map1"
         className="g-map"
         defaultCenter={center}
        /*key={JSON.stringify(center)}*/
         defaultZoom={11}
         gestureHandling={'greedy'}
         disableDefaultUI={true}
        onClick={e=>{
          handle( { latitude: e.detail.latLng.lat, longitude: e.detail.latLng.lng  })
        }}/>
      </APIProvider>
    </div>
  );
}




export default MapView;
