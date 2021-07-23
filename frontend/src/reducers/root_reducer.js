import { combineReducers } from "redux";
import entities from "./entities";
import uiReducer from './uiReducer';

const RootReducer = combineReducers({
    entities,
    ui: uiReducer
});

export default RootReducer;