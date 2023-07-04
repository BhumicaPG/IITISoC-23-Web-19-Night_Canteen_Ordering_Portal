import {combineReducers} from "redux"
import userReducer from "./userReducer"
import productReducer from "./productReducer"
import alertReducer from "./alertReducer";
import cartReducer from "./cartReducer";
import displayCartReducer from "./displayCartReducer";
import allUserReducer from "./allUserReducer";

const myReducers=combineReducers({
    user : userReducer,
    alert : alertReducer,
    products : productReducer,
    allUsers: allUserReducer,
    cart : cartReducer,
    isCart: displayCartReducer,
})

export default myReducers;
