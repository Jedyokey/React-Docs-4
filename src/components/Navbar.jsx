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
        <NavLink 
          to="/manipulating-the-dom-with-refs" 
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
          Manipulate_DOM
        </NavLink>
    </div>
  )
}

export default Navbar
