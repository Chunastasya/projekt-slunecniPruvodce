import "./style.css";
import Arrow from "./img/Arrow.svg";

const Navigation  = () => {
    

return (
    <div className='circles'>
        <div className="buttons">
    <button className='base-btn base-btn--left base-btn--emphasis'><img className="image-arrow" src={Arrow}></img></button>
    </div>
    <div className='circle'></div>
    <div className='circle'></div>
    <div className='circle'></div>
    <div className='circle'></div>
    <div className='circle'></div>
    <div className='circle'></div>
    <div className='circle'></div>
    <div className='circle'></div>
    <div className='circle'></div>
    <div className='circle'></div>
        <div className="buttons">
    <button className='base-btn base-btn--right base-btn--emphasis'><img src={Arrow}></img></button>
    </div>
    </div>

)};


export default Navigation;