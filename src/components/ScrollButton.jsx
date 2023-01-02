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
                bottom:'40px', 
                right:'40px', 
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                flexDirection:'column',
                fontSize:'20px',
                scale:hover?1.2:1,
                transition:'all 0.5s',
                rotate:inHome?'0deg':'180deg'
            }}    
        >
            <a href={!inHome?'#navbar':'#footer'} style={{textDecoration:'none', color:'inherit'}}>
                <div style={{marginLeft:'-35px', paddingBottom:'40px', rotate:'90deg'}}>Scroll</div>
                <BsArrowDown size='20px'/>
            </a>
        </motion.div>
    )
}

export default ScrollButton