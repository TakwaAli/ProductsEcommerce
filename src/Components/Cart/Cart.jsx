import React, { useContext } from 'react'
import { CartContext } from '../../Contexts/CartContext'
import style from './Cart.css'

export default function Cart() {
  const {cart,clearCart ,total,itemAmount,removeFromCart ,increaseAmount,decreaseAmount}=useContext(CartContext)
  return (
  <>
  
  <div className='bg-main-light p-4 my-4'>
    <h3>Shop Cart :</h3>
    <h6>Total Cart Price : ${parseFloat(total).toFixed(2)}</h6>

    <button onClick={()=>clearCart()} className='btn m-0 p-z'><i className='fa-regular fa-trash-can text-danger'></i> Claer Cart</button>
    {(cart)?.map((product)=><div key={product.id} className='row cart-shadow mt-5 p-3'>

    <div className='col-md-1'>
    <img src={product.image} className='w-100' alt="" />
    </div>
    <div className='col-md-8 d-flex justify-content-between'>
     <div>
     <h6>{product.title}</h6>
     <h6 className='text-main'>price: {parseFloat(product.price *product.amount).toFixed(2)}</h6>
     <button onClick={()=>removeFromCart(product.id)} className='btn m-0 p-z'><i className='fa-regular fa-trash-can text-danger'></i> Remove</button>
     </div>
    
    </div>
    <div className='col-md-1 d-flex justify-content-center '>
      <button onClick={()=>decreaseAmount(product.id)} className='btn border-main btn-sm fs-4 h-50'>-</button>
      <span className='mx-2 fs-4 '>{product.amount}</span>
      <button onClick={()=>increaseAmount(product.id)} className='btn border-main btn-sm fs-4 h-50'>+</button>
     </div>
</div>)}
  </div> 

  </>
  )
}
