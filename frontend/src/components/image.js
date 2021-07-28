import React from "react";
import { connect } from "react-redux";
import {
    fetchImage,
} from "../actions/data_actions";
import { Link } from "react-router-dom";
import WebViewer from '@pdftron/pdfjs-express';

const mSTP = (state, ownProps) => {
    return {
        filename: ownProps.match.params.filename,
        images: state.entities.images,
    };
};

const mDTP = (dispatch, ownProps) => {
    return {
        fetchImage: (filename) => dispatch(fetchImage(filename)),
    };
};

class Image extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.viewer = React.createRef();

    }

    componentDidMount() {
        this.props.fetchImage(this.props.filename)
            .then(image => this.setState(image))
        if (this.props.filename.split('.')[1] === 'pdf'){
            WebViewer(
            {
                path: '/webviewer/lib',
                    initialDoc: 'http://localhost:3000/image/' + this.props.filename,
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
        });
        }
        
    }

    render(){
        if (this.props.filename.split('.')[1] !== 'pdf'){
            return(
                <div>
                <Link to='/pullimage'><button>Back</button></Link>
                <div className='image_container'><img className='image_show'
                    src={'http://localhost:3000/image/' + this.props.filename}
                    alt="show"/>
                </div>
                </div>
            )
        }else{
            return(
                <div>
                    <Link to='/pullimage'><button>Back</button></Link>
                    <div className="webviewer1" ref={this.viewer}></div>
                </div>
            )
        }
        
    }
}

export default connect(mSTP, mDTP)(Image);