import {combineReducers} from "redux"
import userReducer from "./userReducer"
import alertReducer from "./alertReducer";
import { useReducedMotion } from "framer-motion";

const myReducers=combineReducers({
    user : userReducer,
    alert : alertReducer,
})

export default myReducers;
