import React from "react";
import { connect } from "react-redux";
import {
    fetchDatas,
} from "../actions/data_actions";
// import DataList from './data_list';
// import Data from './data';
import { Link } from "react-router-dom";
import '../stylesheets/datalist.css';
import Icon from '../image/free-spreadsheet-icon-16.jpg';
import pdf from '../image/PikPng.com_pdf-icon-png_405813.png';
import xls from '../image/xls-icon-3379.png';

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
        this.state = {
            datas: []
        }
    }

    componentDidMount() {
        this.props.fetchDatas()
        .then(datas => this.setState({datas: datas}));
    }

    render() {
        // const trans = (array) => {
        //     let keys = Object.keys(array[0]);
        //     let result = keys.map(el => [el]);
        //     for (let i = 0; i < keys.length; i++) {
        //         let key = keys[i];
        //         for (let j = 0; j < array.length; j++) {
        //             let obj = array[j];
        //             result[i].push(obj[key])
        //         }
        //     }
        //     return result;
        // }

        // if (this.props.datas[0] !== undefined){
        //     const table = trans(this.props.datas);
        //     return (
        //         <div>

        //             <ul className='grid'>
        //                 {table.map((data,idx) =>
        //                     <DataList key={idx} data={data} />
        //                 )}
        //             </ul>

        //         </div>
        //     )
        // }
        
        if (this.state.datas.length !== 0) {
            return (
            <div>
                <ul className='dataIndex'>
                        {this.props.datas.map(el => {
                        let icon = Icon;
                        let last = el.filename.split('.')[1];
                        if(last === 'pdf'){
                            icon = pdf;
                        }else if(last === 'xls'){
                            icon = xls;
                        }
                        return <li key={el._id}><Link to={`/data/${el._id}`} key={el._id} ><img src={icon}/></Link><div>{el.filename}</div></li>
                        })}
                </ul>
            </div>
            )
        }
        return (
            <div>
            </div>
        )
    }
}

export default connect(mSTP, mDTP)(SplashPage);