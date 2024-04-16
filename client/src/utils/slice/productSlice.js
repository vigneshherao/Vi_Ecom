import { createSlice } from "@reduxjs/toolkit";


const producstSlice = createSlice({
    name:"product",
    initialState:{
        products:{},
        productDetail:{},
        productImage:{}
    },
    reducers:{
        addProducts:(state,action)=>{
            state.products = action.payload;
        },
        addProductDetail:(state,action)=>{
            state.productDetail = action.payload;
        },
        addProductImage:(state,action)=>{
            state.productImage = action.payload;
        }

    }
})



export const {addProducts,addProductDetail,addProductImage} = producstSlice.actions;

export default producstSlice.reducer;