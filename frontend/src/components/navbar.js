import React from "react";
import '../stylesheets/navbar.css'
import { Link } from "react-router-dom";
import Image from '../image/pngwing.com.png';
import { openModal, closeModal } from '../actions/modal_actions';
import {connect} from 'react-redux'
const mSTP = (state, ownProps) => {
    return {

    }
}

const mDTP = (dispatch, ownProps) => {

    return {
        openModal: (modal) => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
    }
}

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(modal) {
        return e => {
            e.preventDefault();
            this.props.openModal({ modal: modal })
        }
    }
    render() {
        return (
            <div className='nav'>
                <Link to='/' className='imgSelect'><img src={Image} alt='icon'/></Link>
                <div className='buttons'>
                    <button className="add-image"
                        onClick={this.handleClick('upload-image')}
                    >Upload</button>
                    <Link to='/pull'>View</Link>
                </div>
                
            </div>)
    }
}

export default connect(mSTP, mDTP)(Navbar);