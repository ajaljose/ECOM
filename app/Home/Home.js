import React from 'react'
// import './home.scss';
import github from "../images/logo-white.png"; 
function Home() {
  return (
    <div>
      <div className="navbar">
        <img src={github.src} alt="GitHub Logo" className='navbar__logo' title='URBAN KING'/>
        <div className='navbar__menu'>
          <h3>Home</h3>
          <h3>Shop</h3>
          <h3>Blog</h3>
          <h3>Contact</h3>
        </div>
      </div>
    </div>
  );
}

export default Home;