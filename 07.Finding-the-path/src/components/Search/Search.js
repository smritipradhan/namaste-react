import React from "react";
import "./Search.css";

const Search = ({ handleChange, value }) => {
  return (
    <>
      <input className="search-input" onChange={handleChange} value={value} />
    </>
  );
};

export default Search;
