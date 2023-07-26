import React from 'react';
import Navbar from './Navbar';

function Header() {
    // All functional components must have a return method that contains JSX.
    // We return all the JSX inside a parent element with a className of "container".
    return (
        <div className="container header-style">
            <h1 className="seo">Mae Ahmad</h1>
            <Navbar></Navbar>

        </div>
    );
}

export default Header