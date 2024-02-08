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
