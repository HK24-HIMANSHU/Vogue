import React from "react";
import '../App.css';
import './Home1.css';
import { Link } from 'react-router-dom';
import './Proj1.css';

const Proj1 = () => {
    return ( 
        <div className="proj1">
            <img src="/images/m3.png" alt="" className="m3h" />
        <div className="proj1bg">
            <h1 className="title">Project Title</h1>
            <p className="no">01</p>
            <p className="Pname1">Reebok</p>
            <a href="/"><button className="bn632-hover bn27">View</button></a>
            <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt <br />
             ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br />
             ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        </div>
     );
}
 
export default Proj1;