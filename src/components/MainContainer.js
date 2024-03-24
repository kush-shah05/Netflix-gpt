import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {
    const movies=useSelector(store=>store.movies?.nowPlayingMovies)
    if(!movies) return;
    const mainmovie=movies[2]
  //console.log(mainmovie)
    const {original_title,overview,id}=mainmovie;
  return (
    <div className='pt-[45%] bg-black md:pt-0'>
    <VideoTitle title={original_title} overview={overview}/>
    <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer