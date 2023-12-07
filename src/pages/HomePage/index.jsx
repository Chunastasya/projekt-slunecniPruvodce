import './style.css';
import Womens from "./img/womens1.png";
import Child from "./img/child2.png"
import Makeup from "./img/makeup3.png"
import Map from "./img/map4.png"
import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div className="homepage">
     
      <main>
        <section className='homepage__section'>
          <img className='home-page_img' src={Womens}></img>
          <div className='homepage-text_section'>
          <h2 className='h2-homepage'>Víte, jaká je vaše typy 
pokožky? </h2>
<p className='p-homepage'>Pojďme to zjistit spolu! Fitzpatrickova stupnice je metoda, kterou dermatologové používají klasifikovat různé typy pokožky na základě její reakce na sluneční záření. Tato stupnice je založena na vaší přirozené barvě pleti, schopnosti opalování a citlivosti na slunce. Pro vás je důležité vědět, jaký máte typ pokožky, abyste mohli vybrat správnou péči a ochranu, která bude nejlépe vyhovovat vašim individuálním potřebám. Pojďte tedy zodpovědět několik otázek a zjistit!</p>
<div className='section-test'>
<Link className='base-btn base-btn--right btn--homepage' to="/test">Spustit test</Link>
</div>
</div>
        </section>
        <section>
        <img className='home-page_img home--page-child' src={Child}></img>
        <h2 className='h2-homepage'>Tipy pro ochranu pokožky vašeho dítěte</h2>
        <div className='section-test'>
        <Link className='base-btn base-btn--right btn--homepage btn--homepage-zjistit' to="test-result/-1">Zjistit</Link>
        </div>
        </section>
        <section className='section-makeup'>
        <img className='home-page_img' src={Makeup}></img>
        <Link to="/recommendation" className='home-page-Precommendation h2-homepage'>hlavní typy produktů <br/>pro ochranu před <br/>sluncem</Link>
        </section>
      
        <section className='section-map'>
        <img className='home-page_img' src={Map}></img>
        <Link to="/map" className='home-page-Pmap h2-homepage'>Mapa UV Indexu</Link>
        </section>
      </main>
      
    </div>
  );
};
