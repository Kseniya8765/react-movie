import React, { useState, useEffect } from "react";
import "./movies.scss";
//import { Link } from "react-router-dom";
// import "./main.scss";
// import { Header } from "../Header/Header";
// import { Nav } from "../Pagination/Nav";
// import { Footer } from "../Footer/Footer";
// import {Movies} from "./Movies/Movies"
//import { Loader } from "../Loader/Loader";
//import { IMAGE_BASE_URL, POSTER_SIZE } from "../../../../config";

export const MovieRecomendations = ({ props }) => {
  //console.log(props);

  const [data, setData] = useState(null);
  const { id } = props.match.params;

  useEffect(() => {
    let isMounted = true;

    fetch(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=b8a4bccf1aa12fc34184a2ae9d1e08eb&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((results) => {
        console.log(results);

        if (isMounted) setData(results);
      })
      .catch((e) => console.log(e));

    return () => {
      isMounted = false;
    };
  }, [id]);

  if (!data) return null;

  //const img = `${IMAGE_BASE_URL}${POSTER_SIZE}${data.backdrop_path}`;
  //  <img src={img} alt="img" />
  /*     <h2> {data.original_title}</h2>
      <h3>{data.genres.map((item) => item.name)}</h3>
      <p> {data.overview}</p> */
  return <div className="details">hello</div>;
};
