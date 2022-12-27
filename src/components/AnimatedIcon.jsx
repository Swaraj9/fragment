import React from 'react'
import { motion } from 'framer-motion'

const AnimatedIcon = ({children, color, ...props}) => {
  return (
    <motion.div 
      style={{color, boxShadow:`0 0 14px 9px ${color}`, borderRadius:'50%', height:'30px', width:'30px', display:'flex', justifyContent:'center', alignItems:'center'}} 
      {...props} 
      transition={{duration:0.5}} 
      initial={{opacity:0, x: 100}} 
      whileInView={{opacity:1, x: 0}} 
      viewport={{once:true}}
    >{children}</motion.div>
  )
}

export default AnimatedIcon