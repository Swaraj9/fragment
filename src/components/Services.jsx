import React, {useRef, useState} from 'react'
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

  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);

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
      <div style={{marginBottom:'3rem', width:'calc(100vw - 50px)'}} className="parallax">
        <motion.div className="scroller" style={{ x, display:'flex', width:'100%'}}>
          <span style={{display:'flex', justifyContent:'space-between', width:'100%', marginRight:'2rem'}}>{children} </span>
          <span style={{display:'flex', justifyContent:'space-between', width:'100%'}}>{children} </span>
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
        paddingTop:window.innerWidth >= 870 ?`${index%2===0?0:10}rem` : '0rem',
        lineHeight:'1.75rem',
        letterSpacing:'0.075rem',
        position:'relative'
      }}
    >
      <div style={{fontSize:'2rem', marginBottom:'1.5rem'}}>{title}</div>
      <div>{text}</div>
    </motion.div>
  )
}

const Card = ({main, sub, style, active, deactive}) => {
  return (
    <motion.div 
      onViewportEnter={()=>{active()}}
      onViewportLeave={()=>{deactive()}}
      viewport={{margin:'-250px'}}
      style={{
        padding:'2rem', 
        borderRadius:'0.25rem',
        paddingBottom:'2rem',
        marginBottom:'1rem',
        transition:'all 0.5s',
        ...style
    }}>
      <div style={{width:'70%', height:'70%', position:'absolute'}}>
      </div>
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
      <div className='parallaxTextContainer'>
        <ParallaxText scrollRef={scrollRef} baseVelocity={-5}>
          <a className='parallaxText1' href="#strategize">Strategize</a>  
          <a className='parallaxText2' href="#build">Build</a>
          <a className='parallaxText1' href="#grow">Grow</a> 
          <a className='parallaxText2' href="#operate">Operate</a>
        </ParallaxText>
        <ParallaxText scrollRef={scrollRef} baseVelocity={5}>
          <a className='parallaxText1' href="#strategize">Strategize</a>  
          <a className='parallaxText2' href="#build">Build</a>
          <a className='parallaxText1' href="#grow">Grow</a> 
          <a className='parallaxText2' href="#operate">Operate</a>
        </ParallaxText>
      </div>
      <div style={{paddingBottom:'3rem', maxWidth:'750px', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
        <div className='servicesTitle'>Our Services</div>
        <div className='servicesSub'>Fragment Studios' multifaceted Discord Creative Team works with your team to meet and exceed your community' needs.</div>
      </div>
      <div ref={cardsRef} className='cards' style={{height:'100%', padding:'2rem', width:'85%', display:'flex', flexDirection:'row', alignItems:'flex-start'}}>
        <div className='servicesSticky'>
          <div style={{position:'absolute', height:'85%', width:'2px', backgroundColor:'rgb(135,135,135,0.25)', boxShadow:'0 0 21px 9px rgb(135,135,135,0.25)', marginLeft:'8.7rem', zIndex:-10}}></div>
          <div id="strategize" style={{display:'flex'}}>
            <div style={{color:activeCircles[0]?'white':'rgb(135,135,135, 0.25)', marginRight:'1rem', width:'7rem', fontSize:'18px'}}>Strategize</div>
            <div style={{transition:'all 0.5s', boxShadow:activeCircles[0]?'0 0 14px 9px white':'none', backgroundColor:activeCircles[0]?'white':'rgb(135,135,135, 0.25)', width:'1.5rem', height:'1.5rem', borderRadius:'50%', marginBottom:activeCircles[0]?'50vh':'2rem', marginTop:'0.5rem'}}></div>
          </div>
          <div id="build" style={{display:'flex'}}>
            <div style={{color:activeCircles[1]?'white':'rgb(135,135,135, 0.25)', marginRight:'1rem', width:'7rem', fontSize:'18px'}}>Build</div>
            <div style={{transition:'all 0.5s', boxShadow:activeCircles[1]?'0 0 14px 9px white':'none', backgroundColor:activeCircles[1]?'white':'rgb(135,135,135, 0.25)', width:'1.5rem', height:'1.5rem', borderRadius:'50%', marginBottom:activeCircles[1]?'50vh':'2rem', marginTop:'0.5rem'}}></div>
          </div>
          <div id="grow" style={{display:'flex'}}>
            <div style={{color:activeCircles[2]?'white':'rgb(135,135,135, 0.25)', marginRight:'1rem', width:'7rem', fontSize:'18px'}}>Grow</div>
            <div style={{transition:'all 0.5s', boxShadow:activeCircles[2]?'0 0 14px 9px white':'none', backgroundColor:activeCircles[2]?'white':'rgb(135,135,135, 0.25)', width:'1.5rem', height:'1.5rem', borderRadius:'50%', marginBottom:activeCircles[2]?'50vh':'2rem', marginTop:'0.5rem'}}></div>
          </div>
          <div id="operate" style={{display:'flex'}}>
            <div style={{color:activeCircles[3]?'white':'rgb(135,135,135, 0.25)', marginRight:'1rem', width:'7rem', fontSize:'18px'}}>Operate</div>
            <div style={{transition:'all 0.5s', boxShadow:activeCircles[3]?'0 0 14px 9px white':'none', backgroundColor:activeCircles[3]?'white':'rgb(135,135,135, 0.25)', width:'1.5rem', height:'1.5rem', borderRadius:'50%', marginBottom:activeCircles[3]?'100%':'2rem', marginTop:'0.5rem'}}></div>
          </div>
        </div>
        <div>
          <Card 
            active={() => {setCricle(0, true)}}
            deactive={() => {setCricle(0, false)}}
            main="Craft Your Road Map" 
            sub={[["Assess","We analyze your product info, community/product roadmap, graphic assets, marketing materials, and community/product roadmap to build a rough draft of how the community will be organized and released."], ["Collaborate", "Meet with our team to discuss server goals, key performance indicators, and aesthetic preferences to align our visions and begin crafting the final community plan."], ["Map", ""]]}
          />
          <Card 
            active={() => {setCricle(1, true)}}
            deactive={() => {setCricle(1, false)}}
            main="Build Out Your Community" 
            sub={[["Structure","We create a skeleton of the community structure to build upon and aid in the creative process."], ["Develop", "Setup a role hierarchy and secure role/channel based permissions. Also introduce a bot structure for community security, general server needs, and increased engagement."], ["Design", "Using the community plan, we optimize and design the community structure to meet the desired aesthetic through graphic utilization, role/channel name customization, and introducing company specific channels"]]}
          />
          <Card 
            active={() => {setCricle(2, true)}}
            deactive={() => {setCricle(2, false)}}
            main="Champion Your Growth" 
            sub={[["Create","We make and post shareable content that will champion your growth and heighten your product awareness."], ["Amplify", "We use organic growth strategies to boost your social presence."], ["Partner", "We promote your project through our vast network of communities, projects, and influencers."]]}
          />
          <Card 
            active={() => {setCricle(3, true)}}
            deactive={() => {setCricle(3, false)}}
            main="Launch Your Community" 
            sub={[["Moderation","Bring on our experienced globally-based moderation team to engage with the community and keep the server safe."], ["Engage", "Have our event team create an event calendar and host regular server activities to nurture a tight knit community."], ["Analyze", "Our team will provide you 24/7 up-to-date analytics of community growth, engagement, and retention to adapt to shortcomings and increase the quality of the community."]]}
          />
        </div>
      </div>
    </div>
  )
}

export default Services