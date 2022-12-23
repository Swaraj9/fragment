import React from 'react'
import Button from './Button'
import '../styles/navbar.css'

const Navbar = ({contact, setContact}) => {
  return (
    <div id="navbar" className='navbar'>
      <div className='navbarTitle'>Fragment</div>
      <Button onClick={() => setContact(!contact)}>{contact ? "Home" : "Get in Touch"}</Button>
    </div>
  )
}

export default Navbar