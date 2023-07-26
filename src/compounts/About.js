import React from 'react';
import myPhoto from "../my-photo.gif"

function About() {
    // All functional components must have a return method that contains JSX.
    // We return all the JSX inside a parent element with a className of "container".
    // JSX uses "className" instead of class, img and input need to be self closing <img />, inline style is done like style={{"margin" : "10px"}}
    return (
        <div className="container">
            <div className="Intro">
                <img className="profile-image" src={myPhoto} alt="picture of myself" width="250xp" height="250xp"></img>
                <h2>Hello! My name is Mae Ahmad. I am a Full Stack Web Developer.</h2>
                <p> I love coding and use it to solve real world problems. I have been making projects since 2023 using
                    HTML, CSS, JavaScript and more. I am also passionate about Art in all its forms as I enjoy drawing, painting and music.
                </p></div>
            <h4>As a Teacher</h4>
            <p>
                For more than twelve years, I taught ESL, Math, Science and other subjects at various settings locally and overseas. My students varied from elementary and high schoolers to adult learners. Over the years, I have become an expert at commanding student attention and managing both small and large classrooms. In my view, every student is capable to reach their full potential if right circumstances were provided to them. My number one job as a teacher was to facilitate learning in a positive environment and create the one-to-one connection with my students so they can reach their full potential and excel. I have great enthusiasm for teaching and flexibility to adapt.
                As part of aiming to perfect my skills I have earned a Certification in Academic Writing from McMaster University that furthered my academic writing skills.
            </p>
            <h4>As a Developer</h4>
            <p>
                Through my teaching career I was involved in teaching coding as part of Ontario Math Curriculum to various grades and was involved in using platforms such as code.org and scratch.com to teach coding for students in grade 1 to grade 7. As my enthusiasm for teaching coding and programming to young learners grow, I felt the need to further my education in this field. Therefore, I joined University of Toronto Full Stack Coding BootCamp and was able to graduate in Aug. 2023. Through the boot camp I acquired many skills that enabled me to be expert as a front-end and back end-web developer with practicing and creating many challenges and projects to showcase.
            </p>

        </div>
    );
}

export default About