
import React, {useContext} from "react";
import {ThemeContext} from "./ThemeContext";

function ThemeTest() {

    const { theme , toggleTheme } = useContext(ThemeContext);

    const myStyle = {
        backgroundColor: theme === 'dark' ? 'black' : 'white' , 
        color: theme === 'dark' ? 'white' : 'black'
    }

    return (
        <>
            <h1 style={myStyle}>Hello World</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </>
    )
}


export default ThemeTest;