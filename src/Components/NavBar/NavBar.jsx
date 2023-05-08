import React, { useContext } from 'react'
import logo1 from '../../assets/image/logo1.jpg'
import { Link } from 'react-router-dom'
import style from './NavBar.css'
import { CartContext } from '../../Contexts/CartContext'
export default function NavBar() {
  const {itemAmount}=useContext(CartContext)
  return (
  <>
  <nav className="navbar navbar-expand-sm navbar-light bg-light nav ">
      <div className="container">
      <Link className="navbar-brand" to='/'><img className='w-25' src={logo1}></img></Link>
      <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
        aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
        
         
        </ul>
        <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
          <li  className="nav-item d-flex align-items-center position-relative">
         <Link to='/cart'className='text-decoration-non ' ><i className="fa-solid fa-cart-shopping fs-3 mx-4 text-black"></i></Link> 
         <div className='position-absolute top-0 start-50 translate-middle '>
         {itemAmount}
         </div>
          <i className="fa-solid fa-shield-heart fs-3 mx-4"></i>
           
           
          </li>
          
        
        </ul>
        
      </div>
    </div>
  </nav>
  </>
  )
}

