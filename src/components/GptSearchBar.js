import React from 'react'
import { useSelector } from 'react-redux'
import lang from '../utils/languageConstants'

const GptSearchBar = () => {
    const lan=useSelector((store)=>store.lang.lang)
    console.log("lan",lan)
  return (
    <div className='pt-[10%] flex justify-center'>
    <form className='w-1/2 bg-black grid grid-cols-12'>
        <input type="text" className='p-4 m-4 col-span-9' placeholder={lang[lan]?.GptSearchPlaceholder}/>
        <button onClick={(e)=>e.preventDefault()} className='rounded-lg bg-red-700 text-white py-2 px-4 m-4 col-span-3 font-bold text-l'>{lang[lan]?.search}</button>
    </form>
    </div>
  )
}

export default GptSearchBar