import React, { useState } from "react";
import github from "../images/logo-white.png";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const handleClick = () => {
    if (inputValue.trim() === "") {
      navigate('search');
    } else {
      navigate('search');
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
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
          <div className="navbar__menu__search">
            <input placeholder="Search..." type="text" onChange={handleInputChange}/>
              <button type="submit" className="icon" onClick={handleClick}>
                
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
              </button>
          </div>
          <h3>Home</h3>
          <h3  onClick={handleClick}>Shop</h3>
          <h3>cart</h3>
          <h3>Contact</h3>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
