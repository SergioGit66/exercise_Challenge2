import { useState, useContext } from "react";
import React from "react";
import { DarkModeContext } from "./Context";


export default function PokeCard ({name, index}) {
   /*  const {darkMode, setDarkMode} = useContext(DarkModeContext); */
    
    return (
        <div /* className={darkMode} */>
        <p>{name}</p>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`} />
        
     </div>

    
)

}