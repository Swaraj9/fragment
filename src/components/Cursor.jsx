import React, {useState, useEffect} from 'react'
import '../styles/cursor.css'
import { motion } from 'framer-motion'
import { useCursorContext } from '../cursorContext';
import innerCursor from '../images/cursorInner.png' 

const Cursor = () => {
    const [mousePos, setMousePos] = useState({x:0,y:0});

    const {cursorActive} = useCursorContext();

    useEffect(() => {
      const handleMouseMove = (event) => {
        setMousePos({ x: event.clientX, y: event.clientY });
      };
  
      window.addEventListener('mousemove', handleMouseMove);
  
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);

    const variants = {
        default:{
            x:mousePos.x - 15,
            y:mousePos.y - 15,
            backgroundColor:'rgb(0,0,0,0)'
        },
        active:{
            x:mousePos.x - 15,
            y:mousePos.y - 15,
            backgroundColor:'rgb(0,0,0,0.8)',
            scale:1.5
        }
    }

    const innerVariants = {
        default:{
            rotate: 0,
            width:'85%',
            height:'85%'
        },
        active:{
            rotate: 135,
            width:'85%',
            height:'85%'
        }
    }

    return (
        <motion.div variants={variants} animate={cursorActive?"active":"default"} transition={{ease:'linear', x:{duration:0.01}, y:{duration:0.01}}} className='cursor'>
            <motion.img variants={innerVariants} animate={cursorActive?"active":"default"} className='innerCursor' src={innerCursor} alt="cursor"/>
        </motion.div>
    )
}

export default Cursor