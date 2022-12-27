import React from 'react'
import Button from './Button'
// import avatar1 from '../images/luca.avif'
// import avatar2 from '../images/a_c36209cce64bf47a55868e60352db44b-1-e1663101085141.gif'
import '../styles/portfolio.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import {Carousel} from 'react-responsive-carousel'
// import {TiArrowLeftThick, TiArrowRightThick} from 'react-icons/ti'

const Portfolio = ({setContact}) => {

  return (
    <div id="portfolio" style={{width:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', marginTop:'5rem'}}>
      {/*<div className='portfolioTitle'>What our clients say</div>
      <div className='portfolioSub'>See our impact on past projects by reading our client testimonials.</div>*/}
          {/*<div className='portfolioReferences'>
            <Carousel 
              infiniteLoop 
              showThumbs={false} 
              showStatus={false} 
              renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                    <Button
                      onClick={onClickHandler} 
                      title={label} 
                      style={{
                        display:window.innerWidth >= 870 ? 'block' : 'none',        
                        padding:'2rem',
                        paddingRight:'1rem',
                        paddingLeft:'1rem',
                        borderRadius:'20px',
                        position:'absolute',
                        zIndex:2,
                        top:'calc(50% - 1.1rem)',
                        left:'10px',
                        fontSize: '1.5rem'
                    }}>
                        <TiArrowLeftThick/>
                    </Button>
                )
              }
              renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                    <Button 
                      onClick={onClickHandler} 
                      title={label} 
                      style={{
                        display:window.innerWidth >= 870 ? 'block' : 'none',        
                        padding:'2rem',
                        paddingRight:'1rem',
                        paddingLeft:'1rem',
                        borderRadius:'20px',
                        position:'absolute',
                        zIndex:2,
                        top:'calc(50% - 1.1rem)',
                        right:'10px',
                        fontSize: '1.5rem'
                    }}>
                        <TiArrowRightThick/>
                    </Button>
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
      </div>*/}
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