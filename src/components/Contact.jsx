import React, {useEffect} from 'react'

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
    <div style={{display:'flex', flexDirection:'column', alignItems:'center', height:'150vh'}}>
      <div style={{fontSize:'3rem', marginBottom:'1.5rem'}}>Schedule a call</div>
      <div style={{fontSize:'1.5rem', marginBottom:'1.5rem'}}>Choose a time to discuss your project and receive a quote for our services.</div>
      <div style={{width:'100%', height:'100%'}}>
        <div className="calendly-inline-widget" data-url="https://calendly.com/fragmentstudios/fragment-client-meeting?hide_gdpr_banner=1" style={{width:'100%', height:'100%',minWidth:'320px'}}></div>
      </div>
    </div>
  )
}

export default Contact