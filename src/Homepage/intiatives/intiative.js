import React from 'react'
import './intiative.css'
import jvmlogo from './JVM.jpg'
import lightlogo from './light a.jpg'
import covidlogo from './Covid 19 a.jpg'
export default function intiative() {
    return (
        <>

            <div className="container">
                <div className="heading" id="area0">
                    <h1>OUT INTIATIVES</h1>
                </div>
                <div className="box" id="area1">
                    <div className="name"><b style={{color: "#05A1C7"}}> Jagriti Vidhya Mandir </b></div>
                    <div className="mainbox" id="first">
                        <div>
                            <img src={jvmlogo} alt="" width="400px" />
                        </div>
                        <div className="discr">- To educate each and every child for a better tomorrow</div>
                        <button><b> Read More </b></button>

                    </div>
                </div>
                <div className="box" id="area2">
                    <div className="name"><b style={{color: "#F9EE34 "}}>LiGHT </b></div>
                    <div className="mainbox" id="middle">
                        <div>
                            <img src={lightlogo} alt="" width="400px" />
                        </div>
                        <div className="discr">"Expansion Initiative
                            - forming a PAN India network of socially motivated youth."</div>
                        <button style={{backgroundColor:'#F16A36',
                    borderColor: '#F16A36'}}><b> Read More </b></button>
                    </div>
                </div>

                <div className="box" id="area3">
                    <div className="name"><b style={{color: "#F16A36"}}> Covid-19 </b></div>
                    <div className="mainbox" id="third">
                        <div>
                            <img src={covidlogo} alt="" width="400px" />
                        </div>
                        <div className="discr">Door to door distribution of basic amenities to the rural households</div>
                        <button  style={{backgroundColor:'#05A1C7',
                    borderColor: '#05A1C7'}}><b> Read More </b></button>

                    </div>
                </div>
            </div>
        </>
    )
}
