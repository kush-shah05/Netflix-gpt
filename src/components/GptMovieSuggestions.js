import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  if (!movieNames) {
    return null;
  }

  return (movieResults?.length===0)?(<div>
    <h1>Loading...</h1>
  </div>):(
    <div className="p-4 m-4 bg-black text-white bg-opacity-70">
      <div>
        {movieNames.map((movieName, index) => (
          <MovieList
            title={movieName}
            key={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
