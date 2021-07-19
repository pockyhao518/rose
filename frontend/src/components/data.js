import React from "react";
import { connect } from "react-redux";
import {
    fetchData,
} from "../actions/data_actions";

const mSTP = (state, ownProps) => {
    return {
        id: ownProps.match.params.id,
        datas: state.entities.datas,
    };
};

const mDTP = (dispatch, ownProps) => {
    return {
        fetchData: (id) => dispatch(fetchData(id)),
    };
};

class Data extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.props.fetchData(this.props.id)
        .then(data => this.setState(data))
    }

    render() {
       if(this.state.data){
           
            return(
                <div>{this.props.datas.name}</div>
            )
       }
        return (
            <div>
            </div>
        )
    }
}

export default connect(mSTP, mDTP)(Data);