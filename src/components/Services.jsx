import React, {useRef, useState} from 'react'
import {motion, AnimatePresence} from "framer-motion";
import '../styles/services.css'
import logo1 from '../images/atlantic-records-logo-puy3lnn7jzsc0ti2vdnm1n98wmc2ap25dd9m5h8s9m.png'
import logo2 from '../images/chibi-dinos-logo-puy3lnn6c50fuktf2qja1bge8fnfcj81ydwdxdysbs.png'
import logo3 from '../images/goat-society-logo-2-puy3lol0l5zjr36qn6zgpm5rvoqdhthkl3s4pqg95m.png'
import logo5 from '../images/warner.png'
import logo6 from '../images/irl.png'
import logo7 from '../images/opera.png'
import '../styles/wire.css'
import { BsCircleFill } from 'react-icons/bs'
import Curly from './Curly';


const Logo = ({index, src, title, text}) => {

  const [active, setActive] = useState(false);

  return(
    <div className='logo'>
      <motion.img whileHover={{scale:1.2}} onHoverStart={() => setActive(true)} onHoverEnd={() => setActive(false)} style={{height:'100%'}} src={src} alt={`Logo ${index}`}/>
      <AnimatePresence>
      {active && 
      <motion.div initial={{scale:0.5, opacity: 0}} animate={{scale:1, opacity:1}} className='modal'>
        <div className='modalTitle'>{title}</div>
        <div className='modalText'>{text}</div>  
      </motion.div>}
      </AnimatePresence>
    </div>
  )
}

const Subcard = ({title, text, index})=>{
  const myRef = useRef(null)

  return(
    <motion.div
      initial={{opacity:0, translateY: 200}}
      whileInView={{opacity:1, translateY: 0}}
      transition={{duration:0.7, delay: window.innerWidth >= 600 ? index*0.2 : 0}}
      viewport={{margin:'400px'}}
      ref = {myRef}
      className='subCard'
      style={{marginTop:window.innerWidth >= 870 ?`${index%2===0?0:10}rem` : '0rem'}}
    >
      <div className='subCardTitle' style={{display:'flex', alignItems:'center'}}><BsCircleFill size='12px' style={{marginRight:'15px', marginLeft:'-30px', color:'rgba(235,235,235,0.4)', backdropFilter:'blur(15px)'}}/>{title}</div>
      <div className='subCardText'>{text}</div>
    </motion.div>
  )
}

const Card = ({main, sub, active, deactive, id}) => {
  return (
    <motion.div 
      onViewportEnter={()=>{active()}}
      onViewportLeave={()=>{deactive()}}
      viewport={{margin:'-250px'}}
      className='card'
      id={id}
    >
      <div className='cardTitle'>{main}</div>
      <div className='subcardContainer' style={{display:'flex', width:"100%", justifyContent:'space-evenly', alignItems:'flex-start'}}>
        {sub.map((item, index) => <Subcard title={item[0]} text={item[1]} index={index}/>)}
      </div>
    </motion.div>
  )
}


