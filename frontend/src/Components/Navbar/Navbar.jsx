import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import search_icon from '../Assets/search_icon.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {
    const [menu, setMenu] = useState(null);
    const handleItemClick = (item) => {
        setMenu(item);
    } 
    const {getTotalCartItems} = useContext(ShopContext);
    return (
        <div className='navbar'  style={{ '--bs-navbar-padding-y': '0' }}>
            <div className='main-navbar'>
                <div className='app-logo'>
                    <img src={logo}  alt="" />
                    <p>ShopHub</p>
                </div>
                <div className='search'>
                    <div className='search-box'>
                        <input className='pl-4' placeholder='Search Your Products, Brands and more'/>
                    </div>
                    <div className='search-image'>
                        <a href='#'><img src={search_icon} alt="" /></a>    
                    </div>
                </div>
                <div className='cart-image'>
                    <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                    <div className='navbar-count'>
                        <div className='cart-count'>{getTotalCartItems()}</div>
                    </div>
                </div>
                {localStorage.getItem('auth-token')?
                <div className='login' >
                    <div className='login-para' onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}><Link style={{textDecoration: 'none', color: 'black', fontWeight: '600'}} to='/loginsignup'>Logout</Link></div>
                </div>:
                 <div className='login' >
                 <div className='login-para'><Link style={{textDecoration: 'none', color: 'black', fontWeight: '600'}} to='/loginsignup'>Login</Link></div></div>}   
            </div>
            <div className='another-navbar'>
                <ul>
                    <li className={menu==="Home"?'active':''} onClick={()=>handleItemClick("Home")}><Link style={{textDecoration: 'none', color: 'black'}} to='/'>HOME</Link></li>
                    <li className={menu==="Mens"?'active':''} onClick={()=>handleItemClick("Mens")}><Link style={{textDecoration: 'none', color: 'black'}} to='/mens'>MEN</Link></li>
                    <li className={menu==="Womens"?'active':''} onClick={()=>handleItemClick("Womens")}><Link style={{textDecoration: 'none', color: 'black'}} to='/womens'>WOMEN</Link></li>
                    <li className={menu==="Kids"?'active':''} onClick={()=>handleItemClick("Kids")}><Link style={{textDecoration: 'none', color: 'black'}} to='/kids'>KIDS</Link></li>
                    <li className={menu==="New Arrivals"?'active':''} onClick={()=>handleItemClick("New Arrivals")}><Link style={{textDecoration: 'none', color: 'black'}} to='/newarrivals'>NEW ARRIVALS</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar