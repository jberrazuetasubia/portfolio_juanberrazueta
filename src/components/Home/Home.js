import React from 'react';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';

import './Home.scss';

const Home = () => {
    return (
        <div className="home">
            {/* Introduction Section */}
            <div className="presentation-wrapper">
                <div className="presentation">
                    <h1>Hi!</h1>
                    <h2>I'm Juanfer</h2>
                    <h3>I specialize in building interactive content and creative solutions for your projects.</h3>
                    <div className='typewriter-effect'>
                    <Typewriter
                        options={{
                            strings: ['3D Modeling', 'Graphic Design', 'Web Development'],
                            autoStart: true,
                            loop: true,
                        }}
                        className="typewriter"
                    />
                    </div>
                    

                    <Link to="/contact">
                        <button className="explore-button">
                            Get in Touch
                        </button>
                    </Link>

                </div>
                <div className="presentation-image">
                    {/* Add a placeholder or your picture */}
                    <img
                        src="/assets/images/home/profile.jpeg"
                        alt="Juanfer"
                        className="profile-image"
                    />
                </div>
            </div>

            {/* Skills Highlight Section */}
            <div className="skills-wrapper">
                <h2>What I Do</h2>
                <div className="skills-grid">
                    <div className="skill-card">
                        <Link to="/web-development">
                            <img src="/assets/icons/development.svg" alt="Web Development" />
                            <h3>Web Development</h3>
                        </Link>
                    </div>
                    <div className="skill-card">
                        <Link to="/graphic-design">
                            <img src="/assets/icons/graphic.svg" alt="Graphic Design" />
                            <h3>Graphic Design</h3>
                        </Link>
                    </div>
                    <div className="skill-card">
                        <Link to="/3d-modeling">
                            <img src="/assets/icons/3d-modeling.svg" alt="3D Modeling" />
                            <h3>3D Modeling</h3>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
