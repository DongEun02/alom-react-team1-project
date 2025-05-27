import Header from "../components/Header";
import MovieControlBar from "../components/MovieControlBar";
import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";

const Home = () => {
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const [isToday, setIsToday] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      const timeWindow = isToday ? "day" : "week";
      const res = await fetch(
        `https://api.themoviedb.org/3/trending/movie/${timeWindow}?api_key=${API_KEY}&language=ko-KR`
      );
      const data = await res.json();
      setMovies(data.results);
    };

    fetchTrendingMovies();
  }, [isToday, API_KEY]); // isToday 바뀔 때마다 다시 fetch

  // 첫 번째 영화 분리
  const [topMovie, ...restMovies] = movies;

  // 나머지 영화 5개씩 묶기
  const rows = [];
  for (let i = 0; i < restMovies.length; i += 5) {
    rows.push(restMovies.slice(i, i + 5));
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <MovieControlBar isToday={isToday} setIsToday={setIsToday} />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <MovieCard movie={topMovie} large={true} />
      </div>
      {rows.map((row, idx) => (
        <div
          key={idx}
          style={{ display: "flex", justifyContent: "center", gap: "50px" }}
        >
          {row.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Home;
