import React from 'react';

export default class DataList extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render(){
        const array = Object.keys(this.props.data).slice(1)
        return (
            <div id={this.props.data._id}>
                <li>
                    {
                        array.map(el => <div>{this.props.data[el]}</div>)
                    }
                </li>
            </div>
        )
    }
}