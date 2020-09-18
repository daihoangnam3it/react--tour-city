import React from 'react'
import logo from '../../logo.svg'
import './navbar.scss'
export default function Navbar() {
  return (
    <nav className="Navbar">
      <img src={logo} alt=""/>
      <ul className="nav-links">
        <li><a href="/" className="nav-link">Home</a></li>
        <li><a href="/" className="nav-link">About</a></li>
        <li><a href="/" className="nav-link active">Tour</a></li>
      </ul>
    </nav>
  )
}
