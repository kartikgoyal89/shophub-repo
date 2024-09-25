import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
const Navbar = () => {
    return (
        <div className='main-navbar'>
            <div className='app-logo'>
                <img src={logo} alt="" />
                <p>ShopHub</p>
            </div>
        </div>
    )
}

export default Navbar