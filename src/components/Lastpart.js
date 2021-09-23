import React from "react";
import '../App.css';
import './Lastpart.css';
import { Link } from 'react-router-dom';

const Lastpart = () => {
    return (  
        <div className="lasthbr">
            <div className="lst">
                <p className="no3">03</p>
                <p className="f3">Featured Project</p>
            </div>

            <div className="vi">
                <img src="/images/m5.png" alt="" className="m5lp" />
                <video src="/videos/2.mp4" className="sidemein" autoPlay loop muted></video>
            </div>
            
            
            <div className="thodasa">
                <h1 className="ordnc">Oridnary Challenge</h1>
                <p className="oclng">Oridnary is a Gothenburg-based creative development studio. Through <br />
                technology and design they differentiate artists, creatives and brands to <br />
                help them break through the noise. Oridnary likes to challenge the ordinary.</p>
            </div>

        </div>
    );
}
 
export default Lastpart;
<div className="last">
    <video src="/videos/2.mp4" className="sidemein"></video>
</div>