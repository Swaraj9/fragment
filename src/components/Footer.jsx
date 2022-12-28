import React from 'react'
import {FaDiscord, FaLinkedin, FaTwitter} from 'react-icons/fa'
import '../styles/footer.css'
import A from './A'
import Button from './Button'

const Footer = ({setContact}) => {
  return (
    <div style={{display:'flex', height:'100vh', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
      <div style={{flex:1, width:'100%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <div style={{fontSize:'4rem', marginBottom:'2rem', textAlign:'center', width:'80%'}}>Ready to get started?</div>
        <Button onClick={() => {
          setContact(true);
        }}><a style={{color:'inherit', textDecoration:'none'}} href="#navbar">Schedule a Call</a></Button>
      </div>
      <div style={{display:'flex'}}>
        <A className='discordIcon' style={{marginRight:'5rem', marginBottom:'1rem', color:'inherit', textDecoration:'none', fontSize:'2rem'}} href="https://discord.gg/r2f8FvQA5F" target="blank">
          <FaDiscord/>
        </A>
        <A className='discordIcon' style={{marginRight:'5rem', marginBottom:'1rem', color:'inherit', textDecoration:'none', fontSize:'2rem'}} href="https://www.linkedin.com/company/fragment-studios/" target="blank">
          <FaLinkedin/>
        </A>
        <A className='discordIcon' style={{marginBottom:'1rem', color:'inherit', textDecoration:'none', fontSize:'2rem'}} href="https://twitter.com/Fragm3ntStudios" target="blank">
          <FaTwitter/>
        </A>
      </div>
    </div>
  )
}

export default Footer