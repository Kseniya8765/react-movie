import React from "react";
import "./notFound.scss";

export const NotFound = () => {
  return (
    <div className="not-found">
      <div className="text">
        <h1 className="glitch">404</h1>
        <p>This page doesn't exist.</p>
        <p>
          Go back to <a href="/">Home page</a>
        </p>
      </div>
    </div>
  );
};
