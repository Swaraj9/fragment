import React from 'react'
import {BsDiscord, BsTwitter} from 'react-icons/bs'
import {FaEnvelope} from 'react-icons/fa'

const Footer = () => {
  return (
    <div style={{paddingTop:'5rem', backgroundColor:'rgb(235,235,235,0.1)', display:'flex', flexDirection:'column', padding:'3rem', alignItems:'center'}}>
      <div style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly', width:'100%', marginBottom:'3rem'}}>
        <div style={{}}>
          <div style={{fontSize:'2.5rem', marginBottom:'1rem'}}>Fragment Studios</div>
          <div style={{fontSize:'1.25rem', marginBottom:'4rem'}}>Your next solution for Discord Development</div>
          <div style={{display:'flex', justifyContent:'space-evenly', fontSize:'1.75rem'}}>
            <a style={{color:'inherit', textDecoration:'none'}} href="https://twitter.com/Fragm3ntStudios">
              <BsTwitter/>
            </a>
            <a style={{color:'inherit', textDecoration:'none'}} href="https://fragmentstudios.xyz/#">
              <BsDiscord/>
            </a>
            <a style={{color:'inherit', textDecoration:'none'}} href="contact@fragmentstudios.xyz">
              <FaEnvelope/> 
            </a>
          </div>
        </div>
        <div>
          <div style={{fontSize:'2rem', marginBottom:'1rem'}}>Contact Us</div>
          <div style={{fontSize:'1.25rem', marginBottom:'1rem'}}>Need help or have a question?</div>
          <div>Contact us at: <a style={{textDecoration:'none', color:'rgb(180,180,180)', marginLeft:'1rem'}} href="mailto:contact@fragmentstudios.xyz">contact@fragmentstudios.xyz</a></div>
        </div>
      </div>
      <div>
        Copyright © 2022 - Fragment Studios
      </div>
    </div>
  )
}

export default Footer