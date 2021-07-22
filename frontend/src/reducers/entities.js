import { combineReducers } from 'redux';
import datas from './datas_reducer';
import images from './images_reducer';
export default combineReducers({
    datas,
    images
});