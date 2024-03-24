import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { options } from "../utils/constants";


export const usePopularMovies=()=>{
    const dispatch=useDispatch();
    const nowplayingpopular=useSelector(store=>store.movies.PopularMovies)

    useEffect(()=>{
    //  !nowplayingpopular && getPopularMovies();
     getPopularMovies()
    },[])
    const getPopularMovies=async()=>{
  const moviedata=await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',options)
  const data=await moviedata.json();
  console.log(data.results)
  dispatch(addPopularMovies(data.results))
    }
}