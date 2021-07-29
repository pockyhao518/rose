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
           let len = val[0].length;
            return(
                <div>
                <Link to='/pulldata'><button>Back</button></Link>
                <div>
                <table className='pullTable' border="0" bgcolor="honeydew" width="40%" align="center">
                    <thead>
                            <tr>
                                    <td className='tableHead' colSpan={len}>
                            {this.props.datas.filename}
                        </td>
                            </tr>
                        <tr>
                            {val[0].map(el=><td key={'colname:'+el}>{el}</td>)}
                        </tr>
                    </thead>
                    <tbody id="tableData">
                            {val.slice(1).map((arr,k) => <tr key={'row '+ k}>{arr.map((el,id) => <td key={id + ':' + el}>{el}</td>)}</tr>)}
                    </tbody>
                </table>
                <br />
                </div></div>
            )
       }
        return (
            <div>
            </div>
        )
    }
}

export default connect(mSTP, mDTP)(Data);