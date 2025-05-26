import "./MovieCard.css";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie, large = false }) => {
  const nav = useNavigate();
  if (!movie) return null;

  return (
    <div
      className="movie-card"
      style={{
        width: large ? "300px" : "180px",
      }}
    >
      <p className="moviecard-title">{movie.title}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        onClick={() => nav(`/movie/${movie.id}`)}
      />

      <p className="moviecard-rating">⭐ {movie.vote_average.toFixed(1)}</p>
    </div>
  );
};

export default MovieCard;
