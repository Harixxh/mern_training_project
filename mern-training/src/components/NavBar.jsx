import React from 'react'
import { Link } from 'react-router'
import './NavBar.css'
const NavBar = () => {
  return (
    <div>
        <ul className='navbar'>
            <li> <Link to="/"> Home</Link> </li>
            <li> <Link to="/about"> About</Link></li>
            <li>  <Link to="/service"> Service</Link></li>
            <li> <Link to="/contact"> Contact</Link></li>
        </ul>
    </div>
  )
}

export default NavBar