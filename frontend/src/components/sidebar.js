import React from "react";
import '../stylesheets/sidebar.css'
import { Link } from "react-router-dom";

class Sidebar extends React.Component {
    render() {
        return (
        <div className='side'>
            <ul>
                <li><Link to='/load'>Upload</Link></li>
                <li><Link to='/'>Pull</Link></li>
            </ul>
        </div>)
    }
}

export default Sidebar;