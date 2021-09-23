import React from "react";
import '../App.css';
import './Home1.css';
import { motion } from 'framer-motion';

const welVariant = {
    hidden:{
        opacity:0,
        x:-800,
    },
    visible:{
        opacity:1,
        x:0,
        transition:{type:'spring', ease:'easeInOut',delay:0.5}
    }
}

const Home1 = () => {
    return ( 
        <div className="pg21">
        <div className="pg2">
        <div className="model1">
            <img className="m1" src="/images/m1.png" alt="" />
        </div>
        <div className="model2">
            <img src="/images/m2.png" alt="" className="m2" />
        </div>
        
        </div>
        <motion.h2 
        variants={welVariant}
        initial="hidden"
        animate="visible"
        >Fashion Studio based on Berlin</motion.h2>
        <div className="para">
        <p>Always taking great pleasure in the work we do, we find satisfaction in the <br />simple acts of thinking and making. 
        Since 2005, we’ve worked to build <br /> strategies and craft solutions for our collaborators, applying reason and <br />
        rationality to the process of design.</p>
        </div>
        </div>
     );
}
 
export default Home1;
