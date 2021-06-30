import { prepareKey, print, repeat, selection, baseURL } from './starwarsmodules.js'; 
import axios from 'axios';
import PromptSync from 'prompt-sync';

const prompt = PromptSync({ sigint: true });
const filmSearchValue = prompt("Enter the name of a star wars film >> ");

async function showStarWars(filmname) {
    let response = await axios.get(`${baseURL}${filmname}`);
    let film = await response.data.results;
    repeat('*', 40);
    selection.forEach(topic => console.log(`| ${topic}: ${film[0][topic.toLowerCase()]}`));
    repeat('*', 40);

    const keys = prepareKey(film[0]);
    keys.forEach(key => print(film[0][key], key));
}



showStarWars(filmSearchValue);