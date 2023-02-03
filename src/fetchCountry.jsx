const fetchCountry = async ({ queryKey }) => {
  const name = queryKey[1];
  const data = await fetch(`https://restcountries.com/v2/name/${name}`);

  if (!data.ok) {
    throw new Error("fetch not ok");
  }

  return data.json();
};

export default fetchCountry;
