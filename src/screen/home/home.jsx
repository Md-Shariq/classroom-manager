import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../component/navBar/navbar'
import Sidebar from '../../component/sidebar/sidebar'

export default function Home() {
  return (
      <>
     
      <Navbar/>
      <div className='row gx-0'>
        <div className='col-md-3'>
        <Sidebar/>
        </div>
        <div className='col-md-9'>
        <Outlet/>
        </div>
      </div>
      </>
    
  )
}
