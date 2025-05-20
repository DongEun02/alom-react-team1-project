import { useState } from "react";

const SearchedMovieData = ({ id }) => {
  return <div></div>;
};

const SearchMovie = () => {
  const [query, setQuery] = useState("");
  const [searchMovie, setSearchMovie] = useState([]);

  function onChangeSearch(e) {
    setQuery(e.target.value);
  }
  async function searchData() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOWJkNzQ4MWJiMzE0Mjg0OWMzYjY3MjYxYzU4NzIzOCIsIm5iZiI6MTc0NzcxOTQ0OS41MDEsInN1YiI6IjY4MmMxNTE5ZjZjZjIwNzZmM2UyNTExYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6oFSMOPSVI3bY8aHLin9MmLuM4wNHFPREt_eB5mwAy8",
      },
    };

    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=true&language=ko-KR&page=1`,
      options
    );
    const search = await res.json();
    setSearchMovie(search.results);
    console.log(searchMovie);
  }

  return (
    <div>
      <form action={searchData}>
        <input placeholder="검색어를 입력하세요..." onChange={onChangeSearch} />
        <button type="submit">검색</button>
      </form>
      <div>
        {searchMovie.map((movie) => (
          <div>{movie.title}</div>
        ))}
      </div>
    </div>
  );
};

export default SearchMovie;
