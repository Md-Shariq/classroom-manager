import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import "./permissions.css"
export default function Permissions() {
  return (
    <>
    <div className='d-flex justify-content-between align-items-center ms-3'>
    <div className='d-flex'>
        <div>
          <NavLink className={({ isActive }) => (isActive ? 'active-tab-permission' : 'inactive-tab-permission')} to="/permissions/permissionTab"><i class="fa-solid fa-rss pe-2 fs-20"></i>Permissions</NavLink>

        </div>
        <div className='line'></div>
        <div>
          <NavLink  className={({ isActive }) => (isActive ? 'active-tab-permission' : 'inactive-tab-permission')} to="/permissions/approvalMatrixTab"><i class="fa-solid fa-border-all pe-2 fs-20"></i>Approval Matrix</NavLink>
        </div>
      </div>
    
    <div>
        <p className='fs-14 m-0 me-5'> <i class="fa-solid fa-rotate"></i>  Last synced 15 mins ago</p>
    </div>

    </div>
      
      <hr className='m-0' />

      <div >
        <Outlet />
      </div>

    </>

  )
}
