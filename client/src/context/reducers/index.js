import {combineReducers} from "redux"
import userReducer from "./userReducer"
import productReducer from "./productReducer"
import alertReducer from "./alertReducer";
import cartReducer from "./cartReducer";
import displayCartReducer from "./displayCartReducer";

const myReducers=combineReducers({
    user : userReducer,
    alert : alertReducer,
    products : productReducer,
    cart : cartReducer,
    isCart: displayCartReducer,
})

export default myReducers;
