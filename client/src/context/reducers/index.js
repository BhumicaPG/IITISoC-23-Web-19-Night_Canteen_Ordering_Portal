import {combineReducers} from "redux";
import userReducer from "./userReducer";
import { useReducedMotion } from "framer-motion";

const myReducer = combineReducers({
    user: userReducer,

});

export default myReducer;
