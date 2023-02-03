import fetchCountries from "./fetchCountries";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { useState } from "react";

const Search = () => {
  const [currentCountry, setCurrentCountry] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const results = useQuery(["countries"], fetchCountries);
  const countries = results.data;

  const lookCountry = () => {
    countries.forEach((country) => {
      if (searchValue === country.name) {
        setCurrentCountry(country);
      }
    });
  };

  const searchInputHandler = (e) => {
    if (e.key === "Enter") {
      lookCountry();
    }
  };

  const searchBtnHandler = () => {
    lookCountry();
  };

  const onSearch = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="search-wrapper">
      <div className="search-container">
        <input
          type="search"
          name="search"
          id="search"
          onKeyDown={searchInputHandler}
          onInput={onSearch}
        />
        <input
          type="submit"
          name="submit"
          id="submit"
          className="submit-btn"
          onClick={searchBtnHandler}
        />
      </div>

      <span>{searchValue}</span>

      {currentCountry ? (
        <Link to={`/details/${currentCountry.name}`}>
          <div className="img-container">
            <h2>{currentCountry.name}</h2>
            <img src={currentCountry.flags.png} alt={currentCountry.name} />
          </div>
        </Link>
      ) : null}
    </div>
  );
};

export default Search;
