import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '@/ComponentMain.jsx/Header'
import Footer from '@/ComponentMain.jsx/Footer'

function Layout() {
  return (
  <>
  <Header/>
  <Outlet/>
  <Footer/>
  
  </>
  )
}

export default Layout