import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Details() {
  const [productDetails, setproductDetails] = useState([]);
  const param = useParams()

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
   <div className="row align-items-center">
      <div className='col-md-4 '>
        <img className='w-75' src={productDetails?.image} alt="" />

       
      </div>
      <div className='col-md-8 mt-5'>
        <h2 className='mt-2'>{productDetails?.title}</h2>
        <h2 className='mt-2'>{productDetails?.category}</h2>
        <p className='mt-2 h4'>{productDetails?.description}</p>
        <h4 className='mt-2'>price : {productDetails?.price}EGP</h4>
        
        <button className='fs-5 btn  '>+ Add To Cart</button>
      </div>
    </div>

  
  </>
  )
}