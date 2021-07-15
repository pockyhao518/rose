import React from 'react';
import '../stylesheets/datalist.css'

export default class DataList extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render(){
        // const array = Object.keys(this.props.data).slice(1)
        return (
                <div className='grid-container'>
                    {
                        this.props.data.map(el => <div key={el} className='grid-item'>{el}</div>)
                    }
                </div>
        )
    }
}