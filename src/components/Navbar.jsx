import React from 'react'
import Button from './Button'


const Navbar = () => {
  return (
    <div style={{
      display:'flex',
      width:'calc(100% - 3rem)',
      flexDirection:'row',
      justifyContent:'space-between',
      padding:'1.5rem'
    }}>
      <div style={{fontSize:'1.7rem', letterSpacing:'0.2rem'}}>Fragment</div>
      <Button>Get In Touch</Button>
    </div>
  )
}

export default Navbar