import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchCountry from "./fetchCountry";

const Details = () => {
  const { name } = useParams();

  const countryData = useQuery(["details", name], fetchCountry);

  const country = countryData.data;

  return (
    <div className="details-container">
      <h1>{name}</h1>
      {/* <img src={country[0].flags.png} alt={country[0].name} />
      <p>{country[0].capital}</p>
      <p>{country[0].region}</p>
      <p>{country[0].population}</p> */}
    </div>
  );
};

export default Details;
