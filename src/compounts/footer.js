import React from 'react';

function Footer() {
    // All functional components must have a return method that contains JSX.
    // We return all the JSX inside a parent element with a className of "container".
    return (
        <div className="footer-container">

            <a href="https://github.com/maeahmad/"><i class="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/mae-ahmad-70095b24/"><i class="fab fa-linkedin"></i></a >
            <a href="https://stackoverflow.com/"><i class="fab fa-stack-overflow"></i></a >
        </div >


    );
}

export default Footer