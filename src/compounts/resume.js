import React from 'react';
import myResume from "../MAE-AHMAD-Resume.docx"
import { Link } from "react-router-dom"
function Resume() {
    // All functional components must have a return method that contains JSX.
    // We return all the JSX inside a parent element with a className of "container".
    return (
        <div className="container">
            <a href={myResume} ><h1>Resume</h1></a>

            <h3>Phone: (905) 572-1872 . Email: ms.mae.ahmad@gmail.com</h3>
            <div className="summary">
                <h3>Professional Summary</h3>
                <p>Full Stack Web Developer with experience in creating websites and applications using the latest technology available. Have great enthusiasm for coding and flexible mind set.</p>
            </div>
            <h3>front-end Proficiencies </h3>
            <ul className='frontend'>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>JQuery</li>
                <li>responsive design</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>

            <h3>Back-end Proficiencies</h3>
            <ul className="backend">
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySql</li>
                <li>Sequelize</li>
                <li>MangoDB</li>
                <li>Compass</li>
                <li>REST</li>
                <li>GraphQL</li>
            </ul>
            <h3> Education </h3>
            <ul className="education">
                <li>Full Stack Web Development- Coding Boot Camp, 8/2023 University of Toronto- Toronto, ON</li>
                <li>Academic Writing- Certificate of Completion, 12/2022 McMaster University- Hamilton, ON</li>
                <li> TESL Ontario Certification of Accreditation (OCELT), 01/2022 TESL Ontario - Toronto, ON</li>
                <li> B.Sc., Bachelor of Science in Life Sciences 09/2006 – 06/2010 McMaster University - Hamilton, ON</li>
            </ul>




        </div >
    );
}

export default Resume