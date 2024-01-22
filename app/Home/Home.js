import React, { useState  } from 'react';
import github from "../images/logo-white.png";
import hero1 from "../images/hero1.png";
import hero2 from "../images/iphone.png";
import left from "../images/left.png";
import right from "../images/right.png";
import shipping from "../images/shipping.png";
import money from "../images/money.png";
import support from "../images/support.png";
import card from "../images/card.png";
import tws from "../images/tws.png";
// import card from "../images/card.png";
// import card from "../images/card.png";
// import card from "../images/card.png";
function Home() {
  // Use state to track the current image source

  const [currentImage, setCurrentImage] = useState(hero1);
  const [gradientStyle, setGradientStyle] = useState({
    backgroundImage: 'linear-gradient(to right, rgba(67, 97, 238, 0.8), rgba(114, 9, 183, 0.8))',
  });
  const [prodName,setprodName]=useState('HEADPHONES');
  // Function to handle click event and change the image source
  const handleClick = () => {
  
    if(currentImage === hero1){
      setGradientStyle({ backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 1), rgba(0, 0, 0, 1))',});
      setCurrentImage(hero2);
      setprodName('MOBILES');
    }else{
      setGradientStyle({
        backgroundImage: 'linear-gradient(to right, rgba(67, 97, 238, 0.8), rgba(114, 9, 183, 0.8))',
      });
      setCurrentImage(hero1);
      setprodName('HEADPHONES');
    }
    
  };
  return (
    <div className='home'>
      <div className="navbar">
        <img src={github.src} alt="GitHub Logo" className='navbar__logo' title='URBAN KING'/>
        <div className='navbar__menu'>
          <h3>Home</h3>
          <h3>Shop</h3>
          <h3>Blog</h3>
          <h3>Contact</h3>
        </div>
      </div>
      <div className='hero' style={gradientStyle}>
        <div className='hero__images'>
          <img src={left.src} alt="HeadPhones" className='hero__images_1' onClick={handleClick}/>
          <img src={currentImage.src} alt="HeadPhones" className='hero__images_2' />
          <img src={right.src} alt="HeadPhones" className='hero__images_3'  onClick={handleClick}/>
        </div>
        <h1 className='hero__product'>{prodName}</h1>
        <button className='hero__btn1'>Shop Now</button>
        <button className='hero__btn2'>Categories</button>
      </div>
      <div className='features'>
        <div className='features__shipping'>
            <img src={shipping.src} className='features__img'></img>
            <div className='features__text'>
             <h1>Free shipping</h1>
             <h3>On Purschase Over 500</h3>
            </div>
        </div>
        <div className='features__shipping'>
            <img src={support.src} className='features__img'></img>
            <div className='features__text'>
             <h1>Online Support</h1>
             <h3>24/7 Technical Support</h3>
            </div>
        </div>
        <div className='features__shipping'>
            <img src={money.src} className='features__img'></img>
            <div className='features__text'>
             <h1>Money Back</h1>
             <h3>30 Days Guarranty</h3>
            </div>
        </div>
        <div className='features__shipping'>
            <img src={card.src} className='features__img'></img>
            <div className='features__text'>
             <h1>Secure Payment</h1>
             <h3>All Cards Accepted</h3>
            </div>
        </div>
      </div>
      <div className='categories'>
        <div className='categories__speakers'>
            <div className='categories__warp'>
                <h3>Blast.Past.Fast</h3>
                <h1>Speakers With Signature sound</h1>
                <button>Shop By Category</button>
            </div>            
          
            <img  src={card.src}></img>
        </div>
        
        <div className='categories__watches'>
            <div className='categories__warp'>
                <h3>Smart Watches</h3>
                <h1>Best Smart Watched for Men & Women</h1>
                <button>Shop By Category</button>
            </div>
            <img  src={card.src}></img>        
        </div>

        <div className='categories__headphones'>
            <div className='categories__warp'>
                <h3>Wireless HeadPhones</h3>
                <h1>Own Every Match with Gaming HeadPhones</h1>
                <button>Shop By Category</button>
            </div>
            <img  src={card.src}></img>
        </div>

        <div className='categories__tws'>
            <div className='categories__warp'>
                <h3>EarBuds.</h3>
                <h1>Top Rated & Best Earbuds</h1>
                <button>Shop By Category</button>
            </div>
            <img  src={tws.src}></img>          
        </div>
      </div>
    </div>
  );
}

export default Home;