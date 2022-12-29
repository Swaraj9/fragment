import React from 'react'
import {FaDiscord, FaLinkedin, FaTwitter} from 'react-icons/fa'
import '../styles/footer.css'
import A from './A'
import Button from './Button'

const Footer = ({setContact}) => {
  return (
    <div style={{height:'65vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', backgroundColor:'rgb(0,0,0,0.4)'}}>
      <div style={{marginBottom:'10rem', flex:1, width:'100%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <div className='footerText'>Ready to get started?</div>
        <Button style={{fontSize:'1.5rem', padding:'1rem', paddingRight:'1.5rem', paddingLeft:'1.5rem'}} onClick={() => {
          setContact(true);
        }}><a style={{color:'inherit', textDecoration:'none'}} href="#navbar">Schedule a Call</a></Button>
      </div>
      <div style={{display:'flex', alignItems:'center', width:'100%', justifyContent:'center'}}>
        <A className='discordIcon' style={{marginRight:'5rem', marginBottom:'1rem', color:'inherit', textDecoration:'none', fontSize:'2rem'}} href="https://discord.gg/r2f8FvQA5F" target="blank">
          <FaDiscord/>
        </A>
        <A className='discordIcon' style={{marginRight:'5rem', marginBottom:'1rem', color:'inherit', textDecoration:'none', fontSize:'2rem'}} href="https://www.linkedin.com/company/fragment-studios/" target="blank">
          <FaLinkedin/>
        </A>
        <A className='discordIcon' style={{marginBottom:'1rem', color:'inherit', textDecoration:'none', fontSize:'2rem'}} href="https://twitter.com/Fragm3ntStudios" target="blank">
          <FaTwitter/>
        </A>
        <div style={{position:'absolute', right:'20px', marginBottom:'1.5rem'}}><A style={{color:'grey'}} href='https://swaraj9.github.io/portfolio/'>Made By Swaraj9</A></div>
      </div>
    </div>
  )
}

export default Footer