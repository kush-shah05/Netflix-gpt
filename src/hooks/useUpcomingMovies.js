import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import { options } from "../utils/constants";


export const useUpcomingMovies=()=>{
    const dispatch=useDispatch();
    useEffect(()=>{
      getUpcomingMovies();
    },[])
    const getUpcomingMovies=async()=>{
  const moviedata=await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',options)
  const data=await moviedata.json();
  console.log(data.results)
  dispatch(addUpcomingMovies(data.results))
    }
}