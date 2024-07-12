
import Hour from './hour';
import './hourly.css'

import set_img from './add_image';


function Hourly({hourly}){

  const data = set_img(hourly)
   
   return (
    <div className='hourly-background'>
      <h1>test</h1>
        <div className='hourly-display'>
      {data.map((data, index) => {
          const timeString = data.time;
          const timeParts = timeString.split(' '); // Split the string at the space
          const time = timeParts[1]; 
          return (<Hour id = {index} img={data.img} temp={data.condition.text} hour={time} />)
      })}
      </div>
    </div>
  );
}



export default Hourly;