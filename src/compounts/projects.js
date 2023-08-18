import React from 'react';
import Project1 from "../Project-1.png"
import Project2 from "../Project-2.png"
import Project3 from "../Project-3.webp"
function Projects() {
    // All functional components must have a return method that contains JSX.
    // We return all the JSX inside a parent element with a className of "container".
    return (
        <div className="container">
            <h1>Projects</h1>
            <article className="articles" id="article1">
                <div>
                    <h3>Scheduler</h3>
                    <p>It is a daily planner to organize my time more effectively.</p>
                    <h4><strong> March 2023</strong></h4>
                    <ul>
                        <li>
                            I can add events to my planner and view my schedule of the day.
                        </li>
                        <li>LAt the top of the screen, I have the date saved.</li>
                    </ul>
                </div>
                <div className="image">
                    <a href="https://maeahmad.github.io/Scheduler/">
                        <img src="https://cdn.lifehack.org/wp-content/uploads/2021/03/online-scheduling.jpg"
                            alt="a person coding" width="350px" />
                    </a>
                    <a href="https://github.com/maeahmad/Scheduler">GitHub</a>
                </div>
            </article>


            <article className="articles" id="article2">
                <div>
                    <h3>Coding Assessment</h3>
                    <p>It is an online timed coding quiz that test students knowledge.</p>
                    <h4><strong> July 2023</strong></h4>
                    <ul>
                        <li>There are 100 seconds to answer 10 questions by choosing one out of four answers.</li>
                        <li>Screen display correct or wrong message at the bottom of the selected answer.</li>
                    </ul>
                </div>
                <div className="image">
                    <a href="https://maeahmad.github.io/The-quiz/">
                        <img src="https://amazingapprenticeships.com/app/uploads/2022/09/Coding-quiz-questions-2.png"
                            alt="a person coding" width="350px" />
                    </a>
                    <a href="https://github.com/maeahmad/The-quiz">GitHub</a>
                </div>
            </article>


            <article className="articles" id="article3">
                <div>
                    <h3>Weather Dashboard</h3>
                    <p>It is a dashboard that allow user to view the weather information upon searching a city.</p>
                    <h4><strong>Feb. 2023</strong></h4>
                    <ul>
                        <li>It takes in an city input from the user. </li>
                        <li>It displays current and 5 days forcast weather information.</li>
                    </ul>
                </div>
                <div className="image">
                    <a href="https://maeahmad.github.io/Weather-Dashboard/">
                        <img src="https://user-images.githubusercontent.com/55324845/70014239-caeeec00-153f-11ea-8638-dea7a7ad31a7.png"
                            alt="Dog eating cake" width="250px" />
                    </a>
                    <a href="https://github.com/maeahmad/Weather-Dashboard">GitHub</a>
                </div>
            </article>


            <article className="articles" id="article4">
                <div>
                    <h3>Horiseon Services</h3>
                    <p>It is a website that allow users to choose from different web advertisement options to grow their
                        business.</p>
                    <h4><strong>March 2023</strong></h4>
                    <ul>
                        <li>Look into how users can choose among various marketing options to grow their business overtime.
                        </li>
                        <li>It finds the most suitable solution.</li>
                    </ul>
                </div>
                <div className="image">
                    <a href="https://maeahmad.github.io/HoriseonServices/">
                        <img src="https://previews.123rf.com/images/rawpixel/rawpixel1602/rawpixel160209033/109039357-people-sitting-with-the-word-digital-marketing.jpg"
                            alt="Digital Marketing" width="250px" />
                    </a>
                    <a href="https://github.com/maeahmad/HoriseonServices">GitHub</a>
                </div>
            </article>


            <article className="articles" id="article5">
                <div>
                    <h3>Next City Application</h3>
                    <p>It is a recommendation engine that help travelers plan a random trip.</p>
                    <h4><strong> April 2023</strong></h4>
                    <ul>
                        <li>
                            It allow the user to decide on a random Location.
                        </li>
                        <li>Explore the city's weather information.</li>
                        <li>Explore the city's available hotel information.</li>
                    </ul>
                </div>
                <div className="image">
                    <a href="https://kimmh891223.github.io/next_city/">
                        <img src={Project1} alt="Randomize Page" width="350px" />
                    </a>
                    <a href="https://github.com/kimmh891223/next_city">GitHub</a>
                </div>
            </article>


            <article className="articles" id="article6">
                <div>
                    <h3>Student Manager Application</h3>
                    <p>It is a management application that allow teachers to view, add, delete information regarding
                        their courses, students and departments.</p>
                    <h4><strong> June 2023</strong></h4>
                    <ul>
                        <li>
                            It allows user to safely login and signup if needed.
                        </li>
                        <li>It allows user to store information regarding their classrooms.</li>
                        <li>It allows user to change, add or delete information.</li>
                    </ul>
                </div>
                <div className="image">
                    <a href="https://best-ever-student-manager-c65168e4e5e9.herokuapp.com/">
                        <img src={Project2} alt="Randomize Page" width="350px" />
                    </a>
                    <a href="https://github.com/kingrex0830/student-manager">GitHub</a>
                </div>
            </article>


            <article className="articles" id="article7">
                <div>
                    <h3>Connect With Music Application</h3>
                    <p>It is an application that allow people to connect and chat with each other based on their music likes and share information.</p>
                    <h4><strong> Aug. 2023</strong></h4>
                    <ul>
                        <li>
                            It allows user to safely login and signup.
                        </li>
                        <li>It allows user to change profile information.</li>
                        <li>It allows user to listen to their favorite music and add other users with the same likes.</li>
                        <li>Users can exchange information about their favorite artists and songs</li>
                    </ul>
                </div>
                <div className="image">
                    <a href="https://musicio-d325003c7109.herokuapp.com/">
                        <img src={Project3} alt="Music App" width="350px" />
                    </a>
                    <a href="https://github.com/rohitwho/MusicApp">GitHub</a>
                </div>
            </article>


        </div >
    );
}

export default Projects