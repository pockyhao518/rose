import React from 'react';
import axios from 'axios';
// import { Viewer } from '@react-pdf-viewer/core';
import { closeModal } from '../actions/modal_actions';
import { connect } from "react-redux";
import Upload from '../image/preview.png';

const mSTP = (state, ownProps) => {
    return {};
}

const mDTP = (dispatch, ownProps) => {
    return {
        closeModal: () => dispatch(closeModal()),
    }
}

class LoadPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            caption: '',
            uploadedImageUrl: '',
            uploadedImage: { },
            error: '',
            check: false,
        }
    }
    
    uploadImage = () => {
        if (!this.state.caption.trim() || !this.state.uploadedImage.name) {
            // return alert('Caption or file is missing');
            this.setState({ error: 'Caption or file is missing' })
        }

        let formData = new FormData();
        formData.append('caption', this.state.caption);
        formData.append('file', this.state.uploadedImage);
        axios.post('/', formData)
            .then((response) => {
                response.data.success ? alert('File successfully uploaded') : this.setState({ error: response.data.message });
                if (response.data.success) {
                    this.props.closeModal();
                }
            })
            .catch(err => alert('Error: ' + err));
    }
    render() {
        return (
            <div className="UploadPage">
                <div className="Upload">
                    <p className="Upload__Title">Upload File</p>
                    <div className="Upload__InputSection">
                        <input
                            type="text"
                            className="Upload__Caption"
                            placeholder="Enter caption..."
                            onChange={event => this.setState({ caption: event.target.value })}
                            value={this.state.caption}
                        />
                        <div>{this.state.error}</div>
                        <br />
                        <input
                            type="file"
                            className="Upload__Input"
                            onChange={(event) => {
                                if (event.target.files[0]){
                                    this.setState({
                                    uploadedImageUrl: URL.createObjectURL(event.target.files[0]),
                                    uploadedImage: event.target.files[0],
                                    check: ['image/gif', 'image/jpeg', 'image/png'].includes(event.target.files[0]['type'])
                                }) 
                                }else{
                                    this.setState({
                                        uploadedImageUrl: '',
                                        check: false,
                                })
                                }  
                            }}
                        />
                    </div>
                    <img
                        src={!this.state.check ? Upload : this.state.uploadedImageUrl}
                        alt="upload"
                        className="Upload__Image"
                    />
                    <button onClick={this.uploadImage} className="Upload__Button">Upload</button>
                </div>
            </div>
        )
    }
}

export default connect(mSTP,mDTP)(LoadPage);