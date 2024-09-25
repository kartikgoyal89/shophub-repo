import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
// import add_product_icon from '../assets/add_product_icon.svg'
// import show_product_icon from '../assets/show_product_icon.svg'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Link to={'/addproduct'} style={{textDecoration: "none"}}>
            <div className='sidebar-items'>
                {/* <img src={add_product_icon} alt=""/> */}
                <p>Add Product</p>
            </div>
        </Link>
        <Link to={'/showproduct'} style={{textDecoration: "none"}}>
            <div className='sidebar-items'>
                {/* <img src={show_product_icon} alt=""/> */}
                <p>Show Product</p>
            </div>
        </Link>
    </div>
  )
}

export default Sidebar