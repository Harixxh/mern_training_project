import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    const nav=["home","About","Contact","Services"]
  return (
  <div className='Nav'>
        {nav.map((item, index) => {
            return <NavLink 
                key={index} 
                className='link' 
                to={item==="home" ? "/" : `/${item.toLowerCase()}`}
            >
                {item}
            </NavLink>
        })}
  </div>
)
}

export default Navbar