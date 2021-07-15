import React from "react";
import { connect } from "react-redux";
import {
    fetchDatas,
} from "../actions/data_actions";
import DataList from './data_list';

const mSTP = (state, ownProps) => {
    return {
        datas: Object.values(state.entities.datas),
    };
};

const mDTP = (dispatch, ownProps) => {
    return {
        fetchDatas: () => dispatch(fetchDatas()),
    };
};

class SplashPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchDatas();
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.datas.map(data =>
                        <DataList key={data._id} data={data} />
                    )}
                </ul>
                
            </div>
        )
    }
}

export default connect(mSTP, mDTP)(SplashPage);