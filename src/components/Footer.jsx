import React from 'react'
import {FaDiscord} from 'react-icons/fa'
import '../styles/footer.css'
import Button from './Button'

const Footer = ({setContact}) => {
  return (
    <div style={{display:'flex', height:'100vh', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
      {/*<div style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly', width:'100%', marginBottom:'3rem'}}>
        <div style={{}}>
          <div style={{fontSize:'2.5rem', marginBottom:'1rem'}}>Fragment Studios</div>
          <div style={{fontSize:'1.25rem', marginBottom:'4rem'}}>Your next solution for Discord Development</div>
          <div style={{display:'flex', justifyContent:'space-evenly', fontSize:'1.75rem'}}>
            <a style={{color:'inherit', textDecoration:'none'}} href="https://twitter.com/fragm3ntstudios">
              <BsTwitter/>
            </a>
            <a style={{color:'inherit', textDecoration:'none'}} href="https://fragmentstudios.xyz/#">
              <FaDiscord/>
            </a>
            <a style={{color:'inherit', textDecoration:'none'}} href="contact@fragmentstudios.xyz">
              <FaEnvelope/> 
            </a>
          </div>
        </div>
        <div>
          <div style={{fontSize:'2rem', marginBottom:'1rem'}}>Contact Us</div>
          <div style={{fontSize:'1.25rem', marginBottom:'1rem'}}>Have an inquiry?</div>
          <div>Contact us at: <a style={{textDecoration:'none', color:'rgb(180,180,180)', marginLeft:'1rem'}} href="mailto:contact@fragmentstudios.xyz">contact@fragmentstudios.xyz</a></div>
        </div>
      </div>
      <div>
        Copyright © 2022 - Fragment Studios
      </div>*/}
      <div style={{flex:1, display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <div style={{fontSize:'3rem', marginBottom:'2rem'}}>Ready to get started?</div>
        <Button onClick={() => {
          setContact(true);
        }}><a style={{color:'inherit', textDecoration:'none'}} href="#navbar">Schedule a Call</a></Button>
      </div>
      <a className='discordIcon' style={{marginBottom:'1rem', color:'inherit', textDecoration:'none', fontSize:'2rem'}} href="https://discord.gg/r2f8FvQA5F" target="blank">
        <FaDiscord/>
      </a>
    </div>
  )
}

export default Footer