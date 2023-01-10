import React, { useRef } from 'react'
import {FaDiscord, FaEnvelope, FaLinkedin, FaTwitter} from 'react-icons/fa'
import '../styles/footer.css'
import A from './A'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import Button from './Button'
import {AiFillInfoCircle} from 'react-icons/ai'

const Footer = ({setCaseStudy}) => {

  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_boiqrjn', 'template_8tedsni', form.current, 'npCONrMQSRL9PaGU0')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });


    emailjs.sendForm('service_boiqrjn', 'template_nxzksae', form.current, 'npCONrMQSRL9PaGU0')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <motion.div initial={{opacity:0, translateY: 200}} whileInView={{opacity:1, translateY: 0}} transition={{duration:0.7}} viewport={{margin:'400px', once:true}} ini id='footer' style={{height:'80vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
      <div className='footerMain' style={{marginBottom:'14rem', flex:1, width:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>
        <div className='footerText'>Ready to get started?</div>
        <form ref={form} onSubmit={sendEmail} className='footerDiv'>
          <input required type="text" className='footerInput' name="user_name" placeholder='Your Name'/>
          <input required type="email" name="user_email" className='footerInput' placeholder='Email'/>
          <input className='footerInput' name="user_desc" placeholder='Project Link/Description (Optional)'/>
          <input className='footerInput' name="user_twitter" placeholder='Twitter (Optional)'/>
          <input type="submit" value="Submit" className='footerButton' />
        </form>  
      </div>
      <Button onClick={() => setCaseStudy(true)} style={{marginBottom:'30px', display:'flex', alignItems:'center', fontSize:'20px'}}><AiFillInfoCircle size={20} style={{marginRight:'20px'}}/>Case Studies</Button>
      <div style={{display:'flex', alignItems:'center', width:'100%', justifyContent:'center'}}>
        <A className='discordIcon' style={{}} href="https://discord.gg/r2f8FvQA5F" target="blank">
          <FaDiscord/>
        </A>
        <A className='discordIcon' style={{}} href="https://www.linkedin.com/company/fragment-studios/" target="blank">
          <FaLinkedin/>
        </A>
        <A className='discordIcon' style={{}} href="https://twitter.com/Fragm3ntStudios" target="blank">
          <FaTwitter/>
        </A>
        <A className='discordIcon' style={{marginRight:0}} href="mailto:contact@fragmentstudios.xyz" target="blank">
          <FaEnvelope/>
        </A>
      </div>
    </motion.div>
  )
}

export default Footer