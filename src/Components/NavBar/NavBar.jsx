import React from 'react'
import logo1 from '../../assets/image/logo1.jpg'
import { Link } from 'react-router-dom'
export default function NavBar() {
  return (
  <>
  <nav className="navbar navbar-expand-sm navbar-light bg-light ">
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
          <li  className="nav-item d-flex align-items-center">
          <i className="fa-solid fa-cart-shopping fs-3 mx-4"></i>
          <i className="fa-solid fa-shield-heart fs-3 mx-4"></i>
           
           
          </li>
          
        
        </ul>
        
      </div>
    </div>
  </nav>
  </>
  )
}