const Services = () => {  

  const [activeCircles, setActiveCircles] = useState([false,false,false,false]);
  const [inServices, setInServices] = useState(false);
  const [clients, setClients] = useState(0);
  const [users, setUsers] = useState(0);

  const increaseClientsAndUsers = () => {

    const clientInterval = setInterval(()=>{
      setClients(clients => {
        if(clients < 63){
          return clients + 1 
        }else{
          clearInterval(clientInterval)
          return clients
        }
      })
    }, 50)
    
    const userInterval = setInterval(()=>{
      setUsers(users => {
        if(users < 2000){
          return users + 50
        }else{
          clearInterval(userInterval)
          return users
        }
      })
    }, 10)
  }

  const myRef = useRef(null);
  const cardsRef = useRef(null);

  const setCricle = (index, active=true) => {
    const newArr = [...activeCircles];
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
    <div className='services' style={{display:'flex', alignItems:'stretch'}}>
      <div className='wireServicesContainer'>
        <Curly color = 'red' prevColor='blueviolet' index={1}/>
        <Curly color = '#ff00bb' prevColor='red' index={2}/>
        <Curly color = '#ff7a00' prevColor='#ff00bb' index={3}/>
        <Curly color = '#8a2be2' prevColor='#ff7a00' index={4}/>
        <div style={{height:'300px'}}><motion.div
          initial={{height:'0%'}} whileInView={{height:'100%'}} transition={{duration: 1}} viewport={{once:true}} 
          style={{marginTop:'-10px', height:'100%', background:'linear-gradient(blueviolet, transparent)'}} 
          className='wireHome'
        ></motion.div></div>
      </div>
      <div ref={myRef} id='services' className='servicesMain'>
        <div className='servicesUpper'>
          <motion.div
            initial={{opacity:0, translateY: 200}}
            whileInView={{opacity:1, translateY: 0}}
            transition={{duration:0.7}}
            viewport={{margin:'400px', once:true}}
          >
            <div className='servicesTitle'>Who We Are</div>
            <div className='servicesSub'>Fragment Studios' multifaceted Discord creative team design and develop strategies to meet and exceed your community's needs. We have been professionally managing and marketing Communities on Discord for 4+ years and have built a network of over 2 million Discord users while working with over 60 clients ranging from DeFi projects, musical artists, and the largest social servers on the platform.</div>
          </motion.div>
          <motion.div
            initial={{opacity:0, translateY: 200}}
            whileInView={{opacity:1, translateY: 0}}
            transition={{duration:0.7}}
            viewport={{margin:'400px', once:true}}
          >
            <div className='servicesTitle'>Our Portfolio</div>
            <div className='servicesSub' style={{height:'100px'}}>Check out our list of notable past client projects, covering a wide range of niches such as Crypto, NFTs, Metaverse, Music, Social, Gaming, and more!</div>
          </motion.div>
          <motion.div 
            initial={{opacity:0, translateX:-300}}
            whileInView={{opacity:1, translateX:0}}
            transition={{duration:0.5}}
            className="portfolioClients"
            style={{width:'100%', marginTop:'4rem', display:'flex', justifyContent:'space-evenly', alignItems:'center'}}
          >
            <motion.div onViewportEnter={increaseClientsAndUsers}>
              <div style={{fontSize:'1.5rem', width:'15rem', textAlign: 'center'}}>{clients}+ Trusted Clients</div>
              <div style={{fontSize:'1.5rem', width:'15rem', textAlign: 'center'}}>{`${parseInt(users/1000) === 0 ? '' : parseInt(users/1000) + ','}${users%1000 === 0 ? '000' : users%1000},000`}+ User Network</div>
            </motion.div>
            <div className='portfolioLine' style={{width:'0.1rem', height:'7rem', backgroundColor:'rgb(235,235,235)'}}></div>
            <div className='logos' style={{width:'100%', display:'flex', justifyContent:'space-evenly'}}>
              <Logo title='Atlantic Records' text='Atlantic Records is home to some of the largest artists worldwide including notable figures such as Skrillex, Cardi B, Jack Harlow and many more. Our team built out a server for dozens of artists catered to their niche of music and personality, successfully creating a community nurtured to their fanbase.' index={0} src={logo1}/>
              <Logo title='Warner Music Group (WMG)' text='Warner Music Group, one of the biggest record label conglomerates in the industry, recently teamed up with Sandbox, a metaverse platform, to create a virtual world for their artists. We promoted their Discord community using niche targeted marketing to expand their audience.' index={4} src={logo5}/>
              <Logo title='Opera GX' text='Opera GX is a unique web browser that is specifically designed for gaming. We worked with one of their subprojects, Club Koala, to grow their social presence within the gaming niche.' index={6} src={logo7}/>
              <Logo title='IRL App' text='IRL is a group messenger application with 20+ million monthly users. We worked with their new application Memix, a meme creation app, to grow and manage a meme centered community and drive traffic to Memix and their meme creator Discord bot.' index={5} src={logo6}/>
              <Logo title='Chibi Dinos' text='Chibi Dinos is a pfp NFT collection with 8 figures of revenue. We marketed their Discord community with niche targeted promotions pre-mint to increase their engagement leading up to mint.' index={1} src={logo2}/>
              <Logo title='The GOAT Society' text='The GOAT Society is a pfp NFT collection with hand-drawn goat art. We marketed and managed their Discord community post-mint leading up to the release of their second collection.' index={2} src={logo3}/>
            </div>
          </motion.div>
        </div>
        <div ref={cardsRef} className='cards' style={{height:'100%', padding:'2rem', width:'85%', display:'flex', flexDirection:'row', alignItems:'flex-start'}}>
          {inServices && <div className='servicesMobile'>
            <div className="servicesMobileButton"><a style={{textDecoration:'none', color:'inherit'}} href="#strategize">Craft</a></div>
            <div className="servicesMobileButton"><a style={{textDecoration:'none', color:'inherit'}} href="#build">Build</a></div>
            <div className="servicesMobileButton"><a style={{textDecoration:'none', color:'inherit'}} href="#operate">Launch</a></div>
            <div className="servicesMobileButton"><a style={{textDecoration:'none', color:'inherit'}} href="#grow">Grow</a></div>
            <div className="servicesMobileButton"><a style={{textDecoration:'none', color:'inherit'}} href="#footer">Contact</a></div>
          </div>}
          <motion.div onViewportEnter={() => setInServices(true)} onViewportLeave={() => setInServices(false)}>
            <Card
              id="strategize" 
              active={() => {setCricle(0, true)}}
              deactive={() => {setCricle(0, false)}}
              main="Craft Your Road Map" 
              sub={[["Assess","We analyze your product info, community/product roadmap, graphic assets, marketing materials, and community/product roadmap to build a rough draft of how the community will be organized and released."], ["Discuss", "Bring our teams together to align our visions and provide insight on server goals, key performance indicators, and aesthetic preferences."], ["Map", "Develop a comprehensive community plan and collaborate with your team to ensure that all server goals are met and all available resources are utilized effectively. Once the plan is finalized, put it into action to build a thriving and optimized community."]]}
            />
            <Card
              id="build" 
              active={() => {setCricle(1, true)}}
              deactive={() => {setCricle(1, false)}}
              main="Build Out Your Community" 
              sub={[["Structure","We create a skeleton of the community structure to build upon and aid in the creative process."], ["Develop", "Setup a role hierarchy and secure role/channel based permissions. Also introduce a bot structure for community security, general server needs, and increased engagement."], ["Design", "Using the community plan, we optimize and design the community structure to meet the desired aesthetic through graphic utilization, role/channel name customization, and introducing company specific channels"]]}
            />
            <Card
              id="operate" 
              active={() => {setCricle(2, true)}}
              deactive={() => {setCricle(2, false)}}
              main="Launch Your Community" 
              sub={[["Moderation","Bring on our experienced globally-based moderation team to engage with the community and keep the server safe."], ["Engage", "Have our event team create an event calendar and host regular server activities to nurture a tight knit community."], ["Analyze", "Our team will provide you 24/7 up-to-date analytics of community growth, engagement, and retention to adapt to shortcomings and increase the quality of the community."]]}
            /> 
            <Card
              id="grow" 
              active={() => {setCricle(3, true)}}
              deactive={() => {setCricle(3, false)}}
              main="Grow Your Presence" 
              sub={[["Market","Have our team run marketing campaigns within your designated niche to increase brand awareness and grow your project community."], ["Amplify", "Our marketing team will build a game plan to optimize and utilize all organic growth funnels to maximize community reach."], ["Collaborate", "Organize project partnerships with other communities within your niche to bring new faces into the existing community."]]}
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Services