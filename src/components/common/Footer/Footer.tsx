import React from "react";
import "./footer.scss";

export const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="column">
            <a
              href="https://www.themoviedb.org"
              target="_blank"
              rel="noopener noreferrer"
              className="tmdb"
            >
              <img
                src="https://cdn-images-1.medium.com/max/1200/1*vIR7iO-1GnY2xYxL6NiYkw.png"
                alt="tmdb"
              />
            </a>
            <p>A React based project to discover movies using TMDB API.</p>
            <p>
              View repository on{" "}
              <a
                href="https://github.com/Kseniya8765"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              .
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
