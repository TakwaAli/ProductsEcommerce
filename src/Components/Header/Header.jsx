import React from 'react'
import header from '../../assets/image/header.jpg'
export default function Header() {
  return (
  <>
<div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={header} className="d-block w-100" alt="..."/>
    </div>
  </div>
  </div>
  </>
  )
}