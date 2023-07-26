import React from 'react';
import { Link } from "react-router-dom"

function Navbar() {
    // All functional components must have a return method that contains JSX.
    // We return all the JSX inside a parent element with a className of "container".
    return (
        <div className="container">
            <ul className='navbar'>
                <li><Link to="/">About Me</Link></li>
                <li><Link to="/contact">Contact Me</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/resume">Resume</Link></li>
            </ul>
        </div>
    );
}

export default Navbar