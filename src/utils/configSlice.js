import { createSlice } from "@reduxjs/toolkit";

const configSlice=createSlice({
    name:'config',
    initialState:{
        lang:'en'
    },
    reducers:{
        changeLan:(state,action)=>{
            state.lang=action.payload;
        }
    }
})

export const {changeLan}=configSlice.actions;
export default configSlice.reducer