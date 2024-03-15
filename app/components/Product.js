import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import axios from "axios";
function Product() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    try {
      let url = "https://fakestoreapi.com/products/" + 1;
      axios.get(url).then((response) => {
        console.log(response);
        setProduct(response.data);
      });
    } catch (error) {
      console.error(error);
    }
  });
  return (
    <>
      <div className="product">
        <div className="product__category">{product.category}</div>
        <div className="product__hero">
          <div className="product__hero__left">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="product__hero__right">
            <h1 className="">{product.title}</h1>
            <h1>{product.price}</h1>
            <p>{product.description}</p>
            <div className="product__hero__right__addtocart">
              <div className="btn__increment" id="itemCount">
                <button className="btn__increment__min">-</button>
                <input
                  type="number"
                  className="btn__increment__mid"
                  placeholder="0"
                  disabled
                ></input>
                <button className="btn__increment__add">+</button>
              </div>
              <button className="primary__btn1" id="btnAddCart">
                ADD to cart
              </button>
            </div>
            <button className="primary__btn1" id="btnBuyNow">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Product;
