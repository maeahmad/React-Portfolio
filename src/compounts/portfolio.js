import React from 'react';
import Projects from './projects';

function Portfolio() {
    // All functional components must have a return method that contains JSX.
    // We return all the JSX inside a parent element with a className of "container".
    return (
        <div className="container">
            <Projects></Projects>

        </div>
    );
}

export default Portfolio