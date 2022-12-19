import React from 'react'
import Button from './Button'


const Navbar = ({contact, setContact}) => {
  return (
    <div id="navbar" style={{
      display:'flex',
      width:'calc(100% - 3rem)',
      flexDirection:'row',
      justifyContent:'space-between',
      padding:'1.5rem'
    }}>
      <div style={{fontSize:'1.7rem', letterSpacing:'0.2rem'}}>Fragment</div>
      <Button onClick={() => setContact(!contact)}>{contact ? "Home" : "Get in Touch"}</Button>
    </div>
  )
}

export default Navbar