import React from 'react'
import { useCursorContext } from '../cursorContext';

const A = ({children, ...props}) => {
  
    const {activateCursor, deActivateCursor} = useCursorContext();
  
    return (
        <a 
            onMouseEnter={()=>{
                activateCursor();
            }}
            onMouseLeave={()=>{
                deActivateCursor();
            }} 
            {...props}
        >{children}</a>
    )
}

export default A