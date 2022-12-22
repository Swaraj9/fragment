import React from 'react'
import logo1 from '../images/atlantic-records-logo-puy3lnn7jzsc0ti2vdnm1n98wmc2ap25dd9m5h8s9m.png'
import logo2 from '../images/chibi-dinos-logo-puy3lnn6c50fuktf2qja1bge8fnfcj81ydwdxdysbs.png'
import logo3 from '../images/goat-society-logo-2-puy3lol0l5zjr36qn6zgpm5rvoqdhthkl3s4pqg95m.png'
import logo4 from '../images/pudgy-logo-puy3lpiupt30hsqorrcj6azbf7e5rxfimn7cvxvzzc.png'
import logo5 from '../images/warner-music-logo-puy3lpiwf7d83rvwvqeq6v70c3gk455v89xmnrf5d4.png'
import logo6 from '../images/246x0w.webp'
import {motion} from 'framer-motion'
import Button from './Button'
import avatar1 from '../images/luca.avif'
import avatar2 from '../images/a_c36209cce64bf47a55868e60352db44b-1-e1663101085141.gif'
import '../styles/portfolio.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel'
import { useCursorContext } from '../cursorContext'

const Logo = ({index, src}) => {
  return(
    <motion.img style={{height:'80px'}} whileHover={{scale:1.2, rotate:45}} src={src} alt={`Logo ${index}`}/>
  )
}

const Portfolio = ({setContact}) => {

  const {activateCursor, deActivateCursor} = useCursorContext();

  return (
    <div id="portfolio" style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', marginTop:'5rem'}}>
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
        <Logo index={5} src={logo6}/>
        <Logo index={3} src={logo4}/>
        <Logo index={1} src={logo2}/>
        <Logo index={2} src={logo3}/>
      </motion.div>
      <div className='portfolioTitle' style={{textAlign:'center'}}>What our clients say</div>
      <div className='portfolioSub' style={{marginBottom:'3rem'}}>See our impact on past projects by reading our client testimonials.</div>
          <div className='portfolioReferences' style={{
            width:'80%',
            maxWidth:'1000px'
          }}>
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
                        borderColor:'rgb(235,235,235)',
                        boxShadow:'none',
                        padding:'0.75rem',
                        paddingRight:'1.5rem',
                        paddingLeft:'1.5rem',
                        borderStyle:'solid',
                        fontSize:'1.1rem',
                        borderWidth:'0.01rem',
                        borderRadius:'10px',
                        backgroundColor:'rgb(235,235,235,0.1)',
                        color:'white',
                        position:'absolute',
                        zIndex:2,
                        top:'calc(50% - 1.1rem)',
                        left:'10px',
                        cursor:'none'
                    }}>
                        {"<"}
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
                        borderColor:'rgb(235,235,235)',
                        boxShadow:'none',
                        padding:'0.75rem',
                        paddingRight:'1.5rem',
                        paddingLeft:'1.5rem',
                        borderStyle:'solid',
                        fontSize:'1.1rem',
                        borderWidth:'0.01rem',
                        borderRadius:'10px',
                        backgroundColor:'rgb(235,235,235,0.1)',
                        color:'white',
                        position:'absolute',
                        zIndex:2,
                        top:'calc(50% - 1.1rem)',
                        right:'10px',
                        cursor:'none'
                    }}>
                        {">"}
                    </button>
                )
              }
            >
              <div className='portfolioReferenceContainer' style={{alignItems:'center', display:'flex'}}>
                <img className='portfolioImage' src={avatar1} alt="Avatar" style={{maxWidth:'220px', maxHeight:'300px', borderRadius:'0.5rem', marginRight:'2rem'}}/>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                  <div>Josh is one of the most elite marketers in web3.</div>
                  <div style={{marginBottom:'2rem'}}>His growth is different and he is nothing short of professional! Great management team as well!</div>
                  <div>Luca Netz</div>
                  <div>CEO - Pudgy Penguins</div>
                </div>
              </div>
              <div className='portfolioReferenceContainer' style={{alignItems:'center', display:'flex'}}>
                <img className='portfolioImage' src={avatar2} alt="Avatar" style={{maxWidth:'220px', maxHeight:'300px', borderRadius:'0.5rem', marginRight:'2rem'}}/>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                  <div>Helped grow my 2 million member network and provided me hundreds of thousands of joins.</div>
                  <div style={{marginBottom:'2rem'}}>One of the best teams on the platform.</div>
                  <div>Jet</div>
                  <div>Owner - Jet's Dream World</div>
                </div>
              </div>
            </Carousel>
          </div>
      <div className='portfolioTitle' style={{textAlign:'center'}}>The Best Solutions for our clients</div>
      <div className='portfolioSub' style={{width:'80%', marginBottom:'2rem'}}>We offer a customizable approach to our clients based on project needs. Click below to schedule a call to discuss your interests and receive a quote for our services.</div>
      <div style={{
        marginBottom:'7rem',
        padding:'2rem', 
        paddingBottom:'2rem',
        backgroundColor:'rgb(235,235,235,0.1)',
        lineHeight:'1.75rem',
        letterSpacing:'0.075rem',
        borderWidth:'0.05rem',
        borderStyle:'solid',
        maxWidth:'400px',
        textAlign:'center',
        borderRadius:'10px',
        boxShadow:'10px -10px 30px 5px rgb(255,255,255,0.32)'
      }}>
        <div style={{fontSize:'2rem', marginBottom:'1rem'}}>Recieve a Quote</div>
        <div style={{fontSize:'2rem', marginBottom:'2rem'}}>$0</div>
        <div style={{marginBottom:'2rem', textAlign:'start', paddingLeft:'3rem'}}>
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