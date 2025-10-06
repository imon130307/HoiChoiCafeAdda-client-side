import React from 'react'
import { Outlet } from 'react-router'
import Navber from '../../pages/shared/Navber/Navber'
import Footer from '../../pages/shared/Footer/Footer'

const MainLayout = () => {
  return (
    <div className="">
      <Navber/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default MainLayout
