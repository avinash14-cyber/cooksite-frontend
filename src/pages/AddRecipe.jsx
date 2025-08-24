import React, {  useRef,useState } from 'react'
import { addRecipeeAPI } from '../services/allAPIs';
import Swal from 'sweetalert2'

const AddRecipe = () => {
  const [recipee, setRecipee] = useState({
    
    name: "",
    type: "",
    description: "",
    ingredients: [],
    preparation: "",
    image: null
  });
   const [image, setImage]=useState(null)
   const[trigger,setTrigger]=useState(false)

   
   const fileInputRef = useRef(null);
   const handleButtonClick = () => {
    fileInputRef.current.click(); // trigger file input click
  };
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
       const file = e.target.files[0];
    const previewURL = URL.createObjectURL(file);
      setImage(previewURL);

     
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload=()=>{
         setRecipee((prev) => ({
      ...prev,
      image: reader.result
    }));
      }
    }
  };
  
  const handleChange = (e) => {
  const { name, value } = e.target;
  setRecipee((prev) => ({
    ...prev,
     [name]: name === "ingredients" ? value.split(",") : value
  }));
};
const handleOnsubmit=async()=>{
  try{
    await addRecipeeAPI(recipee)
    setRecipee(
      {   name: "",
    type: "",
    description: "",
    ingredients: [],
    preparation: "",
    image: null}
    )
     setImage(null);
    setTrigger(false)
    Swal.fire({
  title: 'Success!',
  text: 'Your recipe has been submitted successfully',
  icon: 'success',
  confirmButtonText: 'Okay'
})

  }
  catch(err){
    console.log(err);
    Swal.fire({
  title: 'Error!',
  text: 'Some problem occured',
  icon: 'error',
  confirmButtonText: 'CLOSE'
})
    
  }
}
  return (
    <div className='container-fluid w-100 vh-100 d-flex justify-content-center align-items-center ' style={{backgroundColor:'#b5e6b9ff'}}>
      {trigger?   (<div className='w-50  d-flex flex-column align-items-center justify-content-evenly position-relative' style={{maxHeight:'100-vh',backgroundColor:'#FDF6F0'}}>
     <img src="/images/cookbook.png" className='img-fluid start-0 position-absolute w-25 h-25 top-0' alt="" />
     <img src={image} class="img-fluid border border-3 mt-5 mb-3 " style={{width:'250px',height:'200px'}} alt="upload image"></img>
     <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleImageChange}
        />
    <button type="button"onClick={handleButtonClick} class="btn mb-3 btn-dark">Choose File</button>
    <input type="text" class="form-control border-0 mb-3 border-bottom border-3 border-dark rounded-0 bg-transparent w-75" onChange={handleChange} value={recipee.name} name='name' id="exampleInput" placeholder="Name of the dish"/>
    <input type="text" class="form-control border-0 mb-3 border-bottom border-3 border-dark rounded-0 bg-transparent w-75" name='type'onChange={handleChange} value={recipee.type} id="exampleInput" placeholder="Type of dish"/>
    <input type="text" class="form-control border-0 border-bottom border-3 mb-3 overflow-x-hidden border-dark rounded-0 bg-transparent w-75"onChange={handleChange} value={recipee.description} name='description' id="exampleInput" placeholder="Description"/>
     <input type="text" class="form-control border-0 border-bottom border-3 mb-2 overflow-x-hidden border-dark rounded-0 bg-transparent w-75"onChange={handleChange} value={recipee.ingredients} name='ingredients' id="exampleInput" placeholder="Ingredients"/>
  <textarea class="form-control w-75 mt-3 mb-3 "name='preparation' placeholder="Preparation method" id="floatingTextarea2"onChange={handleChange} rows='4'></textarea>
  

    <div className='w-50 mb-2 d-flex mx-auto justify-content-evenly'>
      <button type="button" class="btn btn-success" onClick={handleOnsubmit}>Submit Recipee</button>
      <button type="button" onClick={e=>setTrigger(false)} class="btn btn-danger">Close</button>
    </div>
   </div>):( <div className='w-50 h-75 rounded-5 text-wrap ' style={{backgroundColor:'#FFFDE7'}}>
         <img src="/images/pan.png" className='w-25 h-25 img-fluid top-0 start-0' alt="" />

         <p className='text-center w-100 mt-5  fs-4 fw-bolder' >"Great meals are meant to be shared, and so are the ideas behind them.
Your recipe might be the missing spark in another cook’s adventure.
Contribute your dish and become part of our food-loving community."</p>
<div className='w-100 d-flex justify-content-end '>
 <img src="/images/bread (1).png" className='w-25 h-25 img-fluid end-0' alt="" />
</div>

        <div className='text-center w-100'><button type="button" onClick={e=>setTrigger(true)} class="btn btn-warning w-50 fs-4 fw-bold mx-auto">Upload Recipee</button></div>
    </div>
)}
   

</div>
  )
}

export default AddRecipe