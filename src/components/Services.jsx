import React, {useEffect, useRef, useState} from 'react'
import Button from './Button'
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";
import '../styles/services.css'

function ParallaxText({ children, baseVelocity = 100 , scrollRef}) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll({container:scrollRef});
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-25, 25, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

    return (
      <div style={{marginBottom:'3rem'}} className="parallax">
        <motion.div className="scroller" style={{ x }}>
          <span>{children} </span>
          <span>{children} </span>
        </motion.div>
      </div>
    );
  }

const Subcard = ({title, text, index})=>{
  const myRef = useRef(null)

  return(
    <motion.div
      initial={{opacity:0, translateY: 300}}
      whileInView={{opacity:1, translateY: 0}}
      transition={{duration:0.5, delay:index*0.2}}
      ref = {myRef}
      className='subCard'
      style={{
        padding:'2rem', 
        paddingBottom:'2rem',
        marginRight:'1.5rem',
        marginLeft:'1.5rem',
        paddingTop:`${index%2===0?0:10}rem`,
        lineHeight:'1.75rem',
        letterSpacing:'0.075rem',
        position:'relative'
      }}
    >
      <div style={{fontSize:'1.5rem', marginBottom:'1rem'}}>{title}</div>
      <div>{text}</div>
    </motion.div>
  )
}

const Card = ({main, sub, style, active, deactive}) => {
  return (
    <motion.div 
      onViewportEnter={()=>{active()}}
      onViewportLeave={()=>{deactive()}}
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
        {sub.map((item, index) => <Subcard title={item[0]} text={item[1]} index={index}/>)}
      </div>
    </motion.div>
  )
}


const Services = ({scrollRef}) => {  

  const [activeCircles, setActiveCircles] = useState([false,false,false,false]);

  const myRef = useRef(null);
  const cardsRef = useRef(null);

  const setCricle = (index, active=true) => {
    const newArr = activeCircles;
    if(active){
      for(let i=0; i<newArr.length; i++){
        newArr[i] = false;
        if(i === index){
          newArr[i]=true;
        }
      }
    }else{
      for(let i=0; i<newArr.length; i++){
        if(i === index){
          newArr[i]=false;
        }
      }
    }
    setActiveCircles(newArr);
  }

  return (
    <div ref={myRef} id='services' style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
      <div style={{width:'100%', fontSize:'3rem', marginBottom:'10rem'}}>
        <ParallaxText scrollRef={scrollRef} baseVelocity={5}>Strategize Build Grow Operate</ParallaxText>
        <ParallaxText scrollRef={scrollRef} baseVelocity={-5}>Grow Operate Strategize Build</ParallaxText>
      </div>
      <div style={{paddingBottom:'3rem', maxWidth:'750px', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
        <div className='servicesTitle'>Our Services</div>
        <div className='servicesSub'>Fragment Studios' multifaceted discord team can take care of all of your community's needs.</div>
        <Button><a style={{color:'inherit', textDecoration:'none'}} href="#portfolio">Explore More</a></Button>
      </div>
      <div ref={cardsRef} className='cards' style={{height:'100%', padding:'2rem', width:'85%', display:'flex', flexDirection:'row', alignItems:'flex-start'}}>
        <div style={{position:'sticky', top:'10rem', marginRight:'2rem'}}>
          <div style={{display:'flex'}}>
            <div style={{marginRight:'1rem', width:'6.5rem', fontSize:'1.25rem'}}>Strategize</div>
            <div style={{transition:'all 0.5s', boxShadow:activeCircles[0]?'0 0 14px 9px gray':'none', backgroundColor:activeCircles[0]?'white':'rgb(135,135,135, 0.5)', width:'1rem', height:'1rem', borderRadius:'50%', marginBottom:'5rem'}}></div>
          </div>
          <div style={{display:'flex'}}>
            <div style={{marginRight:'1rem', width:'6.5rem', fontSize:'1.25rem'}}>Build</div>
            <div style={{transition:'all 0.5s', boxShadow:activeCircles[1]?'0 0 14px 9px gray':'none', backgroundColor:activeCircles[1]?'white':'rgb(135,135,135, 0.5)', width:'1rem', height:'1rem', borderRadius:'50%', marginBottom:'5rem'}}></div>
          </div>
          <div style={{display:'flex'}}>
            <div style={{marginRight:'1rem', width:'6.5rem', fontSize:'1.25rem'}}>Grow</div>
            <div style={{transition:'all 0.5s', boxShadow:activeCircles[2]?'0 0 14px 9px gray':'none', backgroundColor:activeCircles[2]?'white':'rgb(135,135,135, 0.5)', width:'1rem', height:'1rem', borderRadius:'50%', marginBottom:'5rem'}}></div>
          </div>
          <div style={{display:'flex'}}>
            <div style={{marginRight:'1rem', width:'6.5rem', fontSize:'1.25rem'}}>Operate</div>
            <div style={{transition:'all 0.5s', boxShadow:activeCircles[3]?'0 0 14px 9px gray':'none', backgroundColor:activeCircles[3]?'white':'rgb(135,135,135, 0.5)', width:'1rem', height:'1rem', borderRadius:'50%', marginBottom:'5rem'}}></div>
          </div>
        </div>
        <div>
          <Card 
            active={() => {setCricle(0, true)}}
            deactive={() => {setCricle(0, false)}}
            main="Strategize" 
            sub={[["Design","We analyze your product documents and marketing timeline to build a comprehensive, actionable plan tailored to your community-building needs."], ["Map", "We draw from our expertise working with top-tier projects to develop an innovative, cutting-edge plan of attack to access your audience, itemizing the steps from ideation to implementation."], ["Evolve", "We are your partner in early stage product building, staying flexible and agile to adapt your community strategy on the fly as you grow."]]}
          />
          <Card 
            active={() => {setCricle(1, true)}}
            deactive={() => {setCricle(1, false)}}
            main="Build" 
            sub={[["Identify","We find your power users and determine the value they can receive from your community."], ["Develop", "From onboarding flows, to ranking and progression, to referral programs, we design the perfect hangout for your audience."], ["Execute", "We install or build the technology required for a bespoke, world-class community experience."]]}
          />
          <Card 
            active={() => {setCricle(2, true)}}
            deactive={() => {setCricle(2, false)}}
            main="Grow" 
            sub={[["Create","We make and post shareable content that will champion your growth and heighten your product awareness."], ["Amplify", "We use organic growth strategies to boost your social presence."], ["Partner", "We promote your project through our vast network of communities, projects, and influencers."]]}
          />
          <Card 
            active={() => {setCricle(3, true)}}
            deactive={() => {setCricle(3, false)}}
            main="Operate" 
            sub={[["Moderate","We provide you with around the clock, white-glove moderation to keep your community safe."], ["Program", "We keep your community’s event calendar full of regular live programming events to drive engagement and camaraderie."], ["Measure", "We manage and measure the core metrics of your community’s health and engagement."]]}
          />
        </div>
      </div>
    </div>
  )
}

export default Services