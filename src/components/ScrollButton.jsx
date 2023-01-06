import React, { useState } from 'react'
import { BsArrowDown } from 'react-icons/bs'
import { motion } from 'framer-motion';

const ScrollButton = ({inHome}) => {

    const [hover, setHover] = useState(false);

    return (
        <motion.div 
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
                position:'fixed', 
                bottom:window.innerWidth >= 600 ? '40px' : '80px', 
                right:window.innerWidth >= 600 ? '40px' : '15px', 
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                flexDirection:'column',
                scale:hover?1.2:1,
                transition:'all 0.5s',
                rotate:inHome?'0deg':'180deg',
                backgroundColor:'rgb(255,255,255,0.1)',
                borderRadius:'50%',
                width: '50px',
                height: '50px',
                border: '2px solid white',
                color: 'white',
            }}    
        >
            <a href={!inHome?'#navbar':'#footer'} style={{textDecoration:'none', color:'inherit'}}>
                <BsArrowDown size='20px' style={{marginTop:'5px'}}/>
            </a>
        </motion.div>
    )
}

export default ScrollButton