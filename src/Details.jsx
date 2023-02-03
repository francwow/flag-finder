import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchCountry from "./fetchCountry";

const Details = () => {
  const { name } = useParams();

  const country = useQuery(["details", name], fetchCountry);

  return <h1>{name}</h1>;
};

export default Details;
