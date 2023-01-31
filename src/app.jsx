import React from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  return <h1>Hello from React-App!</h1>;
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

// flag finder apptree

let artUrl = "https://restcountries.com/v3.1/all";
let imgContainer = document.querySelector(".img-container");
let input = document.getElementById("search");
let searchBtn = document.getElementById("submit");

async function getJSON() {
  let getData = await fetch(artUrl);
  let data = await getData.json();
  console.log(data);
  return data;
}

getJSON()
  .then((data) => {
    searchBtn.addEventListener("click", () => {
      imgContainer.innerHTML = "";
      // console.log(input.value);
      data.forEach((element) => {
        // console.log(element.name.official);
        if (input.value === element.name.common) {
          console.log(element.name.official);
          let title = document.createElement("h2");
          let flag = document.createElement("img");
          flag.src = element.flags.png;
          title.innerHTML = element.name.common;
          imgContainer.append(title, flag);
        }
      });
    });
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        imgContainer.innerHTML = "";
        // console.log(input.value);
        data.forEach((element) => {
          // console.log(element.name.official);
          if (input.value === element.name.common) {
            console.log(element.name.official);
            let title = document.createElement("h2");
            let flag = document.createElement("img");
            flag.src = element.flags.png;
            title.innerHTML = element.name.common;
            imgContainer.append(title, flag);
          }
        });
      }
    });
  })
  .catch((err) => console.log("errors " + err.message));
