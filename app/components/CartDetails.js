import React,{useEffect,useState} from "react";
import axios from "axios";
function CartDetails() {
  const [cartItems,setcartItems]=useState([]);
  useEffect(() => {
    try {
      let url = "https://fakestoreapi.com/products?limit=5";
      axios.get(url).then((response) => {
        console.log(response);
        setcartItems(response.data);
      });
    } catch (error) {
      console.error(error);
    }
  },[]);
  return (
    <>
      <div className="cart">
        <h1 className="cart__header">Cart</h1>
        <hr></hr>
        <div className="cart__list">
          <table>
            <thead>
              <tr>
                <th>Product Details</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
          {  cartItems.map((item, index) => (<tr>
                <td><div className="cart__productDetails">
                <img src={item.image}></img>
                <h3>{item.title}</h3>
                  </div></td>
                <td>1</td>
                <td>{item.price}</td>
                <td>1</td>
                <td>X</td>
              </tr>))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default CartDetails;
