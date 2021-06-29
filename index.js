// require() all the necessary files
const axios = require('axios').default; // adds autocomplete to the mix 👀
const prompt = require('prompt-sync')({sigint:true});

// save a reference of the baseURL
const baseURL = `https://swapi.dev/api/films/?search=`;

// helper function to help fetch the data from the specified url
const fetchHelper = (url) => {
  axios.get(url)
  .then((res) => {console.log(`\t${res.data.name}\n`)})
  .catch(error => {console.log(error.message)});

};

// prompt the user for the film value
const filmSearchValue = prompt('Enter the name of the film >> ');
// use axios to fetch
axios.get(baseURL+`${filmSearchValue}`)
.then(res => {
  const results = res.data.results;
  // console.log(results);
  results.forEach(film => {
    console.log(`
    Film Name: ${film.title}\n
    Director: ${film.director}\n
    Producer: ${film.producer}\n
    Release Date: ${film.release_date}\n
    Characters: ${film.characters.map(url=>fetchHelper(url)).join(' ')}\n
    Planets: ${film.planets.map(url=>fetchHelper(url)).join(' ')}\n
    Species: ${film.species.map(url=>fetchHelper(url)).join(' ')}\n
    Starships: ${film.starships.map(url=>fetchHelper(url)).join(' ')}\n`);
    console.log(`\nFinished Loading ...\n\n`);
  })
})
.catch(error => {
  console.log(error.message);
})