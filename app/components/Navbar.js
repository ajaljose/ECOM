import React from 'react';
import github from "../images/logo-white.png";
function Navbar() {
  return (
    <div>     
     <div className="navbar">
        <img
          src={github.src}
          alt="GitHub Logo"
          className="navbar__logo"
          title="URBAN KING"
        />

        <div className="navbar__menu">
          <div className="container">
            <input
              type="text"
              name="text"
              className="input"
              required
              placeholder="Type to search..."
            />
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ionicon"
                viewBox="0 0 512 512"
              >
                <title>Search</title>
                <path
                  d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                  fill="none"
                  stroke="currentColor"
                  strokeMiterlimit="10"
                  strokeWidth="32"
                ></path>
                <path
                  fill="#000000"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="32"
                  d="M338.29 338.29L448 448"
                ></path>
              </svg>
            </div>
          </div>
          <h3>Home</h3>
          <h3>Shop</h3>
          <h3>Blog</h3>
          <h3>Contact</h3>
        </div>
      </div>
          </div>
  )
}

export default Navbar