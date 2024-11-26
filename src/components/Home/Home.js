import React from 'react';
import Typewriter from 'typewriter-effect';

import './Home.scss';

const Home = () => {
    return (
        <>
            <div className="home">

                div
                <div className='presentation-wrapper'>
                    <div class='row'>
                        <div class='column'>

                            <div className='presentation'>
                                <h1>Hi!</h1>
                                <h2>My name is Juanfer</h2>
                                <h3>I build interactive content for your projects</h3>
                                <button className='explore-button'>Explore my Work</button>
                            </div>
                        </div>
                    </div>
                    <div class='row'>
                        <div class='column'>
                            <div className='presentation-image'>
                                < h1>Htessssi!</h1>
                                <Typewriter
                                    options={{
                                        strings: ['Hello my name is', 'Juanfer'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>

    );
};

export default Home;