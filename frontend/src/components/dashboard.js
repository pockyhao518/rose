import React from 'react';
import Image from '../image/mouse.gif';
import I1 from '../image/Reliable.jpeg';
import I2 from '../image/pngegg.png';
import I3 from '../image/shared.jpeg';
import I4 from '../image/effective.png';
import Footer from "./footer";

class Dashboard extends React.Component{
    render() {
        return (
            <div>
                <div className='title'>
                    <div className='background'></div>
                <div>
                        <h1>Upload Your Screenshot</h1>
                    <h2>Let's covert them to data</h2>
                </div>
                <img className='homegif' src={Image} alt='gif'/>
            </div>
                <div className='title1'>
                    <div>
                        <h1>Reliable</h1>
                        <h2>Our team make sure all data are Freshness, and have 
                            a real source. We will deliver high
                            data availability and health throughout the entire 
                            data life cycle.</h2>
                    </div>
                    <img className='homegif' src={I1} alt='rose' />
                </div>
                <div className='title2'>
                    <img className='homegif' src={I2} alt='rose' />
                    <div>
                        <h1>Organized</h1>
                        <h2>Data quality leads to better decision-making across 
                            an organization. Our well-designed and bug-free data
                             set will make your decision much easier </h2>
                    </div>
                    
                </div>
                <div className='title3'>
                    <div>
                        <h1>Shared</h1>
                        <h2>Data sharing encourages more connection and collaboration
                             between researchers. Our product connects you and your 
                             colleague all around the world.</h2>
                    </div>
                    <img className='homegif' src={I3} alt='rose' />
                </div>
                <div className='title4'>
                    <img className='homegif' src={I4} alt='rose' />
                    <div>
                        <h1>Efficiency</h1>
                        <h2>Wanna get some high quality data? Simple click, 
                            satisfying result.</h2>
                    </div>  
                </div>
                <Footer/>
            </div>
            
        )
    }
}

export default Dashboard;