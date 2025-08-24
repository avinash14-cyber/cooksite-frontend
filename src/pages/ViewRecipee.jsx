import React, { useEffect, useState } from 'react'
import { getRecipeeAPI } from '../services/allAPIs'


const ViewRecipee = () => {
  const [viewrecipee,setViewrecipee]=useState([])
  const[selectedrecipee,setSelectedrecipee]=useState(false)
  const[viewmore,setViewmore]=useState(null)
  const handleresipee=async()=>{
    const result=await getRecipeeAPI()
    console.log(result.data);
    setViewrecipee(result.data)
    
  }
  useEffect(()=>{
    handleresipee()
  },[])
  return (
    <div className='w-100 p-3 vh-100  d-flex flex-wrap flex-row justify-content-around 'style={{ background: "linear-gradient(135deg, #a18cd1, #fbc2eb)" }}>
  
{selectedrecipee?(
  <div className='w-50 bg-light d-flex flex-column align-items-center mb-5 'style={{maxHeight:'100-vh'}}>
    <img src={viewmore.image} class="img-fluid border border-3 mt-2 mb-3 border border-3 border-dark " style={{width:'250px',height:'200px'}} alt=" image"></img>
    <div className='  d-flex w-100 justify-content-start flex-column p-3'>
       <p className='fw-bold fs-5' >Name:{viewmore.name}</p>
       <p className='fw-bold fs-5'>Type:{viewmore.type}</p>
       <p className='fw-bold fs-5'>Description:{viewmore.description}</p>
       <p className='overflow-x-scroll fw-bold fs-5'> Ingredients:{viewmore.ingredients}</p>
         <textarea class="form-control w-100 mt-3 mb-3 "name='preparation' placeholder="Preparation method" id="floatingTextarea2" readOnly rows='6'>{viewmore.preparation}</textarea>
         <button type="button" onClick={()=>setSelectedrecipee(false)} class="btn btn-danger w-50 mx-auto mt-3">CLOSE</button>
    </div>
  
  </div>):(
  viewrecipee.length>0?
  viewrecipee.map((item,index)=>(
    <div key={item.id} className=' d-flex border-dark border border-3 flex-column' style={{width:'300px',height:'330px',backgroundColor:'#d4edda'}}>
    <img className='w-100 h-75 img-fluid  ' src= {item.image}    alt="" />
    <div className='d-flex  flex-column align-items-center justify-content-evenly position-relative'style={{height:'80px'}}>
      <p className='text-bold fs-5 mb-0 fw-bold'>Name:{item.name}</p>
      <button type="button" class="btn btn-warning mb-5 fw-bold "onClick={()=>{setSelectedrecipee(true);
        setViewmore(item);}
      }>View Recipee</button>
    </div>
</div>
  ))
  :''
)}

      
    </div>
  )
}

export default ViewRecipee;