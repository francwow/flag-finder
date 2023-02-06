import fetchCountries from "./fetchCountries";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Flag from "./Flag";

const Search = () => {
  const [currentCountry, setCurrentCountry] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const results = useQuery(["countries"], fetchCountries);
  const countries = results.data;

  const lookCountry = () => {
    countries.forEach((country) => {
      if (searchValue === country.name.common) {
        console.log(country);
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

      {currentCountry ? (
        <div className="country-container">
          <Flag currentCountry={currentCountry} />
        </div>
      ) : null}
    </div>
  );
};

export default Search;
