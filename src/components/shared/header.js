import React from 'react'
import "./header.css"
import logo from "./logo.png"
function Header() {
  return (
    <div className='header'>
    <a className="lcon" href='/home'><img src={logo} className="logoHeader"></img></a>
    <a href="/shuffle" className='header-item'>Shuffle</a>
    </div>
  )
}

export default Header