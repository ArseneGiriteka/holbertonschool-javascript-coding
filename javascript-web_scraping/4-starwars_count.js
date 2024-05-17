#!/usr/bin/node
const request = require('request');
const url = process.argv[2];
const characterId = '18';

request(url, function (error, response, body) {
  if (!error) {
    let count = 0;
    const movies = JSON.parse(body).results;
    for (const movie of movies) {
      for (const character of movie.characters) {
        if (character.includes(characterId)) {
          count++;
        }
      }
    }
    console.log(count);
  }
});
