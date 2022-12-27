import React from 'react'
import { motion } from 'framer-motion'

const AnimatedIcon = ({children, ...props}) => {
  return (
    <motion.div {...props} transition={{duration:0.5}} initial={{opacity:0, x: 100}} whileInView={{opacity:1, x: 0}} viewport={{once:true}}>{children}</motion.div>
  )
}

export default AnimatedIcon