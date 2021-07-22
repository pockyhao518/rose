import {
    RECEIVE_ALL_IMAGE, RECEIVE_IMAGE
} from '../actions/data_actions';

const ImageReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_ALL_IMAGE:
            return action.images.data;
        case RECEIVE_IMAGE:
            return action.image.data;
        default:
            return oldState;
    }
}

export default ImageReducer;