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
        const trans = (array) => {
            let keys = Object.keys(array[0]);
            let result = keys.map(el => [el]);
            for (let i = 0; i < keys.length; i++) {
                let key = keys[i];
                for (let j = 0; j < array.length; j++) {
                    let obj = array[j];
                    result[i].push(obj[key])
                }
            }
            return result;
        }

        if (this.props.datas[0] !== undefined){
            const table = trans(this.props.datas);
            return (
                <div>

                    <ul className='grid'>
                        {table.map((data,idx) =>
                            <DataList key={idx} data={data} />
                        )}
                    </ul>

                </div>
            )
        }
        return (
            <div>
                
                <ul>
                    None
                </ul>
                
            </div>
        )
    }
}

export default connect(mSTP, mDTP)(SplashPage);