import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./Footer";
function Search() {
  const [products, setProducts] = useState([]);
  const [maxprice, setMaxprice] = useState(0);
  const [htmlContent, setHtmlContent] = useState("0");

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
  const rangeSlide = (val) => {
     setHtmlContent(val);
     setMaxprice(val);
     filterData();
  };
  const filterData=()=>{
    try {
      axios.get("https://fakestoreapi.com/products").then((response) => {
        let filtered=[];
        for(let i=0;i<response.data.length;i++){
          if(response.data[i].price<=maxprice){
            filtered.push(response.data[i]);
          }
        }
        setProducts(filtered);
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="search">
        <div className="search__filter">
          <div className="search__filter__content">
            <h3>
              MAX PRICE :{" "}
              <span
                id="rangeValue"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              ></span>
            </h3>
            <input
              id="price"
              className="range"
              type="range"
              name=""
              min="0"
              max="100"
              value={htmlContent}
              onChange={(e) => rangeSlide(e.target.value)}
            />
          </div>
          <hr></hr>
          <div className="search__filter__content">
            <h3>Customer Ratings</h3>
            <div>
              <input type="checkbox" id="fourStar" value="4" ></input>
              <label htmlFor="fourStar">4 Stars</label>
            </div>
            <div>
              <input type="checkbox" id="threeStar" value="3"></input>
              <label htmlFor="threeStar">3 Stars</label>
            </div>
            <div>
              <input type="checkbox" id="twoStar" value="2"></input>
              <label htmlFor="twoStar">2 Stars</label>
            </div>
            <div>
              <input type="checkbox" id="oneStar" value="1"></input>
              <label htmlFor="oneStar">1 Stars</label>
            </div>
          </div>
          <hr></hr>

          <button>Apply</button>
        </div>
        <div className="search__content">
          {products.map((watch, index) => (
            <div className="search__content__single">
              <img src={watch.image}></img>
              <div className="search__details">
              <h3 title={watch.title}>{watch.title.slice(0, 34)}</h3>              
              <h2>⭐️{watch.rating.rate}</h2>
              <div className="search__details__footer">
              <h1>$ {watch.price}</h1>
              <button><span>ADD TO CART</span></button>
              </div>
              
              </div>              
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Search;
