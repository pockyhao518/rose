import {
    RECEIVE_ALL_DATAS, RECEIVE_DATA
} from '../actions/data_actions';

const DataReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_ALL_DATAS:
            return action.datas.data;
        case RECEIVE_DATA:
            return action.data.data;
        default:
            return oldState;
    }
}

export default DataReducer;