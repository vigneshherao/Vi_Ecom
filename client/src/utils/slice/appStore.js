
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import userReducer from "./userSlice";


const appStore = configureStore({
    reducer:{
        product:productReducer,
        user:userReducer,
    }

})


export default appStore;
