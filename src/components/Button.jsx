import React, { useState } from 'react'

const Button = ({children, ...props}) => {
  const [hover, setHover] = useState(false);

  return (
    <button
      onMouseEnter={()=>{
        setHover(true);
      }}
      onMouseLeave={()=>{
        setHover(false);
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
    }} {...props}>{children}</button>
  )
}

export default Button