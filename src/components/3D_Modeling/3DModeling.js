import React from 'react';
import '@google/model-viewer';

const Modeling = () => {
    return(
        <div className="home">
            <h1>3D modeling</h1>
            <p>This is the home page</p>
            <model-viewer alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum" src="assets/3D/robot.glb" ar  shadow-intensity="1" camera-controls touch-action="pan-y"></model-viewer>
        </div>
    );
};

export default Modeling;