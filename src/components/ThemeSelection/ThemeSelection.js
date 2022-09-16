import { useState, useEffect } from "react";
import ThemeCard from "../ThemeCard/ThemeCard";
import "./ThemeSelection.scss";
import primeTime from "../../assets/cardImages/primeTime.png";
import popTheme from "../../assets/data/mostPopTheme.json";
import popPrem from "../../assets/data/mostPopPremium.json";
import premPack from "../../assets/data/premiumPacks.json";
import indChan from "../../assets/data/individualChannels.json";
import diveDeep from "../../assets/data/divingDeeper.json";
import diveDeep2 from "../../assets/data/divingDeeper2.json";
import diveDeep3 from "../../assets/data/divingDeeper3.json";
import { useReducedMotion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import popThemes from "../../assets/data/mostPopTheme.json";
import PremiumCard from "../PremiumCard/PremiumCard";
import netflixImage from "../../assets/premiumPopularImages/netflix.png";
import ChannelsCard from "../ChannelsCard/ChannelsCard";
import netflixImage2 from "../../assets/PremiumChannelsImages/netflix.png";
import checkmarks from "../../assets/summary-check.svg";
import hippo from "../../assets/hippo.png";

function ThemeSelection() {
  const [activeTheme, setActiveTheme] = useState(null);
  const [cart, setCart] = useState(0);
  const [popThemeCard] = useState(popTheme);
  const [popPremCard] = useState(popPrem);
  const [premPackCard] = useState(premPack);
  const [diveDeepCard] = useState(diveDeep);
  const [diveDeepCard2] = useState(diveDeep2);
  const [diveDeepCard3] = useState(diveDeep3);

  function showInfo(category) {
    console.log(category);
    setActiveTheme(category);
  }

  function seletedBox(theme) {
    // setThemes(theme);
    //change classname to show selected item
    setCart(cart + 1);
    console.log(cart);
    if (cart > 3) {
      alert("Upgrade so you can choose all the channels you want.");
    }
  }

  useEffect(() => {
    console.log();
  }, []);

  function seletedBox(theme) {
    console.log(theme);
    setCart(theme);
  }
  // function seletedBox(theme) {
  //   console.log(theme);
  //   setCart(cart + 1);
  //   console.log(cart);
  //   if (cart > 4) {
  //     alert("Upgrade so you can choose all the channels you want.");
  //   }
  //   console.log(cart);
  //   console.log(theme);
  // }

  return (
    <section className="categories">
      <div className="categories__header">
        <h2 className="categories__title">
          <div className="numberCircled">3</div>Choose from our{" "}
          <span className="bold">themes</span>
        </h2>
        <p className="categories__p">Most popular theme packs</p>
      </div>
      <div className="categories__cards">
        {popThemeCard.map((item) => (
          <ThemeCard
            key={uuidv4()}
            header={item.title}
            description={item.subtitle}
            image={item.image}
            onclickEvent={seletedBox}
          />
        ))}
      </div>
      <p className="categories__p--purple">Or dive deeper</p>
      <div>
        <button
          onClick={() => showInfo("movies")}
          className="categories__button categories__button--active"
        >
          Movies & Series
        </button>
        <button
          onClick={() => showInfo("sports")}
          className="categories__button"
        >
          Sports & Outdoors
        </button>
        <button
          onClick={() => showInfo("entertainment")}
          className="categories__button"
        >
          Entertainment
        </button>
        <button
          onClick={() => showInfo("family")}
          className="categories__button"
        >
          Family & Kids
        </button>
        <button
          onClick={() => showInfo("education")}
          className="categories__button"
        >
          Education & Documentary
        </button>
        <button onClick={() => showInfo("news")} className="categories__button">
          News
        </button>
        <button
          onClick={() => showInfo("south-asian")}
          className="categories__button"
        >
          South Asian
        </button>
        <button
          onClick={() => showInfo("chinese")}
          className="categories__button"
        >
          Chinese
        </button>
        <button
          onClick={() => showInfo("french")}
          className="categories__button"
        >
          French
        </button>
        <button
          onClick={() => showInfo("filipino")}
          className="categories__button"
        >
          Filipino
        </button>
        <button
          onClick={() => showInfo("international")}
          className="categories__button"
        >
          International
        </button>
        <button
          onClick={() => showInfo("talk-show")}
          className="categories__button"
        >
          Talk Show & Variety
        </button>
      </div>
      <div className="underButtons">
        {activeTheme === "most-popular" && (
          <div className="categories__cards">
            {diveDeepCard.map((item) => (
              <ThemeCard
                key={uuidv4()}
                header={item.title}
                description={item.subtitle}
                image={item.image}
                onclickEvent={seletedBox}
              />
            ))}
          </div>
        )}
        {activeTheme === "movies" && (
          <div className="categories__cards">
            {diveDeepCard2.map((item) => (
              <ThemeCard
                key={uuidv4()}
                header={item.title}
                description={item.subtitle}
                image={item.image}
                onclickEvent={seletedBox}
              />
            ))}
          </div>
        )}
        {activeTheme === "sports" && (
          <div className="categories__cards">
            {diveDeepCard3.map((item) => (
              <ThemeCard
                key={uuidv4()}
                header={item.title}
                description={item.subtitle}
                image={item.image}
                onclickEvent={seletedBox}
              />
            ))}
          </div>
        )}
        {activeTheme === "entertainment" && (
          <div className="categories__cards">
            {popThemeCard.map((item) => (
              <ThemeCard
                key={uuidv4()}
                header={item.title}
                description={item.subtitle}
                image={item.image}
                onclickEvent={seletedBox}
              />
            ))}
          </div>
        )}
        {activeTheme === "family" && (
          <div className="categories__cards">
            {popThemeCard.map((item) => (
              <ThemeCard
                key={uuidv4()}
                header={item.title}
                description={item.subtitle}
                image={item.image}
                onclickEvent={seletedBox}
              />
            ))}
          </div>
        )}
      </div>

      <section className="premiumPop">
        <div className="categories__header">
          <h2 className="categories__title">
            <div className="numberCircled">4</div>Select from our{" "}
            <span className="bold">premium </span>
            collection
          </h2>
          <p className="categories__p">Most popular premiums</p>
        </div>
        {popPremCard.map((item) => (
          <ThemeCard
            key={uuidv4()}
            header={item.title}
            description={item.subtitle}
            image={item.image}
            onclickEvent={seletedBox}
          />
        ))}
      </section>

      <section className="premiumPacks">
        <div className="categories__header">
          <p className="categories__p">Premium Packs</p>
        </div>
        {premPackCard.map((item) => (
          <ThemeCard
            key={uuidv4()}
            header={item.title}
            description={item.subtitle}
            image={item.image}
            onclickEvent={seletedBox}
          />
        ))}
      </section>

      <section className="indChan">
        <div className="categories__header">
          <p className="categories__p">Individual Channels</p>
        </div>
        {indChan.map((item) => (
          <ThemeCard
            key={uuidv4()}
            header={item.title}
            description={item.subtitle}
            image={item.image}
            onclickEvent={seletedBox}
          />
        ))}
      </section>

      <section className="checkout">
        <div className="categories__header">
          <h2 className="categories__title">
            <div className="numberCircled">5</div>Seal the deal
          </h2>
        </div>
        <div className="checkout__card-wrapper">
          <div className="checkout__card">
            <div className="checkout__text">
              <h3 className="checkout__header">Package Type</h3>
              <h4 className="checkout__subheader">
                All Your Favorites Package
              </h4>
              <h3 className="checkout__header">Themes</h3>
              <p className="checkout__theme">
                <img
                  className="checkout__checkmark"
                  src={checkmarks}
                  alt="checkmark"
                />
                Laughs and Cheers
              </p>
              <p className="checkout__theme">
                <img
                  className="checkout__checkmark"
                  src={checkmarks}
                  alt="checkmark"
                />
                Primetime
              </p>
              <p className="checkout__theme">
                <img
                  className="checkout__checkmark"
                  src={checkmarks}
                  alt="checkmark"
                />
                Explore
              </p>
              <p className="checkout__theme">
                <img
                  className="checkout__checkmark"
                  src={checkmarks}
                  alt="checkmark"
                />
                Living
              </p>
              <h3 className="checkout__header">Premium</h3>
              <p className="checkout__theme">
                <img
                  className="checkout__checkmark"
                  src={checkmarks}
                  alt="checkmark"
                />
                Crave
              </p>
              <div className="checkout__buttons">
                <button className="checkout__button checkout__button--clear">
                  Clear all
                </button>
                <button className="checkout__button checkout__button--complete">
                  Complete Bundle
                </button>
              </div>
            </div>
            <div className="checkout__image">
              <img
                className="checkout__image-img"
                src={hippo}
                alt="hippo image"
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default ThemeSelection;
