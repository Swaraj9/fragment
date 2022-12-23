import React from 'react'
import avatarJosh from '../images/ezgif.com-gif-maker-300x300.webp'
import avatarAstlin from '../images/astlin-300x300.gif'
import {BsTwitter} from 'react-icons/bs'
import {FaDiscord, FaEnvelope} from 'react-icons/fa'
import '../styles/about.css'
import A from './A'

const About = ({setContact}) => {
  return (
    <div id="about" className='about' style={{marginTop:'3rem', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
      <div className='aboutTitle' style={{fontSize:'3rem', marginBottom:'2rem', width:"80%", textAlign:'center'}}>Our Team</div>
      <div className='aboutSubtitle' style={{textAlign:'center', fontSize:'1.5rem', width:'80%', maxWidth:'1000px', letterSpacing:'0.1', lineHeight:'2.5rem', marginBottom:'3rem'}}>Meet the team that makes the magic happen</div>
      <div className='aboutFounders'>
        <div className='aboutFounder'>
          <img style={{borderRadius:'0.5rem', width:'100%'}} src={avatarJosh} alt="avatar"/>
          <div style={{fontSize:'1.5rem',marginTop:'0.5rem', marginBottom:'1rem'}}>Josh (JXSH)</div>
          <div style={{marginBottom:'1rem'}}>CEO and Co-Founder</div>
          <div style={{display:'flex', justifyContent:'space-evenly', fontSize:'1.75rem'}}>
            <A style={{color:'inherit', textDecoration:'none'}} href="https://twitter.com/jxshdiscord" target="blank">
              <BsTwitter/>
            </A>
            <A style={{color:'inherit', textDecoration:'none'}} href="https://discord.com/users/399266210442772480" target="blank">
              <FaDiscord/>
            </A>
            <A style={{color:'inherit', textDecoration:'none'}} href="josh@fragmentstudios.xyz" target="blank">
              <FaEnvelope/> 
            </A>
          </div>
        </div>
        <div className='aboutFounder'>
          <img style={{borderRadius:'0.5rem', width:'100%'}} src={avatarAstlin} alt="avatar"/>
          <div style={{fontSize:'1.5rem',marginTop:'0.5rem', marginBottom:'1rem'}}>Astlin</div>
          <div style={{marginBottom:'1rem'}}>COO and Co-Founder</div>
          <div style={{display:'flex', justifyContent:'space-evenly', fontSize:'1.75rem'}}>
            <A style={{color:'inherit', textDecoration:'none'}} href="https://twitter.com/0xAstlin" target="blank">
              <BsTwitter/>
            </A>
            <A style={{color:'inherit', textDecoration:'none'}} href="https://discord.com/users/338586922081583104" target="blank">
              <FaDiscord/>
            </A>
            <A style={{color:'inherit', textDecoration:'none'}} href="astlin@fragmentstudios.xyz" target="blank">
              <FaEnvelope/> 
            </A>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About