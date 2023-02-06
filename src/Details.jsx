import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchCountry from "./fetchCountry";

const Details = () => {
  const { countryName } = useParams();

  const countryData = useQuery(["details", countryName], fetchCountry);

  const country = countryData.data;

  return countryData.isFetched && country ? (
    <div className="details-container">
      <h1>{country[0].name.common}</h1>
      <img src={country[0].flags.png} alt={country[0].name} />
      <p>{`Capital: ${country[0].capital}`}</p>
      <p>{`Region: ${country[0].region}`}</p>
      <p>{`Population: ${country[0].population}`}</p>
    </div>
  ) : countryData.isFetched && !country?.length ? (
    <span>No Results Found.</span>
  ) : (
    <span>Loading...</span>
  );
};

export default Details;
