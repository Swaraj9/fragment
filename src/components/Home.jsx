import React from 'react'
import Button from './Button'
import '../styles/home.css'
import '../styles/wire.css'
import { motion } from 'framer-motion'
import { useRef } from 'react'

const Home = ({setInHome}) => {

  const homeRef = useRef(null);

  return (
    <motion.div onViewportEnter={() => setInHome(true)} onViewportLeave={() => setInHome(false)} ref={homeRef} className='home' id='home'>
        <div className='wireHomeContainer'>
          <motion.div style={{height:'90vh', background:'linear-gradient(transparent, blueviolet)'}} className='wireHome'></motion.div>
        </div>
        <div className='homeMain' style={{flex: 1, display:'flex', flexDirection:'column', alignItems:'center'}}>
            <div className='homeTitle'>FRAGMENT STUDIOS</div>
            <div className='homeSub'>Bring your community vision to life</div>
            <a href="#services"><Button>More Details</Button></a>
        </div>
    </motion.div>
  )
}

export default Home