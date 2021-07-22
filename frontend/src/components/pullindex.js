import React from "react";
import Image from '../image/tenor.gif';
import Data from '../image/tenor (1).gif';
import { Link } from "react-router-dom";
class Pulldata extends React.Component {
    render() {
        return (
            <div className='index'>
                <div className='index-background'></div>
                <Link to='/pullimage'>
                    <img src={Image} alt='images'/>
                    <h3>Images</h3>
                </Link>
                <Link to='/pulldata'>
                    <img src={Data} alt='images' />
                    <h3>Data</h3>
                </Link>
            </div>
        )
    }
}

export default Pulldata;