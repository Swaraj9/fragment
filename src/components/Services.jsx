import React, {useRef} from 'react'
import Button from './Button'
import {motion, useScroll, useTransform} from 'framer-motion'
import '../app.css'

const Subcard = ({title, text, index, scrollDiv})=>{
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    container: scrollDiv,
    target: ref,
    offset: ["start end", "end 0.75"]
  })

  const opacity = useTransform(scrollYProgress, [0,1], [0,1])
  const translateY = useTransform(scrollYProgress, [0, 1], [600, 0])

  return(
    <div
      ref = {ref}
      style={{
        padding:'2rem', 
        borderRadius:'0.25rem',
        paddingBottom:'2rem',
        backgroundColor:'rgb(235,235,235,0.1)',
        marginRight:'1.5rem',
        marginLeft:'1.5rem',
        marginTop:`${index*5}rem`,
        lineHeight:'1.75rem',
        letterSpacing:'0.075rem',
        translateY,
        opacity
      }}
    >
      <div style={{fontSize:'1.5rem', marginBottom:'1rem'}}>{title}</div>
      <div>{text}</div>
    </div>
  )
}

const Card = ({main, sub, style, scrollDiv}) => {
  return (
    <div 
      style={{
        padding:'2rem', 
        borderRadius:'0.25rem',
        paddingBottom:'2rem',
        marginBottom:'1rem',
        transition:'all 0.5s',
        ...style
    }}>
      <div style={{fontSize:'2.5rem', paddingBottom:'2rem'}}>{main}</div>
      <div className='subcardContainer' style={{display:'flex', width:"100%", justifyContent:'space-evenly', alignItems:'flex-start'}}>
        {sub.map((item, index) => <Subcard scrollDiv={scrollDiv} title={item[0]} text={item[1]} index={index}/>)}
      </div>
    </div>
  )
}


const Services = ({scrollDiv}) => {
  return (
    <div id='services' style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
      <div style={{paddingBottom:'3rem', maxWidth:'750px', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
        <div style={{fontSize:'3rem', paddingBottom:'2rem'}}>Our Services</div>
        <div style={{fontSize:'2rem', paddingBottom:'2rem', textAlign:'center'}}>Fragment Studios' multifaceted discord team can take care of all of your community's needs.</div>
        <Button><a style={{color:'inherit', textDecoration:'none'}} href="#portfolio">Explore More</a></Button>
      </div>
      <div className='cards' style={{padding:'2rem', width:'85%', minWidth:'800px', display:'flex', flexDirection:'column', alignItems:'flex-start'}}>
        <Card 
          scrollDiv={scrollDiv}
          main="Strategize" 
          sub={[["Design","We analyze your product documents and marketing timeline to build a comprehensive, actionable plan tailored to your community-building needs."], ["Map", "We draw from our expertise working with top-tier projects to develop an innovative, cutting-edge plan of attack to access your audience, itemizing the steps from ideation to implementation."], ["Evolve", "We are your partner in early stage product building, staying flexible and agile to adapt your community strategy on the fly as you grow."]]}
        />
        <Card 
          scrollDiv={scrollDiv} 
          main="Build" 
          sub={[["Identify","We find your power users and determine the value they can receive from your community."], ["Develop", "From onboarding flows, to ranking and progression, to referral programs, we design the perfect hangout for your audience."], ["Execute", "We install or build the technology required for a bespoke, world-class community experience."]]}
        />
        <Card 
          scrollDiv={scrollDiv} 
          main="Grow" 
          sub={[["Create","We make and post shareable content that will champion your growth and heighten your product awareness."], ["Amplify", "We use organic growth strategies to boost your social presence."], ["Partner", "We promote your project through our vast network of communities, projects, and influencers."]]}
        />
        <Card 
          scrollDiv={scrollDiv} 
          main="Operate" 
          sub={[["Moderate","We provide you with around the clock, white-glove moderation to keep your community safe."], ["Program", "We keep your community’s event calendar full of regular live programming events to drive engagement and camaraderie."], ["Measure", "We manage and measure the core metrics of your community’s health and engagement."]]}
        />
      </div>
    </div>
  )
}

export default Services