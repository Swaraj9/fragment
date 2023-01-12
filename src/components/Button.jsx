import React, { useState } from 'react'
import '../styles/button.css';

const Button = ({children, style, ...props}) => {
  const [hover, setHover] = useState(false);

  return (
    <button
      onMouseEnter={()=>{
        setHover(true);
      }}
      onMouseLeave={()=>{
        setHover(false);
      }}

      className="Button"

      style={{
        backgroundColor: hover ? 'rgb(235,235,235)': 'rgba(174, 114, 229,0.2)',
        color: hover ? 'blueviolet': 'rgb(235,235,235)',
        ...style
      }} 
      {...props}
    >{children}</button>
  )
}

export default Button