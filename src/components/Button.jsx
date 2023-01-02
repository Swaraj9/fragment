import React, { useState } from 'react'
import '../styles/button.css';

const Button = ({children, style, ...props}) => {
  const [hover, setHover] = useState(false);

  return (
    <button
      onMouseEnter={()=>{
        setHover(true);
        //activateCursor();
      }}
      onMouseLeave={()=>{
        setHover(false);
        //deActivateCursor();
      }}

      className="Button"

      style={{
        backgroundColor: hover ? 'white': 'rgb(255,255,255,0.1)',
        color: hover ? 'rgb(20,20,20)': 'white',
        ...style
      }} 
      {...props}
    >{children}</button>
  )
}

export default Button