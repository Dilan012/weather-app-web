import Current from "../components/current/current";
import Hourly from "../components/hourly/hourly";
import Daily from "../components/Daily/daily";
import Map from "../components/map/map";
import './home.css'

import { useEffect, useState } from 'react';
import axios from 'axios';

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

function Home(){

    
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null);

  useEffect (()=>{
    axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=homagama&days=1&aqi=no&alerts=no`).then(
      response =>{
        setData(response.data)
        setLoading(false)
      }
    ).catch(err => {
      setError(err)
      setLoading(false)
    })
  },[])

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }
  
   const hourly = data.forecast.forecastday[0].hour;
   const current = data.current
   const location = data.location
   
   

return(
    <div className="grid-container" >


        <div className="hourly-component">
            <Hourly hourly={hourly}/>
        </div>
           
        <div className="current-component">
            <Current current={current} location={location}/>
        </div>

        
        <div className="map-component">
            <Map/>
        </div>

        <div className="daily-component">
        <Daily/>
        </div>
      
    </div>
)
}

export default Home;