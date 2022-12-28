import React from 'react'
import Button from './Button'
import '../styles/home.css'
import '../styles/wire.css'
import { motion } from 'framer-motion'
import inlineViolet from '../images/inlineViolet.png'

const Home = () => {
  return (
    <div id='home' style={{width:'100%', display:'flex', alignItems:'center', justifyContent:'center', height:'calc(100vh - 4.7rem)'}}>
        <div className='wireHomeContainer'>
          <motion.div style={{height:'100%', background:'linear-gradient(transparent, blueviolet)'}} className='wireHome'></motion.div>
          <img alt="inline" src={inlineViolet}/>
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