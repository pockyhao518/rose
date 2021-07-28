import React from 'react';
import axios from 'axios';
// import { Viewer } from '@react-pdf-viewer/core';
import { closeModal } from '../actions/modal_actions';
import { connect } from "react-redux";
import Upload from '../image/gallery+image+landscape+mobile+museum+open+line+icon-1320183049020185924_256.png';
import {
    fetchImages
} from "../actions/data_actions";
import WebViewer from '@pdftron/pdfjs-express';



const mSTP = (state, ownProps) => {
    return {};
}

const mDTP = (dispatch, ownProps) => {
    return {
        fetchImages: () => dispatch(fetchImages()),
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
            image: false,
            pdf: false,
            filename: ''
        }
        this.viewer = React.createRef();
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
                    this.props.fetchImages();
                }
            })
            .catch(err => alert('Error: ' + err));
    }

        componentDidMount() {
            if(this.state.image){
                return;
            }
            WebViewer(
                {
                    path: '/webviewer/lib',
                    initialDoc: this.state.uploadedImageUrl,
                },
                this.viewer.current,
            ).then((instance) => {
                const { docViewer, Annotations } = instance;
                // const annotManager = docViewer.getAnnotationManager();
                docViewer.on('documentLoaded', () => {
                    const rectangleAnnot = new Annotations.RectangleAnnotation();
                    rectangleAnnot.PageNumber = 1;
                    // values are in page coordinates with (0, 0) in the top left
                    rectangleAnnot.X = 100;
                    rectangleAnnot.Y = 150;
                    rectangleAnnot.Width = 200;
                    rectangleAnnot.Height = 50;
                    // rectangleAnnot.Author = annotManager.getCurrentUser();

                    // annotManager.addAnnotation(rectangleAnnot);
                    // need to draw the annotation otherwise it won't show up until the page is refreshed
                    // annotManager.redrawAnnotation(rectangleAnnot);
                });
                document.getElementById('file').onchange = e => {
                    const file = e.target.files[0];
                    if (file && e.target.files[0]['type'] === 'application/pdf') {
                        instance.loadDocument(file);
                    }
                };
            });
        };
    
    render() {
        let display = 'none';
        if (this.state.image){
            display = 'block'
        }
        let pdfPlay = 'none';
        if (this.state.pdf){
            pdfPlay = 'block'
        }
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
                        <input
                            type="file"
                            id='file'
                            className="Upload__Input"
                            onChange={(event) => {
                                if (event.target.files[0]){
                                    this.setState({
                                    uploadedImageUrl: URL.createObjectURL(event.target.files[0]),
                                    uploadedImage: event.target.files[0],
                                    image: ['image/gif', 'image/jpeg', 'image/png'].includes(event.target.files[0]['type']),
                                    pdf: event.target.files[0]['type'] === 'application/pdf',
                                        filename: event.target.files[0]['name']
                                }) 
                                }else{
                                    this.setState({
                                        uploadedImageUrl: '',
                                        image: false,
                                })
                                }  
                            }}
                        />
                        <label htmlFor="file">{!this.state.filename ? 'Choose a file..' : this.state.filename }</label>
                    </div>
                    <img
                        src={!this.state.image ? Upload : this.state.uploadedImageUrl}
                        alt="upload"
                        className="Upload__Image"
                        style={{display:display}}
                    />
                    <div className="webviewer" ref={this.viewer} style={{ display: pdfPlay }}></div>
                    <button onClick={this.uploadImage} className="Upload__Button">Upload</button>
                </div>
            </div>
        )
    }
}

export default connect(mSTP,mDTP)(LoadPage);