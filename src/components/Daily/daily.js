import './daily.css'
import Day from './day.js';

function Daily({tomorrow, dayAfter}){

    return (
        <div className='main-container'>
            <div className='future'>
                <Day data={tomorrow} name="Tomorrow"/>
            </div>
            <div className='future'>
                <Day data={dayAfter} name="Day After"/>
            </div>    
                
        </div>
    
    );
}

export default Daily;