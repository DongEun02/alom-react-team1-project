import "./App.css";
import { Routes, Route } from "react-router-dom";
import MovieInfo from "./pages/MovieInfo";
import Home from "./pages/Home";
import SearchMovie from "./pages/SearchMovie";
import Rating from "./pages/Rating";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchMovie />} />
        <Route path="/rate" element={<Rating />} />
        <Route path="/movie/:id" element={<MovieInfo />} />
      </Routes>
    </>
  );
}

export default App;
