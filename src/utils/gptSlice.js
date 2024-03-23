import { createSlice } from "@reduxjs/toolkit";


const gptSlice=createSlice({
    name:'gpt',
    initialState:{
        gpttoggle:false,
        movieResults:null,
        movieNames:null
    },
    reducers:{
        gptToggle:(state,action)=>{
            state.gpttoggle=!state.gpttoggle;
        },
        addGptMovieResult:(state,action)=>{
            const {movieNames,movieResults}=action.payload
            state.movieResults=movieResults;
            state.movieNames=movieNames
        }
    }
});

export default gptSlice.reducer;
export const {gptToggle,addGptMovieResult}=gptSlice.actions;