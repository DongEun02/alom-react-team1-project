import React, { useEffect, useState } from "react";
import "./MovieDetail.css";
import Header from "./Header";


const MovieDetail = ({ movieId }) => {
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState(null);

  const API_KEY = "4cbc149868277003c1011b19515e855d";
  const BASE_URL = "https://api.themoviedb.org/3";

      // 영화 상세 정보 따오기
  useEffect(() => {
    if (!movieId) return;

    fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=ko-KR`)
      .then(res => res.json())
      .then(data => setMovie(data));

    fetch(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=ko-KR`)
      .then(res => res.json())
      .then(data => setCredits(data));
  }, [movieId]);

  if (!movie || !credits) return <div className="movie-detail-wrapper">로딩 중...</div>;

  const director = credits.crew.find(person => person.job === "Director");
  const castList = credits.cast.slice(0, 3).map(actor => actor.name).join(", ");

  return (
    <div className="movie-detail-wrapper">
      <Header />
      <img
        className="movie-poster"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />

      <h2 className="movie-title">{movie.title}</h2>

      <div className="movie-info-box">
        <p><strong>감독:</strong> {director?.name || "정보 없음"}</p>
        <p><strong>출연:</strong> {castList}</p>
        <p><strong>줄거리:</strong><br />{movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieDetail;