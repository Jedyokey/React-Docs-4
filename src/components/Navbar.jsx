import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <NavLink 
          to="/" 
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
          Escape Hatches
        </NavLink>
        <NavLink 
          to="/referencing-values-with-refs" 
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
          Referencing
        </NavLink>
    </div>
  )
}

export default Navbar
