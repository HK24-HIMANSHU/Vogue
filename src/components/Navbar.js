import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import '../components/navbar.css';
import { Link } from "react-scroll";
import { motion } from 'framer-motion';

const navbarVar={
    hidden:{
        x:-100,
        opacity:0,
    },
    visible:{
        x: 0,
        opacity:1,
        transition:{
            type:'spring',delay:1,stiffness:400,
        }
    }
}


const Navbar = () => {
    const [click,setClick]=useState(false);
    const handleClick= ()=> setClick(!click);
    const closeNav = () => setClick(false)

    

    return ( 
        <>
        <div className="nav-bar-cont">
            <motion.div className="nav-bar"
                variants={navbarVar}
                initial="hidden"
                animate="visible"
            >
                <Link to="/" className="logo">VOGUE</Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times': 'fas fa-bars'}/>
                </div>
            </motion.div>
        </div>
        { click && <div className="menu">
            <ul className="menuBr">
                <li className="nav-item">
                    <Link
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    // offset={-750}
                    duration={1000}
                    to="pg21" className="nav-links" onClick={closeNav}>
                        ABOUT
                    </Link>
                </li>
                <li className="nav-item">
                    <Link 
                    spy={true}
                    smooth={true}
                    offset={500}
                    duration={1000}
                    to='proj1' className="nav-links" onClick={closeNav}>
                        PROJECT
                    </Link>
                </li>
                <li className="nav-item">
                    <Link 
                    spy={true}
                    smooth={true}
                    // offset={-750}
                    duration={1000}
                    to='parentAbt' className="nav-links" onClick={closeNav}>
                        SERVICES
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/' className="nav-links" onClick={closeNav}>
                        CONTACT US
                    </Link>
                </li>
                </ul>
                <div className="try">
                <h1 className="nbarH1">MENU</h1>
                </div>
        </div> }
        
        </>
     );
}
 
export default Navbar;