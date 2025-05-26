import styled from "styled-components";

const PosterWrapper = styled.div`
  width: 100%;
  aspect-ratio: 2 / 3; /* 포스터 비율 유지 */
`;

const Poster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

export default function MovieItem({ posterImgUrl }) {
  return (
    <PosterWrapper>
      <Poster
        src={`https://image.tmdb.org/t/p/w500${posterImgUrl}`}
        alt="movie poster"
      />
    </PosterWrapper>
  );
}
