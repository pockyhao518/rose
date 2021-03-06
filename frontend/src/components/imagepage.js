import React from "react";
import { connect } from "react-redux";
import {
    fetchImages, deleteImage
} from "../actions/data_actions";
import { Link } from "react-router-dom";
import pdf from '../image/PikPng.com_pdf-icon-png_405813.png';

// import Search from '../image/icons8-search-24.png'
const mSTP = (state, ownProps) => {
    if (state.entities.images.images){
        return {
            images: Object.values(state.entities.images.images.images),
        };
    }else{
        return {}
    }
    
};

const mDTP = (dispatch, ownProps) => {
    return {
        fetchImages: () => dispatch(fetchImages()),
        deleteImage: (id) => dispatch(deleteImage(id))
    };
};

class Pullimage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: []
        }
    }

    componentDidMount() {
        this.props.fetchImages()
            .then(images => this.setState(images))
    }
    render() {
        if (this.state.images.length === 0){
            return (<div></div>)
        }else{
            return (
            <div className='imageIndex'>
                {/* <div className='c'>
                        <h3>Caption</h3>
                        {this.props.images.map((el, idx) => <li key={idx + ':' + el}>{el.caption}</li>)}
                </div>
                <div className='f'>
                        <h3>Date</h3>
                        {this.props.images.map((el, idx) => <li key={idx + ':' + el}>{el.createdAt.slice(0,10)}</li>)}
                </div>
                    <div className='d'>
                        <h3>Detail</h3>
                        {this.props.images.map((el, idx) => <li key={idx + ':' + el}><Link to={`/file/${el.filename}`} key={el.caption}><img
                            src={'http://localhost:3000/image/' + el.filename}
                            alt="show" /></Link><button onClick={(
                        ) => this.props.deleteImage(el._id)}>delete</button></li>)}
                    </div> */}
                    {this.props.images.map((el, idx) =>
                        <li key={idx + ':' + el}>
                            <Link to={`/file/${el.filename}`}>
                                <figure>
                                    <img
                                        src={!(el.filename.split('.')[1] === 'pdf') ? 'https://demorose.herokuapp.com/api/image/file/' + el.filename : pdf} alt='description' />
                                    <figcaption>{el.caption}</figcaption>
                                </figure>
                            </Link>
                            <button onClick={(
                            ) => this.props.deleteImage(el._id)}>delete</button>
                        </li>
                    )}

            </div>
        )
        }
        
    }
}

export default connect(mSTP,mDTP)(Pullimage);