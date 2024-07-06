import Current from "../components/current/current";
import Day from "../components/day/day";
import History from "../components/history/history";
import Map from "../components/map/map";
import './home.css'

function Home(){


return(
    <div className="grid-container" >


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