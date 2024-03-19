"use client";
import CartDetails from "../components/CartDetails";
import "../styles/main.scss";
import Navbar from "../components/Navbar";
export default function Main() {
  return (
    <main>
      <Navbar />
      <CartDetails />
    </main>
  );
}
