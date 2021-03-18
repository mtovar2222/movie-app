import React from "react";

import Movie from "../Movie"
import useFetch from "../../hooks/useFetch"

const Discover = () => {
  const BASE = "https://api.themoviedb.org/3";
  const url = `${BASE}/discover/movie?api_key=d139fe92b0bb2b6ad21bffbf849372b8`;
  const { response, error, isLoading } = useFetch(url, {});

  return (
    <div>
      <div>
        <h3>Discover</h3>
        <div>
          {
            isLoading ? (
              "Loading..."
            ) : (
              response && response.results && response.results.map(movie => (
                <Movie key={movie.id} movie={movie} />
              ))
            )
          }
        </div>
      </div>
    </div>
  );
}

export default Discover;