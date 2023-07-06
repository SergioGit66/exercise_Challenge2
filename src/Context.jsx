import React, { createContext } from "react";
import { useState } from "react";

export const DarkModeContext = createContext(null);
export default function DarkModeContextProvider ({children}){

const [darkMode, setDarkMode] = useState(null);

return(
    <div className={darkMode}>
    <DarkModeContext.Provider value = {{darkMode, setDarkMode}}>
        {children}
    </DarkModeContext.Provider>
    </div>
)
}