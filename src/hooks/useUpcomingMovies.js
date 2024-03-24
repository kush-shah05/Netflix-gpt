import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import { options } from "../utils/constants";


export const useUpcomingMovies=()=>{
    const dispatch=useDispatch();
    const nowplayingupcoming=useSelector(store=>store.movies.UpcomingMovies)

    useEffect(()=>{
    !nowplayingupcoming &&  getUpcomingMovies();
    },[])
    const getUpcomingMovies=async()=>{
  const moviedata=await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',options)
  const data=await moviedata.json();
  console.log(data.results)
  dispatch(addUpcomingMovies(data.results))
    }
}