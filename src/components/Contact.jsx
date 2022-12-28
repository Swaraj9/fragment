import React, {useEffect} from 'react'
import '../styles/contact.css'

const Contact = () => {

  useEffect(() => {
    const script = document.createElement('script');
  
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
  
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    }
  }, []);
  
  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center', height:'150vh', backgroundColor:'rgb(0,0,0,0.4)'}}>
      <div style={{fontSize:'3rem', marginBottom:'1.5rem', textAlign:'center', width:'80%'}}>Schedule a call</div>
      <div className='contactSub'>Choose a time to discuss your project and receive a quote for our services.</div>
      <div style={{width:'100%', height:'100%'}}>
        <div className="calendly-inline-widget" data-url="https://calendly.com/fragmentstudios/fragment-client-meeting?hide_gdpr_banner=1" style={{width:'100%', height:'100%',minWidth:'320px'}}></div>
      </div>
    </div>
  )
}

export default Contact