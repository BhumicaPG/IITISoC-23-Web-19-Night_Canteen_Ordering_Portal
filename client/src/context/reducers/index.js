import {combineReducers} from "redux"
import userReducer from "./userReducer"
import alertReducer from "./alertReducer";
import cartReducer from "./cartReducer";
import displayCartReducer from "./displayCartReducer";

const myReducers=combineReducers({
    user : userReducer,
    alert : alertReducer,
    cart : cartReducer,
    isCart: displayCartReducer,
})

export default myReducers;
