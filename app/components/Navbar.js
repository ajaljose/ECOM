"use client"
import React, { useState } from "react";
import github from "../images/logo-white.png";
import { useRouter } from "next/navigation";
import bag from "../images/bag.png";
import home from "../images/home.png";
import contact from "../images/contact.png";
import { useAppContext } from "@/context";
function Navbar() {
  const [inputValue, setInputValue] = useState("");
  const { cartList } = useAppContext();
  const router=useRouter();
  const handleClick = () => {
    if (inputValue.trim() === "") {
      router.replace('/products');
    } else {
      router.push('search');
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
          {/* <h3  onClick={()=>{router.push('/')}}>Home</h3> */}
          <img
          src={home.src}
          alt="Cart Logo"
          className="navbar__menuicon"
          title="HOME"
          onClick={()=>{router.push('/')}}
        />
         
          {/* <h3  onClick={()=>{router.replace('/cart')}}>cart</h3> */}
         <div>
         <div className="navbar__menu__cart" cart-item={cartList.length}>
          <img
          src={bag.src}
          alt="Cart Logo"
          className="navbar__menuicon"
          title="CART"
          onClick={()=>{router.replace('/cart')}}
          
        />
          </div> 
          </div>          
         <h3  onClick={()=>{router.replace('/products')}}>Shop</h3>
         <img
          src={contact.src}
          alt="Cart Logo"
          className="navbar__menuicon"
          title="CONTACT"
        />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
