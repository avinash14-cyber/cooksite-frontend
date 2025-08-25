import React, { useEffect, useState } from 'react'
import { deleteRecipeeAPI, getRecipeeAPI } from '../services/allAPIs'
import Swal from 'sweetalert2'

const DeleteRecipee = () => {
    const [viewrecipee,setViewrecipee]=useState([])
    const [deleterecipee,setDeleteRecipee]=useState(false)
    const [deleteelement,setDeleteElement]=useState(null)
      const handleresipee=async()=>{
        const result=await getRecipeeAPI()
        console.log(result.data);
        setViewrecipee(result.data)
        
      }
      useEffect(()=>{
        handleresipee()
      },[])

      const handlesubdelete=(item)=>{
        setDeleteElement(item)
        setDeleteRecipee(true)
      }
      const handledelete=async()=>{
        try{
            await deleteRecipeeAPI(deleteelement.id)
            setDeleteRecipee(false)
             
            handleresipee()
            Swal.fire({
              title: 'Success!',
              text: 'Recipee deleted successfully',
              icon: 'success',
              confirmButtonText: 'Okay'
            })
        }
        catch(err){
            console.log(err);
            
        }
      }
  return (
     <div className='w-100 p-3 vh-100  d-flex flex-wrap flex-row justify-content-around 'style={{ background: "linear-gradient(135deg, #a18cd1, #fbc2eb)" }}>
        {
           deleterecipee?(<div className='h-25 rounded rounded-3 d-flex flex-column justify-content-center align-items-center w-50  my-auto'style={{backgroundColor:'#f8d7da'}}>
            <p className='fw-bold fs-4'>Are you sure you want to delete <span style={{color:'#49adceff'}}>{deleteelement.name}???</span></p>
            <div className='d-flex flex-row justify-content-around w-100'>
            <button type="button" class="btn btn-success w-25 " onClick={()=>handledelete()}>YES</button>
<button type="button" class="btn btn-danger w-25"onClick={()=>setDeleteRecipee(false)}>NO</button>
            </div>
           </div>):(
             viewrecipee.length>0?
  viewrecipee.map((item,index)=>(
    <div key={item.id} className=' d-flex border-dark border border-3 flex-column' style={{width:'300px',height:'330px',backgroundColor:'#d4edda'}}>
    <img className='w-100 h-75 img-fluid  ' src= {item.image}    alt="" />
    <div className='d-flex  flex-column align-items-center justify-content-evenly position-relative'style={{height:'80px'}}>
      <p className='text-bold fs-5 mb-0 fw-bold'>Name:{item.name}</p>
      <button type="button" class="btn btn-warning mb-5 fw-bold "onClick={()=>{handlesubdelete(item);}
      }>Delete Recipee</button>
    </div>
</div>
  ))
  :''
           )
        }

     </div>
     
  )
}

export default DeleteRecipee