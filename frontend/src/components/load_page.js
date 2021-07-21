import React from 'react';
import axios from 'axios';
// import { Viewer } from '@react-pdf-viewer/core';
import Upload from './tenor.gif';

export default class LoadPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            caption: '',
            uploadedImageUrl: '',
            uploadedImage: { },
            check: false,
        }
    }
    
    uploadImage = () => {
        if (!this.state.caption.trim() || !this.state.uploadedImage.name) {
            return alert('Caption or file is missing');
        }

        let formData = new FormData();
        formData.append('caption', this.state.caption);
        formData.append('file', this.state.uploadedImage);
        axios.post('/', formData)
            .then((response) => {
                response.data.success ? alert('File successfully uploaded') : alert(response.data.message);
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
                    <br/>
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