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
                    <Item img={pressure} value="50.36" description="Pressure" />
                </div>

                <div className='item'>
                    <Item img={humidity} value="3.21" description="Humidity"/>
                </div>

                <div className='item'>
                    <Item img={feel} value="37&deg;C" description="Feel like"/>
                </div>

                <div className='item'>
                    <Item img= {thermometer} value="35&deg;C" description="Temperature"/>
                </div>
                
                <div className='item'>
                    <Item img= {uv} value="56.362" description="UV" />
                </div>
               
                <div className='item'>
                    <Item img= {wind} value="37Kmph" description="Wind"/>
               </div>

            </div>
           
        </div>
    );
}