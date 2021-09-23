import React from "react";
import '../App.css';
import { Link } from 'react-router-dom';
import './Featured.css';

const Featured = () => {
    return (  
        <div className="Featured">
            <div className="feaNo">
            <p className="fp">Featured Project</p>
            <p className="fno">02</p>
        </div>
        <div className="featurbg">
        <img className="feabg" src="/images/m6.png" alt="" />
            <div className="tdesc">
                <h4 className="ftitle">Project Title</h4>
                <p className="fdesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br />
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br />
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea <br />
                 commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit <br />
                 esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat <br />
                 cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est <br />
                 laborum.</p>
            </div>
        </div>
        </div>
    );
}
 
export default Featured;
