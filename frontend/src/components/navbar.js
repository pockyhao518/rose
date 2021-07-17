import React from "react";
import '../stylesheets/navbar.css'
import { Link } from "react-router-dom";
import Image from './pngtree-aircraft-paper-plane-realistic-paper-plane-cartoon-airplane-png-image_336010.png';

class Navbar extends React.Component {
    render() {
        return (
            <div className='nav'>
                <img src={Image}/>
                <div><Link to='/load'>Upload</Link></div>
                <div><Link to='/pull'>Pull</Link></div>
            </div>)
    }
}

export default Navbar;