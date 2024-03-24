import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useNowPlayingTrailer = (movieId) => {
    const dispatch=useDispatch();
    const nowplayingtrailer=useSelector(store=>store.movies.nowPlayingTrailer)
    useEffect(()=>{
        // !nowplayingtrailer && getVideo();
        getVideo()
      },[])
      const getVideo=async()=>{
        const data=await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,options);
        
        const json=await data.json();
        const result=json?.results?.filter(obj=>obj.type==='Trailer');
        const trailer=result.length?result[0]:json.results[0];
        dispatch(addTrailerVideo(trailer))
        console.log('trailer',trailer)
      }
}

export default useNowPlayingTrailer