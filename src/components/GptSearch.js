import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BCKGRND } from '../utils/constants'

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          src={BCKGRND}
          alt=""
          className='h-screen object-cover md:h-full'
        />
      </div>
      <div className=''>
    
    <GptSearchBar/>
    <GptMovieSuggestions/>
    </div>
    </>
   
  )
}

export default GptSearch