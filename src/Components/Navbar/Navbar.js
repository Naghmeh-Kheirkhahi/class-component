
import React, {useContext} from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../Images/logo.png";
import { ThemeContext } from "../Theme/ThemeContext";




function Navbar() {

    const {theme, toggleTheme} = useContext(ThemeContext);


    return (
        <div className="navbar">

            <Link to="/"><img src={logo}/></Link>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About Us</Link></li>
                <li><Link to="/Contact">Contact Us</Link></li>
            </ul>

            <Link to="/">Login</Link>
            <button onClick={toggleTheme}>Switch</button>
        </div>
    );
}

export default Navbar;