import React from "react";
import '../stylesheets/navbar.css'
import { Link } from "react-router-dom";
import Image from '../image/pngwing.com.png';

class Navbar extends React.Component {
    render() {
        return (
            <div className='nav'>
                <Link to='/' className='imgSelect'><img src={Image} alt='icon'/></Link>
                <div className='buttons'>
                    <Link to='/load'>Upload</Link>
                    <Link to='/pull'>Pull</Link>
                </div>
                
            </div>)
    }
}

export default Navbar;