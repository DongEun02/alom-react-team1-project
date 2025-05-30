import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import MovieCard from "../components/MovieCard";

const BASE_URL = "https://api.themoviedb.org/3";

const Rating = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=ko-KR&page=1`
    )
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.results.sort(
          (a, b) => b.vote_average - a.vote_average
        );
        setMovies(sorted);
      });
  }, []);

  if (movies.length === 0) return <div>로딩 중...</div>;

  const topMovie = movies[0];
  const others = movies.slice(1);

  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "black",
        color: "white",
        padding: "30px",
      }}
    >
      <Header />
      <p>평점순으로 나열한 결과입니다.</p>

      {/* 제일 평점 높은 영화 */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "40px",
        }}
      >
        <MovieCard movie={topMovie} highlight />
      </div>

      {/* 나머지 영화들 */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {others.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Rating;
