import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import style from './Details.css'
import { CartContext } from '../../Contexts/CartContext';
export default function Details() {
  const [productDetails, setproductDetails] = useState([]);
  const param = useParams()
  const {addToCart}=useContext(CartContext)
//console.log(param);
  async function GetProductDetails() {
    try {
      let {data}= await axios.get(`https://fakestoreapi.com/products/${param.id}`)
     //console.log(data);
      setproductDetails(data)
    } 
    catch (error) {
      console.log(error);  
    }
  
  }
  useEffect(()=>{
      GetProductDetails()
  },[])
  return (
  <>
   <div className="row align-items-center p-5 m-5">
      <div className='col-md-4 '>
        <img className='w-75' src={productDetails?.image} alt="" />

       
      </div>
      <div className='col-md-8 mt-5'>
        <h2 className='mt-2 title-color'>{productDetails?.title}</h2>
        <h2 className='mt-2'>{productDetails?.category}</h2>
        <p className='mt-2 h4'>{productDetails?.description}</p>
        <h4 className='mt-2'>price : {productDetails?.price}EGP</h4>
        
        <button onClick={()=>addToCart(productDetails,productDetails.id)} className='fs-5 btn mx-4 '>+<i className="fa-solid fa-cart-shopping fs-2 title-color "></i></button>
       
      </div>
    </div>

  
  </>
  )
}