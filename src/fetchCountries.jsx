const fetchCountries = async () => {
  const data = await fetch(`https://restcountries.com/v2/all`);

  if (!data.ok) {
    throw new Error("fetch not ok");
  }

  return data.json();
};

export default fetchCountries;

// let artUrl = "https://restcountries.com/v3.1/all";
// let imgContainer = document.querySelector(".img-container");
// let input = document.getElementById("search");
// let searchBtn = document.getElementById("submit");

// async function getJSON() {
//   let getData = await fetch(artUrl);
//   let data = await getData.json();
//   console.log(data);
//   return data;
// }
