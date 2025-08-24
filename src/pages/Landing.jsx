import React from 'react'
import { Link } from 'react-router-dom'
import AddRecipe from './AddRecipe';

const Landing = () => {
  
     
  return (
    <div className='container-fluid vh-100  d-flex w-100 justify-content-center border ' style={{ backgroundColor: 'bisque' }}>
      <div className="row  vh-100 w-75 border d-flex justify-content-center ">
        <div className="col-4 shadow position-relative  p-2  border text-wrap text-center" style={{ height: '350px', backgroundColor: 'white' }}>
          <h2 className='text-center'>Add your recipee</h2>
          <img src="/images/Woman_cutting_vegetables_for_cooking___Premium_Vector-removebg-preview.png" className='img-fluid w-100 h-75' style={{ objectFit: "contain" }} alt="" />

          <Link to={'/addrecipee' } className='text-decoration-none'>
            <button type="button" class="btn btn-outline-primary mx-auto mb-5 d-flex flex-column w-25 align-items-center justify-content-center   fs-5" style={{ height: '25px' }} >
              ADD
             
              </button>
          </Link>
          <div className="w-100 container bottom-0 start-0  position-absolute" style={{ height: '15px', backgroundColor: 'rgba(230, 219, 251, 1)' }}>

          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-4 shadow position-relative  p-2  border text-wrap text-center" style={{ height: '350px', backgroundColor: 'white' }}>
          <h2 className='text-center'>View your recipee</h2>
          <img src="/images/editrecipe.png" alt="" className='img-fluid w-100 h-75' style={{ objectFit: "contain" }} />
          <Link to={'/viewrecipee'} className='text-decoration-none'>
            <button type="button" class="btn btn-outline-primary mx-auto mb-5 d-flex flex-column w-25 align-items-center justify-content-center   fs-5" style={{ height: '25px' }} >
              VIEW
              </button>
          </Link>
          <div className="w-100 container bottom-0 start-0  position-absolute" style={{ height: '15px', backgroundColor: 'rgba(153, 117, 220, 1)' }}>

          </div>
        </div>
        <div className="col-4 shadow position-relative  p-2  border text-wrap text-center  " style={{ height: '350px', backgroundColor: 'white' }}>
          <img src="/images/book.png" className='img-fluid w-100 h-75' style={{ objectFit: "contain" }} alt="" />
          <Link to={'/editrecipee'} className='text-decoration-none'>
            <button type="button" class="btn btn-outline-primary mx-auto mb-5 d-flex flex-column w-25 align-items-center justify-content-center   fs-5" style={{ height: '25px' }} >
              EDIT
              </button>
          </Link>
          <div className="w-100 container bottom-0 start-0  position-absolute" style={{ height: '15px', backgroundColor: 'rgba(238, 187, 104, 1)' }}>

          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-4 shadow position-relative  p-2  border text-wrap text-center" style={{ height: '350px', backgroundColor: 'white' }}>

            <img src="/images/remove.png" className='img-fluid w-100 h-75' style={{ objectFit: "contain" }} alt="" />
          <Link to={'/deleterecipee'} className='text-decoration-none'>
            <button type="button" class="btn btn-outline-primary mx-auto mb-5 d-flex flex-column w-25 align-items-center justify-content-center   fs-5" style={{ height: '25px' }} >
              DELETE
              </button>
          </Link>       
         <div className="w-100 container bottom-0 start-0  position-absolute" style={{ height: '15px', backgroundColor: 'rgba(145, 201, 244, 1)' }}>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Landing