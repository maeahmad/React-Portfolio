import React from 'react';

function Contact() {
    // All functional components must have a return method that contains JSX.
    // We return all the JSX inside a parent element with a className of "container".
    return (
        <div className="container">

            <form className='contact-form' action="/action_page.php">
                <h1>Contact</h1>
                <label for="fname">Name: </label>
                <input type="text" id="name" name="name" placeholder="Your name.."></input>

                <label for="lname">Email Address: </label>
                <input type="text" id="email" name="emailaddress" placeholder="Your email address.."></input>

                <label for="message">Message: </label>
                <textarea id="message" name="message" placeholder="Write something.." style={{ height: "200px" }}></textarea>

                <input className='submit-btn' type="submit" value="Submit"></input>
            </form>
        </div>
    );
}
export default Contact