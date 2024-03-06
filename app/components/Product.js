import React,{useEffect,useState} from "react";
import axios from "axios";
function Product() {
  const [product, setProduct] = useState([]);
  useEffect(()=>{
    try {
      let url="https://fakestoreapi.com/products/"+1;
      axios.get(url).then((response) => {
        console.log(response);
        setProduct(response.data);
      });
    } catch (error) {
      console.error(error);
    }
  })
  return (
    <>
      <div id="product">
        <div className="product__hero">
          <div className="product__hero__left"></div>
          <div className="product__hero__right"></div>
        </div>        
      </div>
    </>
  );
}

export default Product;
