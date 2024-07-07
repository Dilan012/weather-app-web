import './hour.css'

export default function Hour(props){

    return(
        <div className='hour-item'>
            <div className="hour-text">
                <h2>{props.hour}</h2>
            </div>
            <div className="hour-img-cotainer">
                <img src={props.img} alt='test' className='hour-img'/>
            </div>
            <div className="hour-temp">
               <h3>{props.temp}</h3>
            </div>
        </div>
    )
}