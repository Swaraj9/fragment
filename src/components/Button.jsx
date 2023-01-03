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
        backgroundColor: hover ? 'white': 'rgb(138,43,226,0.5)',
        color: hover ? 'blueviolet': 'white',
        ...style
      }} 
      {...props}
    >{children}</button>
  )
}

export default Button