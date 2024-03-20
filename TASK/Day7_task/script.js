//Solving problems using array functions on rest countries data

//Get all the countries from Asia continent /region using Filter function

let xhr = new XMLHttpRequest();
//console.log(xhr);
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function () {
  const data = JSON.parse(xhr.response);
  console.log(data);
  const asianCountries = data.filter(country => country.region === 'Asia');
  const countriesWithLowPopulation = data.filter(country =>
     {
    const population = country.population;
    return population && population < 200000;
});

  // Log the names of Asian countries
console.log("Asian Countries:");
asianCountries.forEach(country => console.log(country.name.common));
// Log the names of countries with low population
console.log("Countries with population less than 2 lakhs:");
countriesWithLowPopulation.forEach(country => console.log(country.name.common));
  
 // Iterate over each country and print name, capital, and flag
 data.forEach(country => {
    const name = country.name.common;
    const capital = country.capital || "N/A"; // Handling cases where capital may not be available
    const flag = country.flags.png;

    console.log(`Country: ${name}`);
    console.log(`Capital: ${capital}`);
    console.log(`Flag: ${flag}`);
    console.log("---------------------------");
  });


// Calculate total population using reduce function
const totalPopulation = data.reduce((accumulator, country) => {
    const population = country.population;
    return accumulator + (population ? population : 0); // If population is not available, treat it as 0
 }, 0);

// Log the total population
console.log("Total population of all countries:", totalPopulation);

// Filter countries that use US dollars as currency
const usDollarCountries = data.filter(country => {
    const currencies = country.currencies;
    return currencies && currencies.hasOwnProperty('USD');
  });

  // Log the names of countries that use US dollars as currency
  console.log("Countries that use US dollars as currency:");
  usDollarCountries.forEach(country => console.log(country.name.common));
}




