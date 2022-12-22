import React, {useState, useEffect} from 'react'
import '../styles/cursor.css'
import { motion } from 'framer-motion'
import { useCursorContext } from '../cursorContext';
import innerCursor from '../images/Inner.png' 
import outerCursor from '../images/outer.png'

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
            backgroundColor:'rgb(135,135,135,0.3)',
            scale: [1.7, 1.8, 1.7],
            rotate:45
        },
        active:{
            x:mousePos.x - 15,
            y:mousePos.y - 15,
            backgroundColor:'rgb(135,135,135,0.5)',
            scale: [2.2, 2.3, 2.2],
            rotate: -45
        }
    }

    const innerVariants = {
        default:{
            rotate: 0,
            scale:1
        },
        active:{
            rotate: 180,
            scale: 0.6
        }
    }

    return (
        <motion.div variants={variants} animate={cursorActive?"active":"default"} transition={{ease:'linear', x:{duration:0.01}, y:{duration:0.01}, scale:{repeat:'Infinity', duration:1}}} className='cursor'>
            <img className="outerCursor" src={outerCursor} alt="outer"/>
            <motion.img variants={innerVariants} animate={cursorActive?"active":"default"} className='innerCursor' src={innerCursor} alt="cursor"/>
        </motion.div>
    )
}

export default Cursor