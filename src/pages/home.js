import Current from "../components/current/current";
import Hourly from "../components/hourly/hourly";
import Daily from "../components/Daily/daily";
import Map from "../components/map/map";
import './home.css'

function Home(){


return(
    <div className="grid-container" >


        <div className="day-component">
            <Hourly />
        </div>
           
        <div className="current-component">
            <Current/>
        </div>

        
        <div className="map-component">
            <Map/>
        </div>

        <div className="history-component">
        <Daily/>
        </div>
      
    </div>
)
}

export default Home;