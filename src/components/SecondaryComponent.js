import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryComponent = () => {
  const movies=useSelector(store=>store?.movies);

  return (
    <div className='bg-black'>
    <div className='mt-0 md:-mt-55 pl-4 md:pl-12 relative z-20'>
      <MovieList title={'Now playing'} movies={movies.nowPlayingMovies}/>
      <MovieList title={'Popular'} movies={movies.PopularMovies}/>
      <MovieList title={'Top Rated'} movies={movies.TopRatedMovies}/>
      <MovieList title={'Upcoming'} movies={movies.UpcomingMovies}/>
      
</div>
    </div>
  )
}

export default SecondaryComponent