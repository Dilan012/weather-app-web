
import './current.css'
import ItemSet from './weather_attributes/set/itemSet';
import sun from '../../assets/cloudy (1).png'

function Current(){

    return (
        <div className='grid-container-current'>
            <div className='item-set'>
                <ItemSet/>
            </div>
            
            <div className='weather-current'>
                <MainWeather img={sun} />
            </div>
                
        </div>
    );
}






const MainWeather = (props) =>{
    return(
        <div className='main-weather-block'>
            <div className='main-weather-img-container'>
                <img src={props.img} alt='weather Icon' className='main-weather-img'/>
            </div>
            
            <div className='main-weather-value'>
                <h1>Heavy Rain</h1>
                <h3>6.00AM - 7.00 AM</h3><br/>
                <h2 style={{color:"#202020"}}>
                    Homagama
                </h2>
            </div>
        
        </div>
    )
}

export default Current;