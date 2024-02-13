import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./Footer";
function Search() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    try {
      axios.get("https://fakestoreapi.com/products").then((response) => {
        console.log(response);
        setProducts(response.data);
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <>
     <div className="search">
      <div className="search__filter">
        {/* <div className="search__filter__content"> */}
        <h3>MAX PRICE</h3>
        <input id='price'type='range' min="0" max="100" ></input>
        {/* </div> */}
        <hr></hr>
        <div className="search__filter__content">
        <h3>Customer Ratings</h3>
        <input type='checkbox' id='fourStar'></input>
        <label htmlFor='fourStar'>4 Stars</label>
        <input type='checkbox' id='threeStar'></input>
        <label htmlFor='threeStar'>3 Stars</label>
        <input type='checkbox' id='twoStar'></input>
        <label htmlFor='twoStar'>2 Stars</label>
        <input type='checkbox' id='oneStar'></input>
        <label htmlFor='oneStar'>1 Stars</label>
        </div>
        <hr></hr>
        
        <button>Apply</button>
      </div>
      <div className="search__content">
        {products.map((watch, index) => (
          <div className="search__content__single">
            <img src={watch.image}></img>
            <h3>{watch.title}</h3>
            <h1>{watch.price}</h1>
          </div>
        ))}
      </div>      
    </div>
    <Footer/>
    </>
   
  );
}

export default Search;
