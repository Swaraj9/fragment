import React, { useState } from 'react'
import Button from './Button'

export const Card = ({main, sub, style}) => {
  const [hover, setHover] = useState(false);

  return (
    <div 
      onMouseEnter={()=>{setHover(true)}}
      onMouseLeave={()=>{setHover(false)}}
      style={{
        padding:'2rem', 
        borderRadius:'0.25rem',
        width:'60%',
        paddingBottom:'2rem',
        marginBottom:'5rem',
        transition:'all 0.5s',
        backgroundColor:hover?'rgb(235,235,235,0.1)':'transparent',
        scale:hover?'103%':'100%',
        ...style
    }}>
      <div style={{fontSize:'2.5rem', paddingBottom:'2rem'}}>{main}</div>
      <div style={{fontSize:'1.1rem', wordSpacing:'0.5rem', lineHeight:'1.5rem'}}>{sub}</div>
    </div>
  )
}


const Services = () => {
  return (
    <div id='services' style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
      <div style={{paddingBottom:'3rem', width:'700px', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
        <div style={{fontSize:'3rem', paddingBottom:'2rem'}}>Our Services</div>
        <div style={{fontSize:'2rem', paddingBottom:'2rem', textAlign:'center'}}>Fragment Studios' multifaceted discord team can take care of all of your community's needs.</div>
        <Button><a style={{color:'inherit', textDecoration:'none'}} href="#portfolio">Explore More</a></Button>
      </div>
      <div style={{padding:'2rem', width:'80%', minWidth:'800px', display:'flex', flexDirection:'column', alignItems:'flex-start'}}>
        <Card main="Discord Management" sub="Our team of Discord community managers, moderators and engineers are dedicated to making sure your community is running smoothly. From resolving member issues to managing private and public channels, we can handle just about everything."/>
        <Card main="Multiplatform Marketing" sub="With the help of our sophisticated network, we advertise your Discord server on platforms like Discord, Tiktok, Instagram, Youtube, and more to help you reach the widest possible audience." style={{alignSelf:'flex-end', textAlign:'right'}}/>
        <Card main="Moderation Team" sub="Bring on our globally based moderation team to keep your server secure and engaging."/>
        <Card main="Security Audits" sub="Have our Discord engineers do routine security checks to protect the privacy and security of your users and prevent server intrusions" style={{alignSelf:'flex-end', textAlign:'right'}}/>
      </div>
    </div>
  )
}

export default Services