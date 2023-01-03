import React from 'react'
import Button from './Button'
import '../styles/navbar.css'

const Navbar = () => {
  return (
    <div id="navbar" className='navbar'>
      <div className='navbarTitle'>Fragment</div>
      <Button style={{position:'fixed', top:'40px', right:'40px'}}><a style={{color:'inherit', textDecoration:'none'}} href="#footer">Get in Touch</a></Button>
    </div>
  )
}

export default Navbar