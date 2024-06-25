"use client"
import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import axios from "axios";
import Loader from "./Loader";
import { useAppContext } from "@/context";
import { useRouter } from "next/navigation";
function Product(props) {
  const [product, setProduct] = useState({});
  const [Qnty, setQnty] = useState(1);
  const { cartList,setCartList } = useAppContext();
  const router=useRouter();
  useEffect(() => {
    try {
      let url = "https://fakestoreapi.com/products/" + props.productId;
      axios.get(url).then((response) => {
        console.log(response);
        setProduct(response.data);
      });
    } catch (error) {
      console.error(error);
    }
  },[]);
  const handleAddtoCart=(item)=>{
  // console.log(item);
  let mFlag=false;
  let temp_cartList=cartList;
    for(let i=0;i<temp_cartList.length;i++){
      if(temp_cartList[i].id==item.id){
        temp_cartList[i].quantity=item.quantity;
        mFlag=true;
        break;
      }
    }
    mFlag?setCartList(temp_cartList):(item.quantity=1,setCartList([...cartList,item]));
   }
   const decreaseQnty=()=>{
      if(Qnty-1==0) alert('Minimum 1 quantity is required');
      else{setQnty(Qnty-1)}
   }
   const buyNow=async (item)=>{
    await handleAddtoCart(item);
    router.replace('/cart');
   }
  return (
    <>{Object.keys(product).length==0?<Loader/>:''}
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
                <button className="btn__increment__min" onClick={(e)=>decreaseQnty()}>-</button>
                <input
                  type="number"
                  className="btn__increment__mid"
                  placeholder={Qnty}
                  disabled
                ></input>
                <button className="btn__increment__add" onClick={(e)=>setQnty(Qnty+1)}>+</button>
              </div>
              <button className="primary__btn1" id="btnAddCart" onClick={(e)=>handleAddtoCart({
                      id: product.id,
                      title: product.title,
                      price: product.price,
                      image: product.image,
                      quantity: Qnty,
                    })}>
                ADD to cart
              </button>
            </div>
            <button className="primary__btn1" id="btnBuyNow" onClick={(e)=>buyNow({
                      id: product.id,
                      title: product.title,
                      price: product.price,
                      image: product.image,
                      quantity: Qnty,
                    })}>
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
