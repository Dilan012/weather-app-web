
import Hour from './hour';
import './hourly.css'

import storm from '../../assets/storm.png'

const jsonData = {
    forecast: [
      { hour: 6.00, temperature: 20, condition: 'Clear' },
      { hour: 7.00, temperature: 19, condition: 'Clear' },
      { hour: 8.00, temperature: 18, condition: 'Cloudy' },
      { hour: 9.00, temperature: 18, condition: 'Rain' },

    ]
  };


function Hourly(){

   const forecast = jsonData.forecast;

   return (
    <div className='hourly-background'>
      <h1>Hourly Forecast</h1>
        <div className='hourly-display'>
      {forecast.map((data, index) => (
          <Hour img={storm} temp={data.temperature} />
      ))}
      </div>
    </div>
  );
}



export default Hourly;