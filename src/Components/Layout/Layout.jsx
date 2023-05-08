import React from 'react'
import NavBar from '../NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

export default function Layout() {
  return (
  <>
  <NavBar></NavBar>
  <div className="container">
  <Outlet></Outlet>
  </div>
  <Footer></Footer>
  </>
  )
}