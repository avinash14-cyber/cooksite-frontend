import {  Route, Routes } from 'react-router-dom'
import './App.css'
import AddRecipe from './pages/AddRecipe'
import EditRecipee from './pages/EditRecipee'
import ViewRecipee from './pages/ViewRecipee'
import Landing from './pages/Landing'
import DeleteRecipee from './pages/DeleteRecipee'

function App() {
 

  return (
    <>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/addrecipee' element={<AddRecipe/>}/>
      <Route path='/editrecipee' element={<EditRecipee/>}/>
      <Route path='/viewrecipee' element={<ViewRecipee/>}/>
      <Route path='/deleterecipee' element={<DeleteRecipee/>}/>
    </Routes>
    </>
  )
}

export default App;
