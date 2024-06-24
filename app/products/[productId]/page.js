"use client"
import React from 'react'
import Product from '@/app/components/Product';
import Navbar from "../../components/Navbar";
import '../../styles/main.scss';
export async function generateStaticParams() {
  const productIds = Array.from({ length: 20 }, (_, i) => i + 1); // Range 1-20
  return productIds.map((productId) => ({ productId }));
}

function ProductDetails(props) {
  return (
    <>
    <Navbar/>
    <Product productId={props.params.productId}/>
    </>
  )
}

export default ProductDetails