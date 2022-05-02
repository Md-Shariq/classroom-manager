import React from 'react'
import editIcon from '../../assets/edit.png'
import leftarrow from '../../assets/leftarrow.png'
import plusIcon from '../../assets/plus.png'
import { Link, useNavigate } from 'react-router-dom'
import "./departmentDetail.css"

export default function DepartmentDetail() {

  const navigate = useNavigate();
  function goback() {
    navigate(-1);
  }
  return (
    <>
      <div className='px-5'>
        <div className='d-flex my-4 align-items-center'>
          <div>
            <p className='m-0 teacher ' onClick={goback}><img src={leftarrow} role="button"alt="" width="14px" className='me-3 ' /> Teacher</p>
          </div>
          <div className='mx-4'>
            <img src={editIcon} role="button"alt="" width="18px" />
          </div>
        </div>


        <div>
          <div className='d-flex ps-3'>
            <div>
              <p className='m-0 fs-16 fw-500 access-control-btn'>Access Control</p>
            </div>
            <div className='line mx-3'></div>
            <div>
              <p className='m-0 fs-16 fw-500 text-secondary'>Assiged Members</p>
            </div>
          </div>
          <hr className='m-0 mb-3' />
        </div>

        <table class="table department-table">
          <thead>
            <tr className='table-nav'>
              <th scope="col" className='fw-400 fs-16 text-start ps-4'>Deparment/Role Name</th>
              <th scope="col" className='fw-400 fs-16'>Access Level</th>
              <th scope="col" className='fw-400 fs-16'>Summary</th>
              <th scope="col" className='fw-400 fs-16 text-start'>Last Updated</th>
            </tr>
          </thead>
          <tbody>

            <tr>
              <th scope="row" className='text-start'>
                <div class="form-check">

                  <img src={plusIcon} alt="" width="16px" className="me-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" />
                  <label class="form-check-label fs-16 fw-400" for="flexRadioDefault1">Enrolling Students</label>

                </div>
              </th>


              <td><button className='btn  rounded-pill table-btn'>All Access</button></td>
              <td >
                <div className='d-flex'>
                  <div>
                    <p className="m-0 fs-14">View</p>
                  </div>
                  <div className='line mx-1'></div>
                  <div>
                    <p className="m-0 fs-14">create</p>
                  </div>
                  <div className='line mx-1'></div>
                  <div>
                    <p className="m-0 fs-14">Edit</p>
                  </div>
                  <div className='line mx-1'></div>
                  <div>
                    <p className="m-0 fs-14">Delete</p>
                  </div>
                </div>

              </td>
              <td>
                <div className='d-flex justify-content-between'>
                  <div>
                    <p className='m-0 fs-16 fw-400'>1 min ago</p>
                  </div>
                  <div>
                    <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                    </div>
                  </div>
                </div>
              </td>









            </tr>


            <tr>
              <td colSpan="12" className='hiddenRow'>
                <table className='table table-striped"'>
                  <thead>
                    <tr >
                      <div id="collapseOne" className="accordion-collapse collapse hide w-100  " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body w-100">
                          <div className='aspect-heading'>
                          <p classname="fs-14  fw-500">All aspects in the financial details module</p>
                          </div>
                         
                          <div className='row w-100'>
                            <div className='col-md-5 side-line'>
                              <div className=''>
                                <p className='fw-400 fs-16'>Access Control</p>


                                <div class="form-check d-flex">
                                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                  <label class="form-check-label fs-14 text-start ps-2 " for="flexRadioDefault2">
                                    All Access
                                    <p className='text-secondary fs-14'>Can access all items</p>
                                  </label>
                                </div>
                                <div class="form-check">
                                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                  <label class="form-check-label fs-14 text-start" for="flexRadioDefault2">
                                    Restricted Access
                                    <p className='text-secondary fs-14'>Can access only assigned or created items</p>
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className='col-md-5'>
                              <p className='fw-400 fs-16'>Permissions</p>
                              <div class="form-check d-flex ps-5">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label ps-2 fs-14 " for="flexCheckDefault">
                                View items in access
                                </label>
                              </div>
                              <div class="form-check d-flex ps-5">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                                <label class="form-check-label ps-2 fs-14" for="flexCheckChecked">
                                Edit items in access
                                </label>
                              </div>
                              <div class="form-check d-flex ps-5">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label class="form-check-label ps-2 fs-14" for="flexCheckChecked">
                                Create items in access
                                </label>
                              </div>
                              <div class="form-check d-flex ps-5">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"  />
                                <label class="form-check-label ps-2 fs-14" for="flexCheckChecked">
                                Delete items in access
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </tr>
                  </thead>
                </table>
              </td>
            </tr>



            <tr>
              <th scope="row" className='text-start'>
                <div class="form-check">
                  <img src={plusIcon} alt="" width="16px" className="me-3 " />
                  <label class="form-check-label fs-16 fw-400" for="flexRadioDefault1">Financial Details</label>
                </div>
              </th>
              <td><button className='btn  rounded-pill restricted-btn'>Restricted Access</button></td>
              <td className='fs-16 fw-400'></td>
              <td>
                <div className='d-flex justify-content-between'>
                  <div>
                    <p className='m-0 fs-16 fw-400'>1 min ago</p>
                  </div>
                  <div>
                    <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row" className='text-start'>
                <div class="form-check">
                  <img src={plusIcon} alt="" width="16px" className="me-3" />
                  <label class="form-check-label fs-16 fw-400" for="flexRadioDefault1">Furniture order</label>
                </div>
              </th>
              <td><button className='btn  rounded-pill restricted-btn'>Restricted Access</button></td>
              <td className='fs-16 fw-400'>

                <div className='d-flex justify-content-center'>
                  <div>
                    <p className="m-0 fs-14">View</p>
                  </div>
                  <div className='line mx-1'></div>
                  <div>
                    <p className="m-0 fs-14">create</p>
                  </div>

                </div>
              </td>
              <td>
                <div className='d-flex justify-content-between'>
                  <div>
                    <p className='m-0 fs-16 fw-400'>1 min ago</p>
                  </div>
                  <div>
                    <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                    </div>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <th scope="row" className='text-start'>
                <div class="form-check">
                  <img src={plusIcon} alt="" width="16px" className="me-3" />
                  <label class="form-check-label fs-16 fw-400" for="flexRadioDefault1">Technological Equipment</label>
                </div>
              </th>
              <td><button className='btn  rounded-pill restricted-btn'>Restricted Access</button></td>
              <td className='fs-16 fw-400'>
                <div className='d-flex justify-content-center'>
                  <div>
                    <p className="m-0 fs-14">View</p>
                  </div>
                  <div className='line mx-1'></div>
                  <div>
                    <p className="m-0 fs-14">create</p>
                  </div>

                </div>
              </td>
              <td>
                <div className='d-flex justify-content-between'>
                  <div>
                    <p className='m-0 fs-16 fw-400'>1 min ago</p>
                  </div>
                  <div>
                    <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                    </div>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <th scope="row" className='text-start'>
                <div class="form-check">
                  <img src={plusIcon} alt="" width="16px" className="me-3 " />
                  <label class="form-check-label fs-16 fw-400" for="flexRadioDefault1">Organisational Modification</label>
                </div>
              </th>
              <td><button className='btn  rounded-pill table-btn'>All Access</button></td>
              <td >
                <div className='d-flex'>
                  <div>
                    <p className="m-0 fs-14">View</p>
                  </div>
                  <div className='line mx-1'></div>
                  <div>
                    <p className="m-0 fs-14">create</p>
                  </div>
                  <div className='line mx-1'></div>
                  <div>
                    <p className="m-0 fs-14">Edit</p>
                  </div>
                  <div className='line mx-1'></div>
                  <div>
                    <p className="m-0 fs-14">Delete</p>
                  </div>
                </div>
              </td>
              <td>
                <div className='d-flex justify-content-between'>
                  <div>
                    <p className='m-0 fs-16 fw-400'>1 min ago</p>
                  </div>
                  <div>
                    <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                    </div>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <th scope="row" className='text-start'>
                <div class="form-check">
                  <img src={plusIcon} alt="" width="16px" className="me-3 " />
                  <label class="form-check-label fs-16 fw-400" for="flexRadioDefault1">Permissions & Access Control</label>
                </div>
              </th>
              <td><button className='btn  rounded-pill table-btn'>All Access</button></td>
              <td className='fs-16 fw-400'></td>
              <td>
                <div className='d-flex justify-content-between'>
                  <div>
                    <p className='m-0 fs-16 fw-400'>1 min ago</p>
                  </div>
                  <div>
                    <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>

        </table>


      </div>


    </>
  )
}
