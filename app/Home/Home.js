import React from 'react'
import './home.scss';
import github from "../images/logo-white.png"; 
function Home() {
  console.log("asa",github);
  return (
    <div>
      <div className="navbar">
        <img src={github.src} alt="GitHub Logo" className='navbar__logo'/>
        <h3 className="navbar__name">E-COMMERCE</h3>
        <h3 className="navbar__menu">MENU</h3>
      </div>
    </div>
  );
}

export default Home;