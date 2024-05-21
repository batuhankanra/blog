import React from 'react'
import Header from './header'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
   
      <div className=' max-w-[1500px] mx-auto  '>
        <Header />
        <Outlet />
      </div>
  )
}
