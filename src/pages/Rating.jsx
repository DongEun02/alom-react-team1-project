import React, { useEffect, useState } from "react";

const API_KEY = "4cbc149868277003c1011b19515e855d";
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
      <div style={{ textAlign: "center" }}>
        <a
          href="/"
          style={{ color: "red", fontSize: "30px", fontWeight: "bold" }}
        >
          Kimbab CINEMA
        </a>
      </div>
      <p>평점순으로 나열한 결과입니다.</p>

      {/* 제일 평점 높은 영화 */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "40px",
        }}
      >
        <div style={{position:"relative"}}>
          <img
            src={`https://image.tmdb.org/t/p/w500${topMovie.poster_path}`}
            alt={topMovie.title}
            style={{
              width: "300px",
              borderRadius: "10px",
              display: "block",
              // objectFit: "cover",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "0",
              left: "0",
              backgroundColor: "yellow",
              color: "black",
              width: "60px",
              display: "flex",
              justifyContent:"center"
            }}
          >
            ⭐ {topMovie.vote_average.toFixed(1)}
          </div>
        </div>
      </div>

      {/* 나머지 영화들 */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {others.map((movie) => (
          <div
            key={movie.id}
            style={{
              width: "calc(20% - 20px)",
              boxSizing: "border-box",
              position: "relative",
            }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              style={{
                width: "100%",
                height: "280px",
                // objectFit: "cover",
                borderRadius: "5px",
                display: "block",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "0",
                left: "0",
                backgroundColor: "yellow",
                color: "black",
                width: "60px",
                display: "flex",
              }}
            >
              ⭐ {movie.vote_average.toFixed(1)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rating;