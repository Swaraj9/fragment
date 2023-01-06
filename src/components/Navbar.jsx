import React from 'react'
import Button from './Button'
import '../styles/navbar.css'
import '../styles/button.css'

const Navbar = () => {
  return (
    <div id="navbar" className='navbar'>
      <div className='navbarTitle'>Fragment</div>
      <Button className='Button navbarButton'><a style={{color:'inherit', textDecoration:'none'}} href="#footer">Get in Touch</a></Button>
    </div>
  )
}

export default Navbar