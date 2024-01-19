import React from 'react'
// import './home.scss';
import github from "../images/logo-white.png";
import hero1 from "../images/hero1.png"; 
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
      <img src={hero1.src} alt="GitHub Logo" className='hero__image' />
       <h1 className='hero__product'>HEADPHONES</h1>
       <button className='hero__btn1'>BTN1</button>
       <button className='hero__btn2'>BTN2</button>
      </div>
    </div>
  );
}

export default Home;