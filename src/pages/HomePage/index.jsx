import "./style.css";
import Womens from "./img/womens1.png";
import Child from "./img/child2.png";
import Makeup from "./img/makeup3.png";
import Map from "./img/map4.png";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="homepage">
      <main>
        <section>
          <img className="homepage__img" src={Womens}></img>
          <h2 className="homepage__subtitle">
            Víte, jaká je vaše typy pokožky?{" "}
          </h2>
          <p className="homepage__text ">
            Pojďme to zjistit spolu! Fitzpatrickova stupnice je metoda, kterou
            dermatologové používají klasifikovat různé typy pokožky na základě
            její reakce na sluneční záření. Tato stupnice je založena na vaší
            přirozené barvě pleti, schopnosti opalování a citlivosti na slunce.
            Pro vás je důležité vědět, jaký máte typ pokožky, abyste mohli
            vybrat správnou péči a ochranu, která bude nejlépe vyhovovat vašim
            individuálním potřebám. Pojďte tedy zodpovědět několik otázek a
            zjistit!
          </p>
          <Link className="base-btn base-btn--right btn--homepage" to="/test">
            Spustit test
          </Link>
        </section>
        <section className="homepage__section--child">
          <img className="homepage__img" src={Child}></img>
          <h2 className="homepage__subtitle">
            Tipy pro ochranu pokožky vašeho dítěte
          </h2>
          <Link
            className="base-btn base-btn--right btn--homepage btn--homepage-zjistit"
            to="test-result/-1"
          >
            Zjistit
          </Link>
        </section>
        <section className="homepage__section--makeup">
          <img className="homepage__img" src={Makeup}></img>
          <Link
            to="/recommendation"
            className="homepage__subtitle--recommendation homepage__subtitle"
          >
            hlavní typy produktů <br />
            pro ochranu před <br />
            sluncem
          </Link>
        </section>

        <section className="homepage__section--map">
          <img className="homepage__img" src={Map}></img>
          <Link
            to="/map"
            className="homepage__subtitle--map homepage__subtitle"
          >
            Mapa UV Indexu
          </Link>
        </section>
      </main>
    </div>
  );
};
