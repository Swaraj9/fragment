import React from 'react'
import {FaDiscord} from 'react-icons/fa'
import '../styles/footer.css'
import A from './A'
import Button from './Button'

const Footer = ({setContact}) => {
  return (
    <div style={{display:'flex', height:'100vh', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
      <div style={{flex:1, display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <div style={{fontSize:'3rem', marginBottom:'2rem'}}>Ready to get started?</div>
        <Button onClick={() => {
          setContact(true);
        }}><a style={{color:'inherit', textDecoration:'none'}} href="#navbar">Schedule a Call</a></Button>
      </div>
      <A className='discordIcon' style={{marginBottom:'1rem', color:'inherit', textDecoration:'none', fontSize:'2rem'}} href="https://discord.gg/r2f8FvQA5F" target="blank">
        <FaDiscord/>
      </A>
    </div>
  )
}

export default Footer