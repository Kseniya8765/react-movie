import React from "react";
import { Link } from "react-router-dom";
import "./movies.scss";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../../../config";

export const Movies = ({
  id,
  title,
  poster_path,
  release_date,
  vote_average
}) => {
  const img = `${IMAGE_BASE_URL}${POSTER_SIZE}${poster_path}`;
  const date = release_date.slice(0, 4);

  return (
    <Link className="movie" key={id} to={`/movie/${id}`}>
      <img src={img} alt="img" />
      <p>{date}</p>
      <div className="movie-text">
        <h3 className="movie-title">{title}</h3>
        <p className="movie-rate">{vote_average}</p>
      </div>
    </Link>
  );
};
