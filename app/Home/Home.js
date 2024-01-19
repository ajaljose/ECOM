import React from 'react'
// import './home.scss';
import github from "../images/logo-white.png";
import hero1 from "../images/hero1.png";
import left from "../images/left.png"; 
import right from "../images/right.png"; 
function Home() {
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
      <div className='hero'>
       <div className='hero__images'>        
            <img src={left.src} alt="HeadPhones" className='hero__images_1' />
            <img src={hero1.src} alt="HeadPhones" className='hero__images_2' />
            <img src={right.src} alt="HeadPhones" className='hero__images_3' />
       </div>
        <h1 className='hero__product'>HEADPHONES</h1>
        <button className='hero__btn1'>Shop Now</button>
        <button className='hero__btn2'>Categories</button>
      </div>
    </div>
  );
}

export default Home;