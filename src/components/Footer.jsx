import React from 'react'
import {FaDiscord, FaEnvelope, FaLinkedin, FaTwitter} from 'react-icons/fa'
import '../styles/footer.css'
import A from './A'
import Button from './Button'

const Footer = () => {
  return (
    <div id='footer' style={{height:'80vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
      <div style={{marginBottom:'14rem', flex:1, width:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>
        <div className='footerText'>Ready to get started?</div>
        <div className='footerDiv'>
          <input className='footerInput' placeholder='Your Name'/>
          <input className='footerInput' placeholder='Email'/>
          <input className='footerInput' placeholder='Project Link/Description (Optional)'/>
          <input className='footerInput' placeholder='Twitter (Optional)'/>
          <Button>Submit</Button>
        </div>  
      </div>
      <div style={{display:'flex', alignItems:'center', width:'100%', justifyContent:'center'}}>
        <A className='discordIcon' style={{}} href="https://discord.gg/r2f8FvQA5F" target="blank">
          <FaDiscord/>
        </A>
        <A className='discordIcon' style={{}} href="https://www.linkedin.com/company/fragment-studios/" target="blank">
          <FaLinkedin/>
        </A>
        <A className='discordIcon' style={{}} href="https://twitter.com/Fragm3ntStudios" target="blank">
          <FaTwitter/>
        </A>
        <A className='discordIcon' style={{marginRight:0}} href="mailto:contact@fragmentstudios.xyz" target="blank">
          <FaEnvelope/>
        </A>
      </div>
    </div>
  )
}

export default Footer