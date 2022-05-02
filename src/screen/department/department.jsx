import React from 'react'
import editIcon from '../../assets/edit.png'
import deleteicon from '../../assets/delete.png'
import { Link } from 'react-router-dom'
import "./department.css"

export default function Department() {
  return (
    <>
      <div className='px-5'>
        <div className='d-flex my-4 align-items-center'>
          <div>
            <button className='btn btn-danger fs-16 fw-500 addRole-btn'><i class="fa-solid fa-plus pe-2"></i> Add Role</button>
          </div>
          <div className='mx-4'>
            <img src={editIcon} role="button" alt="" width="18px" />
          </div>
          <div className='px-1'>
            <img src={deleteicon} role="button"alt="" width="18px" height="22px"/>
          </div>
        </div>

        <table class="table department-table">
          <thead>
            <tr className='table-nav'>
              <th scope="col" className='fw-400 fs-16 text-start ps-4'>Deparment/Role Name</th>
              <th scope="col" className='fw-400 fs-16'>Access Level</th>
              <th scope="col" className='fw-400 fs-16'>No of members</th>
              <th scope="col" className='fw-400 fs-16 text-start'>Last Updated</th>
            </tr>
          </thead>
          <tbody>

            <tr>
              <th scope="row" className='text-start'>
                <div class="form-check">
               <input class="form-check-input me-3 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                  <label class="form-check-label fs-16 fw-400" for="flexRadioDefault1">Teacher</label>
                </div>
              </th>
              <td><button className='btn  rounded-pill table-btn'>All Access</button></td>
              <td className='fs-16 fw-400'>4</td>
              <td>
                  <div className='d-flex justify-content-between'>
                     <div>
                          <p className='m-0 fs-16 fw-400'>1 min ago</p>
                     </div>
                     <Link to="/permissions/permissionTab/department-detail">  <div>
                        <i class="fa-regular fa-eye text-secondary fs-14"></i>
                     </div></Link>
                  </div>
                </td>
            </tr>

            <tr>
              <th scope="row" className='text-start'>
                <div class="form-check">
                  <input class="form-check-input me-3" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                  <label class="form-check-label fs-16 fw-400" for="flexRadioDefault1">External Faculty</label>
                </div>
              </th>
              <td><button className='btn  rounded-pill restricted-btn'>Restricted Access</button></td>
              <td className='fs-16 fw-400'>8</td>
              <td>
                  <div className='d-flex justify-content-between'>
                     <div>
                          <p className='m-0 fs-16 fw-400'>1 min ago</p>
                     </div>
                     <div>
                        <i class="fa-regular fa-eye text-secondary fs-14"></i>
                     </div>
                  </div>
                </td>
            </tr>
            <tr>
              <th scope="row" className='text-start'>
                <div class="form-check">
                  <input class="form-check-input me-3 " type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                  <label class="form-check-label fs-16 fw-400" for="flexRadioDefault1">Lab Assistants</label>
                </div>
              </th>
              <td><button className='btn  rounded-pill restricted-btn'>Restricted Access</button></td>
              <td className='fs-16 fw-400'>16</td>
              <td>
                  <div className='d-flex justify-content-between'>
                     <div>
                          <p className='m-0 fs-16 fw-400'>1 min ago</p>
                     </div>
                     <div>
                        <i class="fa-regular fa-eye text-secondary fs-14"></i>
                     </div>
                  </div>
                </td>
            </tr>

            <tr>
              <th scope="row" className='text-start'>
                <div class="form-check">
                  <input class="form-check-input me-3 " type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                  <label class="form-check-label fs-16 fw-400" for="flexRadioDefault1">Non-teaching staff</label>
                </div>
              </th>
              <td><button className='btn  rounded-pill restricted-btn'>Restricted Access</button></td>
              <td className='fs-16 fw-400'>4</td>
              <td>
                  <div className='d-flex justify-content-between'>
                     <div>
                          <p className='m-0 fs-16 fw-400'>1 min ago</p>
                     </div>
                     <div>
                        <i class="fa-regular fa-eye text-secondary fs-14"></i>
                     </div>
                  </div>
                </td>
            </tr>

            <tr>
              <th scope="row" className='text-start'>
                <div class="form-check">
                  <input class="form-check-input me-3 " type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                  <label class="form-check-label fs-16 fw-400" for="flexRadioDefault1">Supervisors</label>
                </div>
              </th>
              <td><button className='btn  rounded-pill table-btn'>All Access</button></td>
              <td className='fs-16 fw-400'>1</td>
              <td>
                  <div className='d-flex justify-content-between'>
                     <div>
                          <p className='m-0 fs-16 fw-400'>1 min ago</p>
                     </div>
                     <div>
                        <i class="fa-regular fa-eye text-secondary fs-14"></i>
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
