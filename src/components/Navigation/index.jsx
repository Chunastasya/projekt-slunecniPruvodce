import "./style.css";

const Navigation  = () => {
    const [currentNavigation, setCurrentNavigation] = useState();

return (
    <div className='circles'>
    <button className='base-btn base-btn--left base-btn--emphasis'></button>
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
    <button className='base-btn base-btn--right base-btn--emphasis'></button>
    </div>

)};


export default Navigation;