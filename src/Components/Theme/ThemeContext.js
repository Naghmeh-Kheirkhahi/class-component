
import React, {createContext, useState} from "react";


export const ThemeContext = createContext();
export const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
        document.body.style.backgroundColor = theme === 'dark' ? 'black' : 'white'; // we don't need to write it
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
