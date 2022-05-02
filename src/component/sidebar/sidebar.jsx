import React from 'react'
import { NavLink } from 'react-router-dom'
import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className='sideNav-wrapper'>
            <div className='ps-3 my-2'>
                <NavLink  className={({ isActive }) => (isActive ? 'active-tab' : 'inactive-tab')} to="/project"  >
                <i class="fa-solid fa-table-columns pe-2"></i>Project
                </NavLink>
            </div>
            <div className='ps-3 py-2' >
                <NavLink  className={({ isActive }) => (isActive ? 'active-tab' : 'inactive-tab')} to="/classrooms" >
                    <i class="fa-solid fa-toolbox pe-2"></i>Classrooms
                </NavLink>
            </div>
            <div className='ps-3 py-2'>
                <NavLink  className={({ isActive }) => (isActive ? 'active-tab' : 'inactive-tab')} to="/permissions" >
                    <i class="fa-solid fa-shield-halved pe-2"></i>Permissions
                </NavLink>
            </div>

        </div>
    )
}
