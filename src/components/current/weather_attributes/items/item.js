
import "./item.css"

export default function Item(props){

    return(
        <div className="block">
          <div className="image-container-item">
            <img src={props.img} alt="Weather Icon" />
          </div>
          <div className="text-container">
            <h2 className="value">Value</h2>
            <span className="value">Description</span>
          </div>
        </div>
    )

}