

import './current.css'
import ItemSet from './weather_attributes/set/itemSet';


function Current(){

    return (
        <div className='grid-container-current'>
           <ItemSet/>
           <MainWeather></MainWeather>
        </div>
    );
}




const MainWeather = (props) =>{
    return(
        <div>
           <img src={props.img} alt='text size'/>  
        </div>
    )
}

export default Current;