import React from 'react';
import Typewriter from 'typewriter-effect';
import './WebDevelopment.scss';

const projects = [
    {
        title: "ART in Augmented Reality",
        description: "Thesis from Universidad San Francisco de Quito, a web platform that allows users to visualize art pieces in augmented reality. Winner of COCOA Award 2022 for Best Innovative Project of the Year.",
        url: "https://art-in-augmented-reality.web.app/",
        imgSrc: "/assets/images/screenshots/art-screenshot.png",
        qrCodeSrc: "/assets/qrcodes/artQR.png",
        youtubeUrl: "https://www.youtube.com/embed/joIjXn2vBqs?si=Ys6nGvSv3uo0Y8B5"
    },
    {
        title: "Panita Food",
        description: "Panita Food is a personal project to help people find the best recipes for their daily meals. We provide a variety of recipes from all over the world along with nutritional information. Our goal is to assist people in discovering the perfect recipe for their daily meals.",
        url: "https://panita-food.vercel.app/",
        imgSrc: "/assets/panitaQR.png",
        qrCodeSrc: "/assets/qrcodes/panitaQR.png"
    },
    {
        title: "Blog Platform",
        description: "A blogging platform with a custom CMS, user authentication, and content management features.",
        url: "https://panita-food.vercel.app/",
        imgSrc: "/assets/blog-platform.jpg",
        qrCodeSrc: "/assets/qrcodes/blog-platform.png"
    }
];

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
                {projects.map((project, index) => (
                    <div className="project-item" key={index}>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="visit-button"
                            >
                                Visit Website
                            </a>
                            <div className='content-container'>
                                <div className='project-media'>
                                    <img src={project.imgSrc} alt={`${project.title} Screenshot`} className="project-screenshot" />
                                    <iframe className="youtube" src={project.youtubeUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                </div>
                                <div className="qr-code-section">
                                    <img src={project.qrCodeSrc} alt={`${project.title} QR Code`} className="qr-code" />
                                    <h3>Scan QR Code</h3>
                                </div>
                            </div>
                        </div>

                ))}
            </div>
        </div>
    );
};

export default WebDevelopment;
