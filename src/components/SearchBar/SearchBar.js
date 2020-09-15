import React from "react";
import "./search-bar.css";

const SearchBar = ({ placeholder, handleChange }) => {
  return (
    <div className="searchbar">
      <label htmlFor="search">
        <input
          id="search"
          type="search"
          placeholder={placeholder}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default SearchBar;
