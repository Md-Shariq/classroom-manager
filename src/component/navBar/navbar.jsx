import React from 'react'
import logo from '../../assets/logo.png'
import "./navbar.css"

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    
                    <div className='d-flex '>
                        <div className='logo-img-wrapper'>
                             <img src={logo} alt="" className='logo-img' />
                        </div>
                         <div>
                               <p className='m-0 logo-name'>Classroom <br/> Manager</p>
                         </div>
                    </div>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <div className='d-flex align-items-center'>
                                    <div>
                                       <div className='profile-box'></div>
                                    </div>
                                    <div>
                                        <p className='m-0 ps-2 pe-3 fs-16 fw-500'>Kishore</p>
                                    </div>
                                    <div>
                                       <i class="fa-regular fa-bell text-dark fs-18"></i>
                                    </div>
                                    <div>
                                        <i class="fa-regular fa-circle-question ps-3 pe-4 fs-18"></i>
                                    </div>
                                </div>

                               
                               
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}
