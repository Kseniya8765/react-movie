import React, { useState, useEffect } from "react";
import "./search.scss";
//import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

/*const filter = (inputFilterValue, todo) => {
  if (inputFilterValue === "") return todo;
  return todo.filter((item) =>
    item.taskName.toLowerCase().includes(inputFilterValue.toLowerCase())
  );
};*/

//const filteredList = filter(inputFilterValue, todo);

export const Search = () => {
  //const [inputFilterValue, setInputFilterValue] = useState("");

 /* const inputHandler = (e) => {
    const { value } = e.target;
    setInputFilterValue(value);
  };
  onChange={inputHandler}*/

  return (
    <form className="search" noValidate autoComplete="off">
      <div className="container">
        <TextField id="standard-basic" label="Search by title" />
      </div>
    </form>
  );
};
