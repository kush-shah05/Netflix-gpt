import { createSlice } from "@reduxjs/toolkit";


const gptSlice=createSlice({
    name:'gpt',
    initialState:{
        gpttoggle:false
    },
    reducers:{
        gptToggle:(state,action)=>{
            state.gpttoggle=!state.gpttoggle;
        }
    }
});

export default gptSlice.reducer;
export const {gptToggle}=gptSlice.actions;