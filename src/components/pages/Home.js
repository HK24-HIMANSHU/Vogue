import React from 'react';
import '../../App.css';
import Featured from '../Featured';
import Home1 from '../Home1';
import Lastpart from '../Lastpart';
import Mainsec from '../Mainsec';
import Proj1 from '../Proj1';
import Abt from '../Abt';
import Footer from '../Footer';


const Home = () => {
    return ( 
        <>
            <Mainsec />
            <Home1 />
            <Proj1 />
            <Featured />
            <Lastpart />
            <Abt />
            <Footer />
        </>
     );
}
 
export default Home;