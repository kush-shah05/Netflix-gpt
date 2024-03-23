import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BCKGRND } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
    <div className="fixed -z-10">
        <img
          src={BCKGRND}
          alt=""
        />
      </div>
    <GptSearchBar/>
    <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch