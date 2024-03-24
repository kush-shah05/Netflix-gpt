import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import { options } from "../utils/constants";


export const useTopRatedMovies=()=>{
    const dispatch=useDispatch();
    const nowplayingtoprated=useSelector(store=>store.movies.TopRatedMovies)

    useEffect(()=>{
      // !nowplayingtoprated && getTopRatedMovies();
      getTopRatedMovies()
    },[])
    const getTopRatedMovies=async()=>{
  const moviedata=await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',options)
  const data=await moviedata.json();
  console.log(data.results)
  dispatch(addTopRatedMovies(data.results))
    }
}