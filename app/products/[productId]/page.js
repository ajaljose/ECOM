export async function generateStaticParams() {
  const productIds = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"]; // Range 1-20
  return productIds.map((productId) => ({ productId }));
}
import React from 'react';
import Product from '@/app/components/Product';
import Navbar from "../../components/Navbar";
import '../../styles/main.scss';


function ProductDetails(props) {
  return (
    <>
    <Navbar/>
    <Product productId={props.params.productId}/>
    </>
  )
}

export default ProductDetails