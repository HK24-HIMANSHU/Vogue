import React from 'react';
import '../App.css';
import './Mainsec.css'
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

const pVariant = {
    hidden:{
        opacity:0,
        x:800,
    },
    visible:{
        opacity:1,
        x:0,
        transition:{type:'spring', ease:'easeInOut',delay:0.5}
    }
}


const Mainsec = () => {
    return ( 
        <div className="videoH">
            <video src="/videos/1.mp4" autoPlay loop muted></video>
            <div className="heading"></div>
            <motion.h1 
                variants={welVariant}
                initial="hidden"
                animate="visible"
            >Welcome to Vogue</motion.h1>
            <motion.p 
             variants={pVariant}
             initial="hidden"
             animate="visible"
            className="best">The best in whole Europe</motion.p>
        </div>
     );
}
 
export default Mainsec;
<>
</>