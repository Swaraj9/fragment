import React, { createContext, useContext, useState } from 'react'

const cursorContext = createContext();

export const CursorContextProvider = ({children}) => {
    const [cursorActive, setCursorActive] = useState(false);

    const activateCursor = () => {
        setCursorActive(true);
    }

    const deActivateCursor = () => {
        setCursorActive(false);
    }

    return(
        <cursorContext.Provider value={{cursorActive, activateCursor, deActivateCursor}}>{children}</cursorContext.Provider>
    )
}

export const useCursorContext = () => {
    return useContext(cursorContext);
}