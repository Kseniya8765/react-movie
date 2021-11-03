import React, { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import "./main.scss";
import { Header } from "../Header/Header";
import { Nav } from "../Pagination/Nav";
import { Footer } from "../Footer/Footer";
import { Movies } from "./Movies/Movies";
//import { Loader } from "../Loader/Loader";

export const Main = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    let isMounted = true;

    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=b8a4bccf1aa12fc34184a2ae9d1e08eb&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then(({ results }) => {
        //console.log(results);

        if (isMounted) setData(results);
      })
      .catch((e) => console.log(e));

    return () => {
      isMounted = false;
    };
  }, []);

  if (!data) return null;

  return (
    <div>
      <Header />
      <div className="movies">
        <div className="container">
          <div className="movie-box">
            {data.map((item, index) => (
              <Movies key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
      <Nav />
      <Footer />
    </div>
  );
};
/*
  return (
    <div className="pills">
      {data.map((item, index) => (
          <Link className="starships" key={index} to={`/starships/${item.url.slice(31)}`}>{item.name}</Link>
      ))}
    </div>
  );
};
*/
