import { createSlice } from "@reduxjs/toolkit";


const movieSlice=createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies:null,
        PopularMovies:null,
        TopRatedMovies:null,
        UpcomingMovies:null,
        nowPlayingTrailer:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },addPopularMovies:(state,action)=>{
            state.PopularMovies=action.payload;
        },addTopRatedMovies:(state,action)=>{
            state.TopRatedMovies=action.payload;
        },
        addUpcomingMovies:(state,action)=>{
            state.UpcomingMovies=action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.nowPlayingTrailer=action.payload;
        }
    }
})

export default movieSlice.reducer;
export const {addNowPlayingMovies,addPopularMovies,addTrailerVideo,addTopRatedMovies,addUpcomingMovies}=movieSlice.actions

