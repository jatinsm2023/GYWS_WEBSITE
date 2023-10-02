import React from 'react';
import Navbar from '../navbar/Navbar';
import MissionVision from './mission_vision/MissionVision';
import Intiative from './intiatives/Intiative';
import Slider from './slider/Slider';

function Home() {
    return (
        <>
            <Navbar />
            <Slider />
            <MissionVision />
            <Intiative />
        </>
    )
}

export default Home;