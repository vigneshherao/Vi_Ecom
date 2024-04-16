import { createSlice } from "@reduxjs/toolkit";


const producstSlice = createSlice({
    name:"product",
    initialState:{
        products:{},
    },
    reducers:{
        addProducts:(state,action)=>{
            state.products = action.payload;
        }
    }
})



export const {addProducts} = producstSlice.actions;

export default producstSlice.reducer;