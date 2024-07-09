
import Hour from './hour';
import './hourly.css'


import storm from '../../assets/storm.png'




function Hourly({hourly}){

   
   return (
    <div className='hourly-background'>
      <h1>test</h1>
        <div className='hourly-display'>
      {hourly.map((data, index) => {
          const timeString = data.time;
          const timeParts = timeString.split(' '); // Split the string at the space
          const time = timeParts[1]; 

          return (<Hour img={storm} temp={data.condition.text} hour={time}/>)
      })}
      </div>
    </div>
  );
}



export default Hourly;