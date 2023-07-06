import { useState, useContext } from "react";
import React from "react";
import { DarkModeContext } from "./Context";




export default function Header() {
    const {darkMode, setDarkMode} = useContext(DarkModeContext);
    return (

        <div>

            <select onChange={event => setDarkMode(event.target.value)}>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
            </select>
            <p>{darkMode}</p>
        </div>
    )

}