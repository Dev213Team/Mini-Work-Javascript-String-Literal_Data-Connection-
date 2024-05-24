import countries from "./data/countries.js";
//console.log(countries);

document.getElementById("searchButton").addEventListener("click", function () {
  const countryName = document.getElementById("countryInput").value;
  const country = countries.find(
    (c) => c.name.toLowerCase() === countryName.toLowerCase()
  );

  const resultElement = document.getElementById("result");

  if (country) {
    const { name, capital, population } = country;
    resultElement.textContent = `${name}'s population is ${population.toLocaleString()} and the capital is ${capital}.`;
  } else {
    resultElement.textContent =
      `Sorry we didn't find ${countryName}, Please enter a valid country name`;
  }
});
