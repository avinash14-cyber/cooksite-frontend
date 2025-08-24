import { getRecipeeAPI, updateRecipeeAPI } from '../services/allAPIs'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
const EditRecipee = () => {
  const [viewrecipee, setViewrecipee] = useState([])
  const [selectedrecipee, setSelectedrecipee] = useState(false)
  const [viewmore, setViewmore] = useState(null)
  const handleresipee = async () => {
    const result = await getRecipeeAPI()
    console.log(result.data);
    setViewrecipee(result.data)

  }
  useEffect(() => {
    handleresipee()
  }, [])

  const handleupdate=async(id)=>{
    try{
      await updateRecipeeAPI(id,viewmore)
       handleresipee()
 setSelectedrecipee(false)      
      
      Swal.fire({
  title: 'Success!',
  text: 'Your recipe has been updated successfully',
  icon: 'success',
  confirmButtonText: 'Okay'
})

    }
    catch(err){
        console.log(err);
        Swal.fire({
  title: 'Error!',
  text: 'Edit was failed',
  icon: 'error',
  confirmButtonText: 'BACK'
})
        
    }
  }
  return (
    <div className='w-100 p-3 min-vh-100  d-flex flex-wrap flex-row justify-content-around ' style={{ background: "linear-gradient(135deg, #a18cd1, #fbc2eb)" }}>

      {selectedrecipee ? (
        <div className='w-50 bg-light d-flex flex-column align-items-center mb-5 ' style={{ maxHeight: '100-vh' }}>
          <img src={viewmore.image} class="img-fluid border border-3 mt-2 mb-3 border border-3 border-dark " style={{ width: '250px', height: '200px' }} alt=" image"></img>
          <div className='  d-flex w-100 justify-content-start flex-column p-3'>

            <div className="mb-2">
              <label for="exampleFormControlInput1" className="form-label fw-bold">Name</label>

              <input
                type="text"
                className="form-control mb-2"
                value={viewmore.name}
                onChange={(e) => setViewmore({ ...viewmore, name: e.target.value })}
              />
            </div>

             <div className="mb-2">
              <label for="exampleFormControlInput1" className="fw-bold form-label">Type</label>

                <input
              type="text"
              className="form-control mb-2"
              value={viewmore.type}
              onChange={(e) => setViewmore({ ...viewmore, type: e.target.value })}
            />
            </div>
           
           <div className='mb-2'>
            <label for="exampleFormControlInput1" className="fw-bold form-label">Description</label>
           <input
              type="text"
              className="form-control mb-2"
              value={viewmore.description}
              onChange={(e) => setViewmore({ ...viewmore, description: e.target.value })}
            />
           </div>
            
           <div className='mb-2'>
          
            <label for="exampleFormControlInput1" className="fw-bold form-label">Ingredients</label>
             <input
              type="text"
              className="form-control mb-2"
              value={viewmore.ingredients}
              onChange={(e) => setViewmore({ ...viewmore, ingredients: e.target.value })}
            />
           </div>

            <div>
              <label for="exampleFormControlInput1" className="fw-bold form-label">Preparation</label>
              <textarea
              className="form-control w-100 mt-3 mb-3"
              name="preparation"
              placeholder="Preparation method"
              id="floatingTextarea2"
              rows="6"
              value={viewmore.preparation}
              onChange={(e) =>
                setViewmore({ ...viewmore, preparation: e.target.value })
              }
            />
            </div>
           <div className='d-flex flex-row justify-content-evenly'>
              <button type="button" onClick={() => setSelectedrecipee(false)} class="btn btn-danger w-25 mx-auto mt-3">CLOSE</button>
               <button type="button" onClick={() => handleupdate(viewmore.id)} class="btn btn-success w-25 mx-auto mt-3">UPDATE</button>
                    
           </div>
          </div>

        </div>) : (
        viewrecipee.length > 0 ?
          viewrecipee.map((item, index) => (
            <div key={item.id} className=' d-flex border-dark border border-3 flex-column' style={{ width: '300px', height: '330px', backgroundColor: '#d4edda' }}>
              <img className='w-100 h-75 img-fluid  ' src={item.image} alt="" />
              <div className='d-flex  flex-column align-items-center justify-content-evenly position-relative' style={{ height: '80px' }}>
                <p className='text-bold fs-5 mb-0 fw-bold'>Name:{item.name}</p>
                <button type="button" class="btn btn-warning mb-5 fw-bold " onClick={() => {
                  setSelectedrecipee(true);
                  setViewmore(item);
                }
                }>Edit Recipee</button>
              </div>
            </div>
          ))
          : ''
      )}


    </div>
  )
}

export default EditRecipee