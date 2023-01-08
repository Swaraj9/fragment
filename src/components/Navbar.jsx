import React from 'react'
import Button from './Button'
import '../styles/navbar.css'
import '../styles/button.css'

const Navbar = () => {
  return (
    <div id="navbar" className='navbar'>
      <div className='navbarTitle'>Fragment</div>
      <a href='#footer'><Button className='Button navbarButton'>Get in Touch</Button></a>
    </div>
  )
}

export default Navbar