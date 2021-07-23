import React from "react";
import { connect } from "react-redux";
import {
    fetchData,
} from "../actions/data_actions";
import { Link } from "react-router-dom";


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
           let val = this.props.datas.data;
            return(
                <div>
                <table className='pullTable' border="0" bgcolor="honeydew" width="40%" align="center">
                    <thead>
                        <tr>
                            {val[0].map(el=><th>{el}</th>)}
                        </tr>
                    </thead>
                    <tbody id="tableData">
                            {val.slice(1).map(arr => <tr>{arr.map((el,id) => <th key={id + ':' + el}>{el}</th>)}</tr>)}
                    </tbody>
                </table>
                <br />
                <Link to='/pulldata'><button>Back</button></Link></div>
            )
       }
        return (
            <div>
            </div>
        )
    }
}

export default connect(mSTP, mDTP)(Data);