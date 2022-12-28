import React from 'react'
import Button from './Button'
import '../styles/home.css'
import '../styles/wire.css'
import { motion } from 'framer-motion'
import { useRef } from 'react'

const Home = () => {

  const homeRef = useRef(null);

  return (
    <div ref={homeRef} className='home' id='home'>
        <div className='wireHomeContainer'>
          <motion.div style={{height:'90vh', background:'linear-gradient(transparent, blueviolet)'}} className='wireHome'></motion.div>
        </div>
        <div className='homeMain' style={{flex: 1, display:'flex', flexDirection:'column', alignItems:'center'}}>
            <div className='homeTitle'>Fragment Studios</div>
            <div className='homeSub'>Bring your community vision to life</div>
            <Button><a style={{textDecoration:'none', color:'inherit'}} href="#services">More Details</a></Button>
        </div>
    </div>
  )
}

export default Home