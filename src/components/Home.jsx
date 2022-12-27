import React from 'react'
import Button from './Button'
import '../styles/home.css'
import '../styles/wire.css'
import { FaTwitch } from 'react-icons/fa'
import { motion } from 'framer-motion'
import AnimatedIcon from './AnimatedIcon'

const Home = () => {
  return (
    <div id='home' style={{width:'100%', display:'flex', alignItems:'center', justifyContent:'center', height:'calc(100vh - 4.7rem)'}}>
        <div className='wireHomeContainer'>
          <AnimatedIcon>
            <FaTwitch/>
          </AnimatedIcon>
          <motion.div transition={{delay: 2.5}} initial={{height:'0%'}} animate={{height:'100%'}} className='wireHome'></motion.div>
        </div>
        <div style={{flex: 1, display:'flex', flexDirection:'column', alignItems:'center'}}>
            <div className='homeTitle'>Fragment Studios</div>
            <div className='homeSub'>Bring your community vision to life</div>
            <Button><a style={{textDecoration:'none', color:'inherit'}} href="#services">More Details</a></Button>
        </div>
    </div>
  )
}

export default Home