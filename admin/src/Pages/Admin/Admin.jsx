import React from 'react'
import './Admin.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { Routes, Route } from 'react-router-dom'
import ShowProduct from '../../Components/ShowProduct/ShowProduct'
import AddProduct from '../../Components/AddProduct/AddProduct'

const Admin = () => {
  return (
    <div className='admin'>
            <Sidebar/>
        <Routes>
            <Route path='/addproduct' element={<AddProduct/>}/>
            <Route path='/showproduct' element={<ShowProduct/>}/>
        </Routes>
    </div>
  )
}

export default Admin