import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        userDetail:{}
    },
    reducers:{
        addUser:(state,action)=>{
            state.userDetail = action.payload;
        },
        logoutUser:(state,action)=>{
            state.userDetail = null;
        }
    }
})


export const {addUser,logoutUser} = userSlice.actions;

export default userSlice.reducer;