import {
    RECEIVE_ALL_DATAS
} from '../actions/data_actions';

const DataReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_ALL_DATAS:
            Object.assign(newState, action.datas);
            return newState;
        default:
            return oldState;
    }
}

export default DataReducer;