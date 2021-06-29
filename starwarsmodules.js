// This code is by no means the best solution, but will help you explore some of
// the topics in javascript
import axios from "axios";
const selection = ["Title", "Director", "Producer", "Release_date"];
const baseURL = `https://swapi.dev/api/films/?search=`;

async function print(urls, category) {
  const results = {};
  let content = [];
  for (const url of urls) {
    await axios
      .get(url)
      .then((res) => {
        content.push(res.data.name);
        results[category] = content;
      })
      .catch((err) => console.log(err));
  }
  displayOutput(results, category);
}

const displayOutput = (dataset, category) => {
  const length = category.length + 5;  
  console.log("\n"); 
  repeat("-", length);
  console.log(`${category.toUpperCase()}:`);
  repeat("-", length);
  dataset[category].forEach(value => console.log(value));
  repeat("-", length);
};

const repeat = (char, times) => {
  console.log(char.repeat(times));
};

const prepareKey = film => {
  let keys = [];
  for (const [key, value] of Object.entries(film)) {
    value instanceof Array && keys.push(key);
  }
  return keys;
};

export { print, prepareKey, repeat, selection, baseURL };
