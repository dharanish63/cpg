import React from 'react';
import { NavLink } from 'react-router-dom';
import './TopNav.css';

const TopNav = () => {
  return (
    <nav className='navbar'>
      <ul>
        <li>
          <NavLink to="/" className={(navData) => (navData.isActive ? "active" : 'none')}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/search" className={(navData) => (navData.isActive ? "active" : 'none')}>Register</NavLink>
        </li>
        <li>
          <NavLink to="/colleges" className={(navData) => (navData.isActive ? "active" : 'none')}>Colleges</NavLink>
        </li>
        <li>
          <NavLink to="/employees" className={(navData) => (navData.isActive ? "active" : 'none')}>Candidate</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={(navData) => (navData.isActive ? "active" : 'none')}>Login</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default TopNav
