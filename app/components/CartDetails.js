import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import axios from "axios";
import { useAppContext } from "@/context";
import gpay from "../images/gpay.png";
import paypal from "../images/paypal.png";
import stripe from "../images/stripe.png";
import amazonpay from "../images/amazon-pay.png";
import close from "../images/close.png";
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
                    <img
                src={close.src}
                alt="Cart Logo"
                className="close__icon"
                title="CONTACT"
              />
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
            <button className="secondary__btn">Check Out</button>
            <hr></hr>
            <h1>We Accept</h1>
            <div className="cart__content__checkout__row">
              <img
                src={paypal.src}
                alt="Cart Logo"
                className="pay__icon"
                title="CONTACT"
              />
              <img
                src={stripe.src}
                alt="Cart Logo"
                className="pay__icon"
                title="CONTACT"
              />
              <img
                src={gpay.src}
                alt="Cart Logo"
                className="pay__icon"
                title="CONTACT"
              />
              <img
                src={amazonpay.src}
                alt="Cart Logo"
                className="pay__icon"
                title="CONTACT"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CartDetails;
