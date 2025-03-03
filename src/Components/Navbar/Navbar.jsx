import React from 'react'
import "./Navbar.css"
import { useState } from "react";
import logo from "../Assets/logo.png"
import cart_icon from "../Assets/cart_icon.png"
import { Link } from 'react-router-dom';

const Navbar = () => {

  //state variable to make the navgation on shop responsive
  const [menu, setMenu] = useState("shop")

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt='' />
            <p>SHOPPER</p>
        </div>
        <ul className='nav-menu'> 
          {/*Using the link (Link) tag to set the navgation menu with react router  */}
            <li onClick={() =>{setMenu("shop")}}><Link to="/">Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={() =>{setMenu("mens")}}><Link to="/mens">Men</Link>{menu==="mens"?<hr/>:<></>}</li>
            <li onClick={() =>{setMenu("womens")}}><Link to="/womens">Women</Link>{menu==="womens"?<hr/>:<></>}</li>
            <li onClick={() =>{setMenu("kids")}}><Link to="/kids">Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
          {/*Using the link (Link) tag to set the navgation menu with react router  */}
          <Link to="/login"><button>Login</button></Link>
          <Link to="/cart"><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">0</div>
        </div>
      
    </div>
  )
}

export default Navbar
