import React from "react";
import "./Search.css";

const Search = ({ handleChange }) => {
  return (
    <>
      <input className="search-input" onChange={handleChange} />
    </>
  );
};

export default Search;
