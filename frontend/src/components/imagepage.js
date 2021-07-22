import React from "react";
import { connect } from "react-redux";
import {
    fetchImages,
} from "../actions/data_actions";
import { Link } from "react-router-dom";

const mSTP = (state, ownProps) => {
    if (state.entities.images.images){
        return {
        images: Object.values(state.entities.images.images),
        };
    }else{
        return {}
    }
    
};

const mDTP = (dispatch, ownProps) => {
    return {
        fetchImages: () => dispatch(fetchImages()),
    };
};

class Pullimage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: []
        }
    }

    componentDidMount() {
        this.props.fetchImages()
            .then(images => this.setState(images))
    }
    render() {
        if (this.state.images.length === 0){
            return (<div></div>)
        }else{
            return (
            <div className='imageIndex'>
                {this.props.images.map((el, idx) => <li key={idx + ':' + el}><Link to={`/file/${el.filename}`} key={el.caption} >{el.caption}</Link></li>)}
            </div>
        )
        }
        
    }
}

export default connect(mSTP,mDTP)(Pullimage);