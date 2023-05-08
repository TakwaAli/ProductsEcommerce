import React, { useContext } from 'react'
import { CartContext } from '../../Contexts/CartContext'


export default function Cart() {
  const {cart,clearCart ,total,itemAmount,removeFromCart ,increaseAmount,decreaseAmount}=useContext(CartContext)
  return (
  <>
  
  <div className='bg-main-light p-4 my-4'>
    <h3>Shop Cart :</h3>
    {/* <h6>Total Cart Price :{CartDetails.totalCartPrice}</h6> */}
    {(cart)?.map((product)=><div key={product.id} className='row'>

    <div className='col-md-1'>
    <img src={product.image} className='w-100' alt="" />
    </div>
    <div className='col-md-11 d-flex justify-content-between'>
     <div>
     <h6>{product.title}</h6>
     <h6 className='text-main'>price: {product.price}</h6>
     <button onClick={()=>removeFromCart(product.id)} className='btn m-0 p-z'><i className='fa-regular fa-trash-can text-danger'></i> Remove</button>
     </div>
     <div>
      <button onClick={()=>decreaseAmount(product.id)} className='btn border-main btn-sm'>-</button>
      <span className='mx-2'>{product.amount}</span>
      <button onClick={()=>increaseAmount(product.id)} className='btn border-main btn-sm'>+</button>
     </div>
    </div>

</div>)}
  </div> 

  </>
  )
}
