import React from 'react';
import '../stylesheets/datalist.css'

export default class DataList extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render(){
        const array = Object.keys(this.props.data).slice(1)
        return (
            <div id={this.props.data._id}>
                <div className='grid-container'>
                    {
                        array.map(el => <div key={el} className='grid-item'>{this.props.data[el]}</div>)
                    }
                </div>
            </div>
        )
    }
}