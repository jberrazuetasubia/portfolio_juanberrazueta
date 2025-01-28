import React from 'react';
import Typewriter from 'typewriter-effect';
import './WebDevelopment.scss';

const WebDevelopment = () => {
    return (
        <div className="web-development">
            <div className="intro-section">
                <h1>Web Development</h1>
                <p>
                    I specialize in creating modern, responsive, and user-friendly websites.
                    From concept to deployment, I turn ideas into functional and visually appealing web solutions.
                </p>
                <Typewriter
                    options={{
                        strings: ['Frontend Development', 'Backend Development', 'Full-Stack Solutions'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>

            <div className="skills-section">
                <h2>My Skills</h2>
                <ul className="skills-list">
                    <li>HTML, CSS, JavaScript</li>
                    <li>React, Angular, Vue.js</li>
                    <li>Node.js, Express</li>
                    <li>RESTful APIs, GraphQL</li>
                    <li>Database Management: MongoDB, MySQL</li>
                    <li>Version Control: Git, GitHub</li>
                    <li>WordPress</li>
                    <li>AR Implementation</li>
                </ul>
            </div>

            <div className="projects-section">
                <h2>Highlighted Projects</h2>
                <div className="projects-wrapper">
                    <a
                        href="https://art-in-augmented-reality.web.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card"
                    >
                        <h3>ART in Augmented Reality</h3>
                        <p>A personal portfolio to showcase my skills and projects, built with React and Firebase.</p>
                        <iframe
                            src="https://art-in-augmented-reality.web.app/home"
                            title="ART in Augmented Reality"
                            className="project-iframe"
                        ></iframe>
                    </a>
                    <a
                        href="https://panita-food.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card"
                    >
                        <h3>Panita Food</h3>
                        <p>A personal portfolio to showcase my skills and projects, built with React and Firebase.</p>
                        <iframe
                            src="https://panita-food.vercel.app/"
                            title="Panita Food"
                            className="project-iframe"
                        ></iframe>
                    </a>
                    <div className="project-card">
                        <h3>Blog Platform</h3>
                        <p>
                            A blogging platform with a custom CMS, user authentication, and content management features.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WebDevelopment;
