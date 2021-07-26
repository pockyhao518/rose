import {
    RECEIVE_ALL_IMAGE, RECEIVE_IMAGE, DELETE_IMAGE
} from '../actions/data_actions';

const ImageReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState)
    switch (action.type) {
        case RECEIVE_ALL_IMAGE:
            newState['images'] = action.images.data;
            return newState;
        case RECEIVE_IMAGE:
            newState['image'] = action.image.data;
            return newState;
        case DELETE_IMAGE:
            let idx = action.id;
            let removeId;
            newState['images']['images'].forEach((el,j) => {
                if (el._id === idx){
                    console.log(el)
                    removeId = j;
                }
            });
            console.log(idx,removeId)
            newState['images']['images'] = newState['images']['images'].slice(0, removeId).concat(newState['images']['images'].slice(removeId + 1))
            return newState;
        default:
            return oldState;
    }
}

export default ImageReducer;