import React from 'react'
import Button from './Button'
import avatarJosh from '../images/ezgif.com-gif-maker-300x300.webp'
import avatarAstlin from '../images/astlin-300x300.gif'
import {BsDiscord, BsTwitter} from 'react-icons/bs'
import {FaEnvelope} from 'react-icons/fa'

const About = () => {
  return (
    <div id="about" style={{marginTop:'3rem', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
      <div style={{fontSize:'3rem', marginBottom:'2rem'}}>Our Team</div>
      <div style={{textAlign:'center', fontSize:'1.5rem', maxWidth:'1000px', letterSpacing:'0.1', lineHeight:'2.5rem', marginBottom:'3rem'}}>Meet the team that makes the magic happen</div>
      <div style={{display:'flex', flexDirection:'row', marginBottom:'3rem'}}>
        <div style={{
          marginBottom:'7rem',
          padding:'2rem', 
          borderRadius:'0.25rem',
          paddingBottom:'2rem',
          backgroundColor:'rgb(235,235,235,0.1)',
          lineHeight:'1.75rem',
          letterSpacing:'0.075rem',
          borderWidth:'0.05rem',
          borderStyle:'solid',
          maxWidth:'400px',
          textAlign:'center',
          marginRight:'4rem'
        }}>
          <img style={{borderRadius:'1rem'}} src={avatarJosh} alt="avatar"/>
          <div style={{fontSize:'1.5rem',marginTop:'0.5rem', marginBottom:'1rem'}}>Josh (JXSH)</div>
          <div style={{marginBottom:'1rem'}}>CEO and Co-Founder</div>
          <div style={{display:'flex', justifyContent:'space-evenly', fontSize:'1.75rem'}}>
            <a style={{color:'inherit', textDecoration:'none'}} href="https://twitter.com/0xJxsh">
              <BsTwitter/>
            </a>
            <a style={{color:'inherit', textDecoration:'none'}} href="https://discord.com/users/399266210442772480">
              <BsDiscord/>
            </a>
            <a style={{color:'inherit', textDecoration:'none'}} href="josh@fragmentstudios.xyz">
              <FaEnvelope/> 
            </a>
          </div>
        </div>
        <div style={{
          marginBottom:'7rem',
          padding:'2rem', 
          borderRadius:'0.25rem',
          paddingBottom:'2rem',
          backgroundColor:'rgb(235,235,235,0.1)',
          lineHeight:'1.75rem',
          letterSpacing:'0.075rem',
          borderWidth:'0.05rem',
          borderStyle:'solid',
          maxWidth:'400px',
          textAlign:'center'
        }}>
          <img style={{borderRadius:'1rem'}} src={avatarAstlin} alt="avatar"/>
          <div style={{fontSize:'1.5rem',marginTop:'0.5rem', marginBottom:'1rem'}}>Astlin</div>
          <div style={{marginBottom:'1rem'}}>COO and Co-Founder</div>
          <div style={{display:'flex', justifyContent:'space-evenly', fontSize:'1.75rem'}}>
            <a style={{color:'inherit', textDecoration:'none'}} href="https://twitter.com/0xAstlin">
              <BsTwitter/>
            </a>
            <a style={{color:'inherit', textDecoration:'none'}} href="https://discord.com/users/338586922081583104">
              <BsDiscord/>
            </a>
            <a style={{color:'inherit', textDecoration:'none'}} href="astlin@fragmentstudios.xyz">
              <FaEnvelope/> 
            </a>
          </div>
        </div>
      </div>
      <div style={{
        marginBottom:'7rem',
        padding:'2rem', 
        borderRadius:'0.25rem',
        paddingBottom:'2rem',
        backgroundColor:'rgb(235,235,235,0.1)',
        lineHeight:'1.75rem',
        letterSpacing:'0.075rem',
        borderWidth:'0.05rem',
        borderStyle:'solid',
        textAlign:'center',
        display:'flex'
      }}>
        <div style={{marginRight:'2rem'}}>
          <div>Have a project in mind?</div>
          <div>Schedule a call to discuss onboarding our team</div>
        </div>
        <Button>Get In Touch</Button>
      </div>
    </div>
  )
}

export default About