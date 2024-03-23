import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { openai } from "../utils/openAI";
import { options } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const lan = useSelector((store) => store.lang.lang);
  const searchText = useRef(null);
  const dispatch=useDispatch();
  console.log("lan", lan);

const getMovieInfo=async(movie)=>{
const data=await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1',options)
const json = await data.json();

return json.results;
}
  const handleGPTclick = async (e) => {
    e.preventDefault();
    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query:" +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example result: Gadar, Sholay, Don, Golamaal, koi mil gaya";

    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    if(!chatCompletion?.choices){
      alert('API error ! try again')
    }
    const movies=chatCompletion.choices[0].message.content.split(',');

   const promiseArray= movies.map((movie)=>getMovieInfo(movie))
   const tmdbResults=await Promise.all(promiseArray)
    dispatch(addGptMovieResult({movieNames:movies,movieResults:tmdbResults}))
    console.log('whole list->',tmdbResults);
    console.log(movies)
  }; 

  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[lan]?.GptSearchPlaceholder}
        />
        <button
          onClick={handleGPTclick}
          className="rounded-lg bg-red-700 text-white py-2 px-4 m-4 col-span-3 font-bold text-l"
        >
          {lang[lan]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
