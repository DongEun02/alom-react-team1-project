import "./MovieControlBar.css";
import { useNavigate } from "react-router-dom";

const MovieControlBar = ({ isToday, setIsToday }) => {
  const nav = useNavigate();

  return (
    <div className="movie-control-bar">
      <span>{isToday ? "오늘의 인기 영화" : "이 주의 인기 영화"}</span>

      <label className="switch">
        <input
          type="checkbox"
          checked={!isToday}
          onChange={() => setIsToday(!isToday)}
        />
        <span className="slider" />
      </label>

      <div className="search-rating">
        <span onClick={() => nav("/search")}>🔍 검색</span>
        <span>|</span>
        <span onClick={() => nav("/rated")}>평점순 보기</span>
      </div>
    </div>
  );
};

export default MovieControlBar;
