import './missionvision.css';
import missionlogo from './images/mission.png';
import visionlogo from './images/vision.png';

export default function missionvision() {
    return (
        <>
            <div className="container">
                <div className="box1" id="missionlogo">
                    <img src={missionlogo} alt="" />
                </div>
                <div className="box2">
                    <h2>Mission </h2>
                    <div id="mission">
                        <p>We exist to improve the social and economic condition in and around Kharagpur and inspire and guide the youth to replicate our learnings across the nation.</p>
                        <button><b>Read More</b></button>
                    </div>
                </div>
                <div className="box3">
                    <h2>Vision </h2>
                    <div id="vision">
                        <p>We aim to develop an ecosystem for the youth to provide them with skills, resources, and motivation to achieve sustainable development goals.</p>
                        <button><b>Read More</b></button>
                    </div>
                </div>
                <div className="box4" id="visionlogo">
                    <img src={visionlogo} alt="" />
                </div>
            </div >
        </>
    )
}

