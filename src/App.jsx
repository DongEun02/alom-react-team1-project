import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MovieInfo from "./pages/MovieInfo";
import Home from "./pages/Home";
import SearchMovie from "./pages/SearchMovie";
import Rating from "./pages/Rating";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchMovie />} />
        <Route path="/rating" element={<Rating />} />
        <Route path="/movie/:id" element={<MovieInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
