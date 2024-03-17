import React from 'react'

import { useSelector } from 'react-redux';
import useNowPlayingTrailer from '../hooks/useNowPlayingTrailer';


const VideoBackground = ({movieId}) => {
  useNowPlayingTrailer(movieId);
  const movie=useSelector(store=>store.movies);
  //console.log('movie',movie?.nowPlayingTrailer?.key)
  const key=movie?.nowPlayingTrailer?.key

  return (
    <div className='w-screen'>
    <iframe className='w-screen aspect-video' src={"https://www.youtube.com/embed/"+key+"?&autoplay=1&mute=1"} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    </div>
  )
}

export default VideoBackground