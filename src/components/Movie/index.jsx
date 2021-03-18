import React from "react";

const Movie = ({ movie }) => {
  const { poster_path, title } = movie;
  const imgBase = "https://image.tmdb.org/t/p/w500";
  return (
    <div>
      <div>{title}</div>
      <img src={`${imgBase}${poster_path}`} alt={title} loading="lazy" />
    </div>
  ); 
}

export default Movie;