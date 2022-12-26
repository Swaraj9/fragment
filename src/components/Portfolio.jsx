import React from 'react'
import logo1 from '../images/atlantic-records-logo-puy3lnn7jzsc0ti2vdnm1n98wmc2ap25dd9m5h8s9m.png'
import logo2 from '../images/chibi-dinos-logo-puy3lnn6c50fuktf2qja1bge8fnfcj81ydwdxdysbs.png'
import logo3 from '../images/goat-society-logo-2-puy3lol0l5zjr36qn6zgpm5rvoqdhthkl3s4pqg95m.png'
import logo4 from '../images/pudgy-logo-puy3lpiupt30hsqorrcj6azbf7e5rxfimn7cvxvzzc.png'
import logo5 from '../images/warner-music-logo-puy3lpiwf7d83rvwvqeq6v70c3gk455v89xmnrf5d4.png'
import logo6 from '../images/246x0w.webp'
import logo7 from '../images/opera.png'
import {motion} from 'framer-motion'
import Button from './Button'
import avatar1 from '../images/luca.avif'
import avatar2 from '../images/a_c36209cce64bf47a55868e60352db44b-1-e1663101085141.gif'
import '../styles/portfolio.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel'
import { useCursorContext } from '../cursorContext'
import {TiArrowLeftThick, TiArrowRightThick} from 'react-icons/ti'

const Logo = ({index, src}) => {
  return(
    <motion.img style={{height:'80px'}} whileHover={{scale:1.2, rotate:45}} src={src} alt={`Logo ${index}`}/>
  )
}

const Portfolio = ({setContact}) => {

  const {activateCursor, deActivateCursor} = useCursorContext();

  return (
    <div id="portfolio" style={{width:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', marginTop:'5rem'}}>
      <div className='portfolioTitle'>Our Portfolio</div>
      <div className='portfolioSub' style={{width:'80%'}}>Check out our list of notable past client projects, covering a wide range of niches such as Crypto, NFTs, Metaverse, Music, Social, Gaming, and more!</div>
      <motion.div 
        initial={{opacity:0, translateX:-300}}
        whileInView={{opacity:1, translateX:0}}
        transition={{duration:0.5}}
        className="portfolioClients"
        style={{marginTop:'4rem', display:'flex', justifyContent:'space-evenly', width:'100%', alignItems:'center', marginBottom:'7rem'}}
      >
        <div style={{fontSize:'2rem', width:'15rem', textAlign: 'center'}}>63+ Trusted Clients</div>
        <div className='portfolioLine' style={{width:'0.1rem', height:'7rem', backgroundColor:'rgb(235,235,235)'}}></div>
        <Logo index={0} src={logo1}/>
        <Logo index={4} src={logo5}/>
        <Logo index={6} src={logo7}/>
        <Logo index={5} src={logo6}/>
        <Logo index={3} src={logo4}/>
        <Logo index={1} src={logo2}/>
        <Logo index={2} src={logo3}/>
      </motion.div>
      <div className='portfolioTitle'>What our clients say</div>
      <div className='portfolioSub'>See our impact on past projects by reading our client testimonials.</div>
          <div className='portfolioReferences'>
            <Carousel 
              infiniteLoop 
              showThumbs={false} 
              showStatus={false} 
              renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                    <button
                      onClick={onClickHandler} 
                      title={label} 
                      onMouseEnter={()=>{
                        activateCursor();
                      }}
                      onMouseLeave={()=>{
                        deActivateCursor();
                      }}
                      style={{
                        display:window.innerWidth >= 870 ? 'block' : 'none',        
                        borderColor:'rgb(235,235,235)',
                        boxShadow:'none',
                        padding:'2rem',
                        paddingRight:'1rem',
                        paddingLeft:'1rem',
                        borderStyle:'solid',
                        borderWidth:'0.01rem',
                        borderRadius:'20px',
                        backgroundColor:'rgb(235,235,235,0.1)',
                        color:'white',
                        position:'absolute',
                        zIndex:2,
                        top:'calc(50% - 1.1rem)',
                        left:'10px',
                        cursor:'none',
                        fontSize: '1.5rem'
                    }}>
                        <TiArrowLeftThick/>
                    </button>
                )
              }
              renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                    <button 
                      onClick={onClickHandler} 
                      title={label} 
                      onMouseEnter={()=>{
                        activateCursor();
                      }}
                      onMouseLeave={()=>{
                        deActivateCursor();
                      }}
                      style={{
                        display:window.innerWidth >= 870 ? 'block' : 'none',        
                        borderColor:'rgb(235,235,235)',
                        boxShadow:'none',
                        padding:'2rem',
                        paddingRight:'1rem',
                        paddingLeft:'1rem',
                        borderStyle:'solid',
                        borderWidth:'0.01rem',
                        borderRadius:'20px',
                        backgroundColor:'rgb(235,235,235,0.1)',
                        color:'white',
                        position:'absolute',
                        zIndex:2,
                        top:'calc(50% - 1.1rem)',
                        right:'10px',
                        cursor:'none',
                        fontSize: '1.5rem'
                    }}>
                        <TiArrowRightThick/>
                    </button>
                )
              }
            >
              <div className='portfolioReferenceContainer'>
                <img className='portfolioImage' src={avatar1} alt="Avatar"/>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                  <div>Josh is one of the most elite marketers in web3.</div>
                  <div style={{marginBottom:'2rem'}}>His growth is different and he is nothing short of professional! Great management team as well!</div>
                  <div>Luca Netz</div>
                  <div>CEO - Pudgy Penguins</div>
                </div>
              </div>
              <div className='portfolioReferenceContainer'>
                <img className='portfolioImage' src={avatar2} alt="Avatar"/>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                  <div>Helped grow my 2 million member network and provided me hundreds of thousands of joins.</div>
                  <div style={{marginBottom:'2rem'}}>One of the best teams on the platform.</div>
                  <div>Jet</div>
                  <div>Owner - Jet's Dream World</div>
                </div>
              </div>
            </Carousel>
      </div>
      <div className='portfolioTitle'>The Best Solutions for our clients</div>
      <div className='portfolioSub'>We offer a customizable approach to our clients based on project needs. Click below to schedule a call to discuss your interests and receive a quote for our services.</div>
      <div className='portfolioCard'>
        <div className='portfolioTitle' style={{width:'100%'}}>Recieve a Quote</div>
        <div className='portfolioTitle'>$0</div>
        <div style={{marginBottom:'2rem', textAlign:'start'}}>
          - Custom Solutions<br/>
          - Community Management<br/>
          - Multiplatform Marketing Plan<br/>
          - Global Moderation Team<br/>
          - Server Setup/Development<br/>
          - Event Hosting<br/>
          - Growth Optimization<br/>
          - Partnership/Collaboration Management<br/>
          - Bot Development<br/>
          - Security Audits
        </div>
        <Button onClick={() => {
          setContact(true);
        }}><a style={{color:'inherit', textDecoration:'none'}} href="#navbar">Get Started</a></Button>
      </div>
    </div>
  )
}

export default Portfolio