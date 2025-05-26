import React from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";

const MovieInfo = () => {
  const { id } = useParams(); // URL에서 movieId 추출해서 MOvieDetail에 보냄

  return (
    <div>
      <MovieDetail movieId={id} />
    </div>
  );
};

export default MovieInfo;
