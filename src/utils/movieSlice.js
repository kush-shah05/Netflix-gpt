import { createSlice } from "@reduxjs/toolkit";


const movieSlice=createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies:null,
        nowPlayingTrailer:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.nowPlayingTrailer=action.payload;
        }
    }
})

export default movieSlice.reducer;
export const {addNowPlayingMovies,addTrailerVideo}=movieSlice.actions

