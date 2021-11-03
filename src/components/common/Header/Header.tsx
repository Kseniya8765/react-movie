import React from "react";
import "./header.scss";
import { Search } from "./Search/Search";
export const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="head">
            <div className="logo">
              <h1>TMDB</h1>
              <p>Millions of movies,TV shows and people.Explore now.</p>
            </div>
            <div className="favorites">
              <img
                src="https://pngicon.ru/file/uploads/izbrannoye.png"
                alt="favorites"
              />
            </div>
          </div>
        </div>
      </header>
      <Search />
    </>
  );
};
