import React from "react";
import { connect } from "react-redux";
import {
    fetchImage,
} from "../actions/data_actions";
import { Link } from "react-router-dom";

const mSTP = (state, ownProps) => {
    return {
        filename: ownProps.match.params.filename,
        images: state.entities.images,
    };
};

const mDTP = (dispatch, ownProps) => {
    return {
        fetchImage: (filename) => dispatch(fetchImage(filename)),
    };
};

class Image extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.props.fetchImage(this.props.filename)
            .then(image => this.setState(image))
    }

    render(){
        if (this.props.filename){
            return(
                <div><img
                    src={'http://localhost:3000/image/' + this.props.filename}
                    alt="show"/>
                    <br/>
                    <Link to='/pullimage'><button>Back</button></Link>
                </div>
                
            )
        }else{
            return(
                <div>hi</div>
            )
        }
        
    }
}

export default connect(mSTP, mDTP)(Image);