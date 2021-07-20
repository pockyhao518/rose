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
           let dataArr = Object.keys(this.props.datas);
           let col = dataArr.map(el => <th key={el}>{el}</th>);
           let val = []
           for (let i = 0; i < dataArr.length; i++) {
               val.push(this.props.datas[dataArr[i]]);
           }
            return(
                <table className='pullTable' border="0" bgcolor="honeydew" width="40%" align="center">
                    <thead>
                        <tr>
                            {col}
                        </tr>
                    </thead>
                    <tbody id="tableData"><tr>
                        {val.map((el,id) => <th key={id+':'+el}>{el}</th>)}
                    </tr></tbody>
                </table>
            )
       }
        return (
            <div>
            </div>
        )
    }
}

export default connect(mSTP, mDTP)(Data);