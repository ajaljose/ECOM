import React, { useState } from "react";
import hero1 from "../images/hero1.png";
import hero2 from "../images/iphone.png";
import left from "../images/left.png";
import right from "../images/right.png";
import shipping from "../images/shipping.png";
import money from "../images/money.png";
import support from "../images/support.png";
import card from "../images/card.png";
import tws from "../images/tws.png";
import speaker from "../images/speaker.png";
import watch from "../images/watch.png";
import headphone from "../images/headphone.png";
import watchesData from "./watchesData.json";
import redheadphone from "../images/redheadphone.png";
import watch0 from "../images/watch0.png";
import watch1 from "../images/watch1.png";
import watch2 from "../images/watch2.png";
import watch3 from "../images/watch3.png";
import watch4 from "../images/watch4.png";
import watch5 from "../images/watch5.png";
import watch6 from "../images/watch6.png";
import watch7 from "../images/watch7.png";
import earbuds8 from "../images/earbuds8.png";
import earbuds1 from "../images/earbuds1.png";
import earbuds2 from "../images/earbuds2.png";
import earbuds3 from "../images/earbuds3.png";
import earbuds4 from "../images/earbuds4.png";
import earbuds5 from "../images/earbuds5.png";
import earbuds6 from "../images/earbuds6.png";
import earbuds7 from "../images/earbuds7.png";
import headphone2 from "../images/headphone2.png";
import avatar1 from "../images/avatar1.png";
import avatar2 from "../images/avatar2.png";
import avatar3 from "../images/avatar3.png";
import Footer from "../components/Footer";
import addtocart from "../images/addtocart.png";
import { useAppContext } from "@/context";
function Home() {
  // Use state to track the current image source
  const [watchList, setwatchList] = useState([
    watch0,
    watch1,
    watch2,
    watch3,
    watch4,
    watch5,
    watch6,
    watch7,
  ]);
  const [earbudsList, setearbudsList] = useState([
    earbuds1,
    earbuds2,
    earbuds3,
    earbuds4,
    earbuds5,
    earbuds6,
    earbuds7,
    earbuds8,
  ]);
  const [currentImage, setCurrentImage] = useState(hero1);
  const [gradientStyle, setGradientStyle] = useState({
    backgroundImage:
      "linear-gradient(to right, rgba(67, 97, 238, 0.8), rgba(114, 9, 183, 0.8))",
  });
  const [prodName, setprodName] = useState("HEADPHONES");
  const { cartList, setCartList } = useAppContext();
  // Function to handle click event and change the image source
  const handleClick = () => {
    if (currentImage === hero1) {
      setGradientStyle({
        backgroundImage:
          "linear-gradient(to right, rgba(255, 255, 255, 1), rgba(0, 0, 0, 1))",
      });
      setCurrentImage(hero2);
      setprodName("MOBILES");
    } else {
      setGradientStyle({
        backgroundImage:
          "linear-gradient(to right, rgba(67, 97, 238, 0.8), rgba(114, 9, 183, 0.8))",
      });
      setCurrentImage(hero1);
      setprodName("HEADPHONES");
    }
  };
  const addToCart = (item) => {
    let mFlag = false;
    let temp_cartList = cartList;
    for (let i = 0; i < temp_cartList.length; i++) {
      if (temp_cartList[i].id == item.id) {
        temp_cartList[i].quantity += 1;
        mFlag = true;
        break;
      }
    }
    mFlag
      ? setCartList(temp_cartList)
      : ((item.quantity = 1), setCartList([...cartList, item]));
  };
  return (
    <div className="home">
      <div className="hero" style={gradientStyle}>
        <div className="hero__images">
          <img
            src={left.src}
            alt="HeadPhones"
            className="hero__images_1"
            onClick={handleClick}
          />
          <img
            src={currentImage.src}
            alt="HeadPhones"
            className="hero__images_2"
          />
          <img
            src={right.src}
            alt="HeadPhones"
            className="hero__images_3"
            onClick={handleClick}
          />
        </div>
        <h1 className="hero__product">{prodName}</h1>
        <button className="hero__btn1">Shop Now</button>
        <button className="hero__btn2">Categories</button>
      </div>
      <div className="features">
        <div className="features__shipping">
          <img src={shipping.src} className="features__img"></img>
          <div className="features__text">
            <h1>Free shipping</h1>
            <h3>On Purschase Over 500</h3>
          </div>
        </div>
        <div className="features__shipping">
          <img src={support.src} className="features__img"></img>
          <div className="features__text">
            <h1>Online Support</h1>
            <h3>24/7 Technical Support</h3>
          </div>
        </div>
        <div className="features__shipping">
          <img src={money.src} className="features__img"></img>
          <div className="features__text">
            <h1>Money Back</h1>
            <h3>30 Days Guarranty</h3>
          </div>
        </div>
        <div className="features__shipping">
          <img src={card.src} className="features__img"></img>
          <div className="features__text">
            <h1>Secure Payment</h1>
            <h3>All Cards Accepted</h3>
          </div>
        </div>
      </div>
      <div className="categories">
        <div className="categories__speakers">
          <div className="categories__warp">
            <h3>Blast.Past.Fast</h3>
            <h1>Speakers With Signature sound</h1>
            <button>Shop By Category</button>
          </div>

          <img src={speaker.src}></img>
        </div>

        <div className="categories__watches">
          <div className="categories__warp">
            <h3>Smart Watches</h3>
            <h1>Best Smart Watched for Men & Women</h1>
            <button>Shop By Category</button>
          </div>
          <img src={watch.src}></img>
        </div>

        <div className="categories__headphones">
          <div className="categories__warp">
            <h3>Wireless HeadPhones</h3>
            <h1>Own Every Match with Gaming HeadPhones</h1>
            <button>Shop By Category</button>
          </div>
          <img src={headphone.src}></img>
        </div>

        <div className="categories__tws">
          <div className="categories__warp">
            <h3>EarBuds.</h3>
            <h1>Top Rated & Best Earbuds</h1>
            <button>Shop By Category</button>
          </div>
          <img src={tws.src}></img>
        </div>
      </div>
      <div className="product">
        <h1 className="product__header">Top Rated Watches</h1>
        <q className="product__tagline">
          Empower Your Every Moment with Intuitive Connectivity: Unleash the
          Future on Your Wrist.
        </q>
        <div className="product__content">
          {watchesData.map((watch, index) => (
            <div className="product__content__single">
              <h3>{watch.title}</h3>
              <img src={watchList[index].src || watch.imageSrc}></img>
              <div className="product__content__single__row">
                <h3>{watch.price}</h3>
                <img
                  src={addtocart.src}
                  title="ADD TO CART"
                  onClick={(e) => {
                    addToCart({
                      id:  'w_'+index,
                      title: watch.title,
                      price: watch.price,
                      image: watchList[index].src,
                      quantity: 1,
                    });
                  }}
                ></img>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="banner">
        <img src={redheadphone.src} className="banner__image"></img>
        <div className="banner__left">
          <h1>FIRST SALE</h1>
        </div>
        <div className="banner__right">
          <h3 className="banner__right__header">
            Get a welcome 50% off your first order
          </h3>
          <button>Shop By category</button>
        </div>
      </div>
      <div className="product innerboxshadow">
        <h1 className="product__header">Top Rated Earbuds</h1>
        <q className="product__tagline">Feel the beauty of sound..</q>
        <div className="product__content">
          {watchesData.map((watch, index) => (
            <div className="product__content__single">
              <h3>{watch.title}</h3>
              <img src={earbudsList[index].src || watch.imageSrc}></img>
              <div className="product__content__single__row">
                <h3>{watch.price}</h3>
                <img src={addtocart.src} title="ADD TO CART"onClick={(e) => {
                    addToCart({
                      id: 'e_'+index,
                      title: watch.title,
                      price: watch.price,
                      image: earbudsList[index].src,
                      quantity: 1,
                    });
                  }}></img>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="reviews">
        <div className="reviews__cards">
          <img src={headphone2.src} className="reviews__cards__hero"></img>
          <q>
            The SwiftBeats X100 headphones redefine comfort and performance.
            Feather-light design and impeccable sound quality make these a
            must-have. Pure audio bliss in a compact package!
          </q>
          <img src={avatar1.src} className="reviews__cards__user"></img>
          <h3>John Doe</h3>
          <p>⭐️⭐️⭐️⭐️⭐️ </p>
        </div>
        <div className="reviews__cards">
          <img src={tws.src} className="reviews__cards__hero"></img>
          <q>
            The battery life is impressive too. I charged them once, and they
            lasted through a week of daily use. The Bluetooth connectivity is
            seamless, allowing you to dance, jog, or cook without being tethered
            to your device.
          </q>
          <img src={avatar3.src} className="reviews__cards__user"></img>
          <h3>John Doe</h3>
          <p>⭐️⭐️⭐️⭐️⭐️ </p>
        </div>
        <div className="reviews__cards">
          <img src={watch5.src} className="reviews__cards__hero"></img>
          <q>
            The SwiftBeats X100 headphones redefine comfort and performance.
            Feather-light design and impeccable sound quality make these a
            must-have. Pure audio bliss in a compact package!
          </q>
          <img src={avatar1.src} className="reviews__cards__user"></img>
          <h3>John Doe</h3>
          <p>⭐️⭐️⭐️⭐️⭐️ </p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;
