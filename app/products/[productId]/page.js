"use client"
import React from 'react'
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