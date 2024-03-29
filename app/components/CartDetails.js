import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAppContext } from "@/context";
function CartDetails() {
  const [subTotal, setsubTotal] = useState([]);
  const { state, cartList } = useAppContext();
  useEffect(() => {
    console.log(state.hello, cartList);
    try {
      let Total = 0;
      for (let i = 0; i < cartList.length; i++) {
        Total += cartList[i].price * cartList[i].quantity;
      }
      setsubTotal(Total.toFixed(2));
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (
    <>
      <div className="cart">
        <h1 className="cart__header">Cart</h1>
        <hr></hr>
        <div className="cart__content">
          <div className="cart__content__list">
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
                {cartList.map((item, index) => (
                  <tr>
                    <td>
                      <div className="cart__content__list__productDetails">
                        <img src={item.image}></img>
                        <h3>{item.title}</h3>
                      </div>
                    </td>
                    <td>{item.quantity}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity * item.price}</td>
                    <td>
                      <button>X</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="cart__content__checkout">
            <h1>Total</h1>
            <hr></hr>
            <div className="cart__content__checkout__row">
              <h3>Sub-Total</h3>
              <h3>{subTotal}</h3>
            </div>
            <div className="cart__content__checkout__row">
              <h3>Tax</h3>
              <h3>{(subTotal * 0.18).toFixed(2)}</h3>
            </div>
            <button>Check Out</button>
            <hr></hr>
            <h1>We Accept</h1>
            <div className="cart__content__checkout__row">
              <h3>PayPal</h3>
              <h3>Strip</h3>
              <h3>GPay</h3>
              <h3>PhonePe</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartDetails;
