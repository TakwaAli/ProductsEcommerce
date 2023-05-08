import React from 'react'
import style from './Footer.css'
export default function Footer() {
  return (
  <>
 <div className='container-fluid bg-dark p-3 footer '>
  <div className="row justify-content-center mx-auto ">
   <div className='col-2'>
    <h5 className='text-white p-2  mx-5'> Contact us </h5>
    <div className=' mx-5'>
    <i className='fab mx-2 fa-facebook text-white fs-3'></i>
           <i className='fab mx-2 fa-linkedin text-white fs-3'></i>
           <i className='fab mx-2 fa-twitter text-white fs-3'></i>
    </div>
         
          
   </div>
  </div>
  <p className='text-white text-center mt-4 p-2 '> Copyright &copy; online shop 2023</p>
 </div>
  </>
  )
}