import React from 'react'
import NavBar from '../NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

export default function Layout() {
  return (
  <>
  <NavBar></NavBar>
  
  <div className="container-fluid ">
  <Outlet></Outlet>
  </div>
  
  </>
  )
}