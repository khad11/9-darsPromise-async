const container = document.querySelector(".info-container");
const form = document.querySelector("form");

///malumotni olib keldim
const request = (countryName) => {
  fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then((info) => {
      return info.json();
    })
    .then((data) => {
      const country = data[0];
      container.innerHTML = `
        <img src=${country.flags.svg} alt=""/>
        <h2>Common Name: ${country.name.official}</h2>
        <h3>Captial:${country.capital}</h3>
        <h3>Population: ${country.population}</h3> 
        <h3>area: ${country.area} km^2</h3> 
        <h3>continents: ${country.continents}</h3> 
        <h3> Tel Number: ${country.idd.root}</h3> 
        `;
    })
    .catch((err) => {
      console.log(err);
    });
};

// inputni eshitamiz
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchInput = form.search.value;
  request(searchInput);
});
