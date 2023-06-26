import {combineReducers} from "redux"
import userReducer from "./userReducer"
import productReducer from "./productReducer"
import alertReducer from "./alertReducer";
import { useReducedMotion } from "framer-motion";

const myReducers=combineReducers({
    user : userReducer,
    alert : alertReducer,
    products : productReducer,
})

export default myReducers;
