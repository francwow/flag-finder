const fetchCountry = async ({ queryKey }) => {
  const countryName = queryKey[1];
  const data = await fetch(
    `https://restcountries.com/v3.1/name/${countryName}`
  );

  if (!data.ok) {
    throw new Error("fetch not ok");
  }

  return data.json();
};

export default fetchCountry;
