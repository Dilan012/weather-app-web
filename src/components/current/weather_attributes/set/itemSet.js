import './itemSet.css'
import pressure from "../../../../assets/pressure.png"
import humidity from "../../../../assets/humidity.png"
import feel from "../../../../assets/feel.png"
import thermometer from "../../../../assets/thermometer.png"
import uv from "../../../../assets/uv.png"
import wind from "../../../../assets/wind.png"
import Item from '../items/item';

export default function ItemSet(){

    return (
        <div className='block'>
            <div className='grid-container-itemset'>

                <div className='item'>
                    <Item img={pressure} />
                </div>

                <div className='item'>
                    <Item img={humidity}/>
                </div>

                <div className='item'>
                    <Item img={feel}/>
                </div>

                <div className='item'>
                    <Item img= {thermometer}/>
                </div>
                
                <div className='item'>
                    <Item img= {uv} />
                </div>
               
                <div className='item'>
                    <Item img= {wind} />
               </div>

            </div>
           
        </div>
    );
}