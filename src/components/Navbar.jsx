import React from 'react'
import Button from './Button'
import '../styles/navbar.css'
import '../styles/button.css'

const Navbar = ({caseStudy, setCaseStudy}) => {
  return (
    <div id="navbar" className='navbar'>
      <div className='navbarTitle'>Fragment</div>
      {!caseStudy ? <a href='#footer'><Button className='Button navbarButton'>Get in Touch</Button></a>:
        <Button onClick={() => setCaseStudy(false)} className='Button navbarButton'>Home</Button>
      }
    </div>
  )
}

export default Navbar