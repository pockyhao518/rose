import { combineReducers } from "redux";
import entities from "./entities";

const RootReducer = combineReducers({
    entities,
});

export default RootReducer;