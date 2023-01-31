import fetchCountries from "./fetchCountries";
import { useQuery } from "@tanstack/react-query";

const Search = () => {
  const results = useQuery(["countries"], fetchCountries);
  const countries = results.data;

  const searchInputHandler = (e) => {
    const imgContainer = document.querySelector(".img-container");
    if (e.key === "Enter") {
      imgContainer.innerHTML = "";
      console.log(countries);
      countries.forEach((country) => {
        if (e.target.value === country.name) {
          console.log(country);
          const title = document.createElement("h2");
          const flag = document.createElement("img");
          title.innerHTML = country.name;
          flag.src = country.flags.png;
          imgContainer.append(title, flag);
        }
      });
    }
  };

  const searchBtnHandler = () => {
    const input = document.getElementById("search");
    const imgContainer = document.querySelector(".img-container");
    imgContainer.innerHTML = "";

    countries.forEach((country) => {
      if (input.value === country.name) {
        console.log(country);
        const title = document.createElement("h2");
        const flag = document.createElement("img");
        title.innerHTML = country.name;
        flag.src = country.flags.png;
        imgContainer.append(title, flag);
      }
    });
  };

  return (
    <div className="search-wrapper">
      <div className="search-container">
        <input
          type="search"
          name="search"
          id="search"
          onKeyDown={searchInputHandler}
        />
        <input
          type="submit"
          name="submit"
          id="submit"
          onClick={searchBtnHandler}
        />
      </div>
      <div className="img-container"></div>
    </div>
  );
};

export default Search;
