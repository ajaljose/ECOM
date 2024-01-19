import React, { useState  } from 'react';
import github from "../images/logo-white.png";
import hero1 from "../images/hero1.png";
import hero2 from "../images/iphone.png";
import left from "../images/left.png";
import right from "../images/right.png";

function Home() {
  // Use state to track the current image source

  const [currentImage, setCurrentImage] = useState(hero1);
  const [gradientStyle, setGradientStyle] = useState({
    backgroundImage: 'linear-gradient(to right, rgba(67, 97, 238, 0.8), rgba(114, 9, 183, 0.8))',
  });
  // Function to handle click event and change the image source
  const handleClick = () => {
    // Change the image source based on the current image
    currentImage === hero1? setGradientStyle({ backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 1), rgba(0, 0, 0, 1))',}): setGradientStyle({
      backgroundImage: 'linear-gradient(to right, rgba(67, 97, 238, 0.8), rgba(114, 9, 183, 0.8))',
    });
    const newImage = currentImage === hero1 ? hero2 : hero1;
    setCurrentImage(newImage);
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
          <img src={left.src} alt="HeadPhones" className='hero__images_1' />
          <img src={currentImage.src} alt="HeadPhones" className='hero__images_2' />
          <img src={right.src} alt="HeadPhones" className='hero__images_3'  onClick={handleClick}/>
        </div>
        <h1 className='hero__product'>HEADPHONES</h1>
        <button className='hero__btn1'>Shop Now</button>
        <button className='hero__btn2'>Categories</button>
      </div>
    </div>
  );
}

export default Home;