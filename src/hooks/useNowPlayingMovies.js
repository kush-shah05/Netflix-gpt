import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { options } from "../utils/constants";


export const useNowPlayingMovies=()=>{
    const dispatch=useDispatch();
    const nowplayingmovies=useSelector(store=>store.movies.nowPlayingMovies)
    useEffect(()=>{
     !nowplayingmovies && getNowPlayingMovies();
    //getNowPlayingMovies()
    },[])
    const getNowPlayingMovies=async()=>{
  const moviedata=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',options)
  const data=await moviedata.json();
  console.log(data.results)
  dispatch(addNowPlayingMovies(data.results))
    }
}