import React from 'react'
import Button from './Button'
import '../styles/navbar.css'
import '../styles/button.css'
import logo from '../images/IconPW.svg'

const Navbar = ({caseStudy, setCaseStudy}) => {
  return (
    <div id="navbar" className='navbar'>
      <div style={{display:"flex", alignItems:'center'}}>
        <img className='navbarLogo' alt="logo" src={logo}/>
        <div className='navbarTitle'>Fragment</div>
      </div>
      {!caseStudy ? <a href='#footer'><Button className='Button navbarButton'>Get in Touch</Button></a>:
        <Button onClick={() => setCaseStudy(false)} className='Button navbarButton'>Home</Button>
      }
    </div>
  )
}

export default Navbar