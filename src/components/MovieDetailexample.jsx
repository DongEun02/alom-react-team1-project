import React, { useEffect, useState } from "react";

const MovieDetail = ({ movieId }) => {
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState(null);

  const API_KEY = "4cbc149868277003c1011b19515e855d";
  const BASE_URL = "https://api.themoviedb.org/3";

  useEffect(() => {
    if (!movieId) return;

    // 영화 상세 정보 요청
    fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=ko-KR`)
      .then(res => res.json())
      .then(data => setMovie(data));

    // 출연진 및 감독 정보 요청
    fetch(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=ko-KR`)
      .then(res => res.json())
      .then(data => setCredits(data));
  }, [movieId]);

  if (!movie || !credits) return <div style={{ color: "white" }}>로딩 중...</div>;

  const director = credits.crew.find(person => person.job === "Director");
  const castList = credits.cast.slice(0, 3).map(actor => actor.name).join(", ");

  return (
    <div style={{ display: "flex", backgroundColor: "black", color: "white", padding: "20px" }}>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        style={{ width: "300px", borderRadius: "10px" }}
      />
      <div style={{ marginLeft: "30px" }}>
        <h2>{movie.title}</h2>
        <p><strong>감독:</strong> {director?.name || "정보 없음"}</p>
        <p><strong>출연:</strong> {castList}</p>
        <p><strong>줄거리:</strong></p>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieDetail;
