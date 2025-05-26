import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import Header from "../components/Header";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

const PosterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr); // 한 행에 7개
  gap: 16px;
  padding: 20px;
`;

const SearchBar = styled.form`
  display: flex;
  gap: 5px;
  width: 100%;
  max-width: 800px;
  padding: 20px;
  box-sizing: border-box;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 10px;
  background: black;
  border: 1px solid #808080;
  border-radius: 5px;
  color: white;
`;
const SearchButton = styled.button`
  border-radius: 5px;
  padding: 15px;
  background-color: rgb(105, 105, 105);
  color: white;
  border: none;
  cursor: pointer;
`;

const SearchMovie = () => {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const queryParam = searchParams.get("q") || "";
  const [searchMovie, setSearchMovie] = useState([]);

  useEffect(() => {
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
        `https://api.themoviedb.org/3/search/movie?query=${queryParam}&include_adult=true&language=ko-KR&page=1`,
        options
      );
      const search = await res.json();
      setSearchMovie(search.results);
    }

    searchData();
  }, [searchParams]);

  function onChangeSearch(e) {
    setSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/search?q=${search}`);
  }

  return (
    <PageWrapper>
      <Header />
      <SearchBar onSubmit={handleSubmit}>
        <SearchInput
          style={{ flex: 1, padding: "16px" }}
          placeholder="검색어를 입력하세요..."
          onChange={onChangeSearch}
        />
        <SearchButton type="submit">검색</SearchButton>
      </SearchBar>
      <PosterGrid>
        {searchMovie.map((movie) => (
          <MovieCard key={movie.id} movie={movie}></MovieCard>
        ))}
      </PosterGrid>
    </PageWrapper>
  );
};

export default SearchMovie;
