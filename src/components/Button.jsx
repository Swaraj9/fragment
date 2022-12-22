import React, { useState } from 'react'
import { useCursorContext } from '../cursorContext';

const Button = ({children, ...props}) => {
  const [hover, setHover] = useState(false);

  const {activateCursor, deActivateCursor} = useCursorContext();

  return (
    <button
      onMouseEnter={()=>{
        setHover(true);
        activateCursor();
      }}
      onMouseLeave={()=>{
        setHover(false);
        deActivateCursor();
      }}

      style={{
        backgroundColor: hover ? 'rgb(235,235,235)': 'rgb(255,255,255,0.1)',
        borderColor:'rgb(235,235,235)',
        color: hover ? 'rgb(20,20,20)': 'rgb(235, 235,235)',
        boxShadow:'none',
        padding:'0.75rem',
        paddingRight:'1.5rem',
        paddingLeft:'1.5rem',
        borderStyle:'solid',
        fontSize:'1.1rem',
        fontFamily:'Space Grotesk',
        borderWidth:'0.01rem',
        transitionProperty:'all',
        transitionDuration:'0.5s',
        borderRadius:'10px',
        cursor:'none'
    }} {...props}>{children}</button>
  )
}

export default Button