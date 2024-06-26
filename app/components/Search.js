import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./Footer";
import add_cart from "../images/add_cart.png";
import Loader from "./Loader";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/context";
function Search() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [slctdCtrgy, setslctdCtrgy] = useState('');
  const [maxprice, setMaxprice] = useState(0);
  const [htmlContent, setHtmlContent] = useState("0");
  const { cartList,setCartList } = useAppContext();
  const router=useRouter();
  useEffect(() => {
    try {
      axios.get("https://fakestoreapi.com/products").then((response) => {
        console.log(response);
        setProducts(response.data);
      });
      axios.get("https://fakestoreapi.com/products/categories").then((response) => {
        console.log(response);
        setCategories(response.data);
      });
    } catch (error) {
      console.error(error);
    }
  }, []);
  const rangeSlide = async (val) => {
     setHtmlContent(val);
     await setMaxprice(Number(val));
     filterData(Number(val));
  };
  const selectItem = async(item) => {
    router.push('products/'+item);
 };
 const handleAddtoCart=(event,item)=>{
  event.stopPropagation();
// console.log(item);
let mFlag=false;
let temp_cartList=cartList;
  for(let i=0;i<temp_cartList.length;i++){
    if(temp_cartList[i].id==item.id){
      temp_cartList[i].quantity+=1;
      mFlag=true;
      break;
    }
  }
  mFlag?setCartList(temp_cartList):(item.quantity=1,setCartList([...cartList,item]));
 }
 const shopByCat=(catgry)=>{
  try {
    axios.get("https://fakestoreapi.com/products/category/"+catgry).then((response) => {
      setslctdCtrgy(catgry);
      if(maxprice>0){
        let filtered=[];
        for(let i=0;i<response.data.length;i++){
          if(response.data[i].price<=maxprice){
            filtered.push(response.data[i]);
          }
        }
        setProducts(filtered);
        return;
      }
        
        setProducts(response.data);
      });
  } catch (error) {
    
  }
 }
  const filterData=(value)=>{
    try {
      let url=slctdCtrgy!=''?"https://fakestoreapi.com/products/category/"+slctdCtrgy:"https://fakestoreapi.com/products"
      axios.get(url).then((response) => {
        let filtered=[];
        for(let i=0;i<response.data.length;i++){
          if(response.data[i].price<=value){
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
      <>{products.length==0?<Loader/>:''}
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
            <h3>Shop By Category</h3>
           
            <div className="radio-input">
            {categories.map((item,index)=>(
              <div className="radio-group"><input type="radio" id={item} className="input" name="category" onClick={(e)=>shopByCat(item)} value={item}></input><label htmlFor={item}>{item}</label></div>
            ))}
            </div>
          </div>
          <br></br>
          <hr></hr>

          <button className="secondary__btn filter-btn" onClick={(e)=>window.location.reload()}>RESET</button>
        </div>
        <div className="search__content">
          {products.length!==0? products.map((watch, index) => (
            <div className="search__content__single" data-itemId={watch.id} onClick={(e) => selectItem(watch.id)}>
              <img src={watch.image}></img>
              <div className="search__details">
              <h3 title={watch.title}>{watch.title.slice(0, 34)}</h3>              
              <h2>⭐️{watch.rating.rate}</h2>
              <div className="search__details__footer">
              <h1>$ {watch.price}</h1>
              <button title="ADD TO CART" onClick={(e)=>handleAddtoCart(e,watch)}><span> <img src={add_cart.src}></img></span></button>
              </div>
              
              </div>              
            </div>
          )):<div className="product__skeleton">
          {[1, 2, 3,4,5,6,7,8].map((index) => (
            <div key={index} className="product__skeleton__single">
              <div className="skeleton__image"></div>
              {[1, 2].map((headerIndex) => (
                <div key={headerIndex} className="skeleton__header"></div>
              ))}
            </div>
          ))}
        </div>
        }
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Search;
// [
//     {
//         "id": 1,
//         "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//         "price": 109.95,
//         "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//         "category": "men's clothing",
//         "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//         "rating": {
//             "rate": 3.9,
//             "count": 120
//         }
//     },
// ]